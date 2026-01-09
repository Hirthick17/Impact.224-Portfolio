/**
 * Database Connection Test Script
 * Run with: node scripts/test-database.mjs
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

// Get directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local
const envPath = join(__dirname, '..', '.env.local');
try {
    const envFile = readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split('=');
        if (key && valueParts.length > 0) {
            process.env[key.trim()] = valueParts.join('=').trim();
        }
    });
} catch (error) {
    console.error('⚠ Warning: Could not load .env.local file');
}

// Get Supabase credentials
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

// ANSI colors
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
}

function success(message) {
    log(`✓ ${message}`, colors.green);
}

function error(message) {
    log(`✗ ${message}`, colors.red);
}

function info(message) {
    log(`ℹ ${message}`, colors.cyan);
}

function section(message) {
    log(`\n${'='.repeat(60)}`, colors.blue);
    log(message, colors.blue);
    log('='.repeat(60), colors.blue);
}

// Validate credentials
if (!supabaseUrl || !supabaseKey) {
    error('Missing Supabase credentials!');
    console.log('\nPlease ensure your .env.local file contains:');
    console.log('  VITE_SUPABASE_URL=your_supabase_url');
    console.log('  VITE_SUPABASE_ANON_KEY=your_anon_key');
    process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Test 1: Database Connection
async function testDatabaseConnection() {
    section('TEST 1: Database Connection');
    
    try {
        info('Attempting to connect to Supabase...');
        info(`URL: ${supabaseUrl.substring(0, 30)}...`);
        
        const { data, error } = await supabase
            .from('cms_content')
            .select('count')
            .limit(1);
        
        if (error) {
            error(`Database connection failed: ${error.message}`);
            return false;
        }
        
        success('Successfully connected to Supabase database!');
        return true;
    } catch (err) {
        error(`Exception during connection test: ${err.message}`);
        return false;
    }
}

// Test 2: Read Existing Data
async function testReadData() {
    section('TEST 2: Read Existing Data');
    
    try {
        info('Fetching all page IDs from database...');
        
        const { data, error } = await supabase
            .from('cms_content')
            .select('page_id, updated_at');
        
        if (error) {
            error(`Failed to read data: ${error.message}`);
            return false;
        }
        
        if (!data || data.length === 0) {
            log('⚠ No data found in database (this is okay for a new setup)', colors.yellow);
            return true;
        }
        
        success(`Found ${data.length} pages in database:`);
        data.forEach((row) => {
            console.log(`  - ${row.page_id} (last updated: ${new Date(row.updated_at).toLocaleString()})`);
        });
        
        return true;
    } catch (err) {
        error(`Exception during read test: ${err.message}`);
        return false;
    }
}

// Test 3: Write Test Data
async function testWriteData() {
    section('TEST 3: Write Test Data');
    
    const testPageId = 'test-page-' + Date.now();
    const testData = {
        title: 'Test Page',
        description: 'This is a test page created by the connection tester',
        timestamp: new Date().toISOString(),
        testValue: Math.random(),
    };
    
    try {
        info(`Creating test page: ${testPageId}`);
        
        const { error: insertError } = await supabase
            .from('cms_content')
            .upsert({
                page_id: testPageId,
                content: testData,
            });
        
        if (insertError) {
            error(`Failed to save test data: ${insertError.message}`);
            return false;
        }
        
        info('Verifying data was saved correctly...');
        
        const { data: retrieved, error: selectError } = await supabase
            .from('cms_content')
            .select('content')
            .eq('page_id', testPageId)
            .single();
        
        if (selectError) {
            error(`Failed to retrieve saved data: ${selectError.message}`);
            return false;
        }
        
        if (JSON.stringify(retrieved.content) !== JSON.stringify(testData)) {
            error('Retrieved data does not match saved data');
            return false;
        }
        
        success('Successfully wrote and verified test data!');
        
        // Clean up test data
        info('Cleaning up test data...');
        await supabase.from('cms_content').delete().eq('page_id', testPageId);
        success('Test data cleaned up');
        
        return true;
    } catch (err) {
        error(`Exception during write test: ${err.message}`);
        return false;
    }
}

// Test 4: Update Existing Data
async function testUpdateData() {
    section('TEST 4: Update Existing Data');
    
    const testPageId = 'test-update-' + Date.now();
    const initialData = {
        version: 1,
        content: 'Initial content',
    };
    const updatedData = {
        version: 2,
        content: 'Updated content',
        updatedAt: new Date().toISOString(),
    };
    
    try {
        info('Creating initial data...');
        await supabase.from('cms_content').upsert({
            page_id: testPageId,
            content: initialData,
        });
        
        info('Updating data...');
        await supabase.from('cms_content').upsert({
            page_id: testPageId,
            content: updatedData,
        });
        
        info('Verifying update...');
        const { data: retrieved, error } = await supabase
            .from('cms_content')
            .select('content')
            .eq('page_id', testPageId)
            .single();
        
        if (error || !retrieved) {
            error('Failed to retrieve updated data');
            return false;
        }
        
        if (JSON.stringify(retrieved.content) !== JSON.stringify(updatedData)) {
            error('Updated data does not match expected data');
            return false;
        }
        
        success('Successfully updated and verified data!');
        
        // Clean up
        await supabase.from('cms_content').delete().eq('page_id', testPageId);
        
        return true;
    } catch (err) {
        error(`Exception during update test: ${err.message}`);
        return false;
    }
}

// Test 5: Check Actual CMS Pages
async function testActualCMSPages() {
    section('TEST 5: Check Actual CMS Pages');
    
    const cmsPages = [
        'pricing',
        'service-web-dev',
        'service-marketing',
        'service-video',
        'home',
    ];
    
    try {
        for (const pageId of cmsPages) {
            const { data, error } = await supabase
                .from('cms_content')
                .select('content')
                .eq('page_id', pageId)
                .single();
            
            if (!error && data) {
                success(`${pageId}: Data exists`);
                const keys = Object.keys(data.content);
                console.log(`  Keys: ${keys.join(', ')}`);
            } else {
                log(`  ${pageId}: No data (will use defaults)`, colors.yellow);
            }
        }
        
        return true;
    } catch (err) {
        error(`Exception checking CMS pages: ${err.message}`);
        return false;
    }
}

// Main test runner
async function runAllTests() {
    log('\n╔════════════════════════════════════════════════════════════╗', colors.blue);
    log('║        IMPACT.224 PORTFOLIO - DATABASE TEST SUITE         ║', colors.blue);
    log('╚════════════════════════════════════════════════════════════╝\n', colors.blue);
    
    const results = [];
    
    // Run all tests
    results.push({ test: 'Database Connection', passed: await testDatabaseConnection() });
    results.push({ test: 'Read Data', passed: await testReadData() });
    results.push({ test: 'Write Data', passed: await testWriteData() });
    results.push({ test: 'Update Data', passed: await testUpdateData() });
    results.push({ test: 'CMS Pages Check', passed: await testActualCMSPages() });
    
    // Summary
    section('TEST SUMMARY');
    
    const passedCount = results.filter(r => r.passed).length;
    const totalCount = results.length;
    
    results.forEach(result => {
        if (result.passed) {
            success(`${result.test}: PASSED`);
        } else {
            error(`${result.test}: FAILED`);
        }
    });
    
    console.log();
    if (passedCount === totalCount) {
        log(`\n🎉 All tests passed! (${passedCount}/${totalCount})`, colors.green);
        log('\n✅ Your database connection is working correctly!', colors.green);
        log('✅ The admin interface should be able to read and write data.', colors.green);
        log('\n📝 Next steps:', colors.cyan);
        log('   1. Start the dev server: npm run dev', colors.cyan);
        log('   2. Go to http://localhost:5173/admin', colors.cyan);
        log('   3. Edit some content and check if it persists', colors.cyan);
    } else {
        log(`\n⚠ Some tests failed (${passedCount}/${totalCount} passed)`, colors.yellow);
        log('\nPlease check the errors above and ensure:', colors.yellow);
        log('1. Supabase credentials are correct in .env.local', colors.yellow);
        log('2. The database schema has been created (run supabase-schema.sql)', colors.yellow);
        log('3. RLS policies are properly configured', colors.yellow);
    }
    
    console.log();
}

// Run tests
runAllTests().catch(err => {
    error(`\nFatal error running tests: ${err.message}`);
    console.error(err);
    process.exit(1);
});
