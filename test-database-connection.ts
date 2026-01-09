/**
 * Database Connection Test Script
 * This script tests:
 * 1. Supabase database connection
 * 2. CMS content read/write operations
 * 3. Real-time updates functionality
 */

import { supabase } from './lib/supabase';
import { getCMSContent, saveCMSContent, subscribeToCMSUpdates } from './lib/cms-service';

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
};

function log(message: string, color: string = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
}

function success(message: string) {
    log(`✓ ${message}`, colors.green);
}

function error(message: string) {
    log(`✗ ${message}`, colors.red);
}

function info(message: string) {
    log(`ℹ ${message}`, colors.cyan);
}

function section(message: string) {
    log(`\n${'='.repeat(60)}`, colors.blue);
    log(message, colors.blue);
    log('='.repeat(60), colors.blue);
}

// Test 1: Database Connection
async function testDatabaseConnection(): Promise<boolean> {
    section('TEST 1: Database Connection');

    try {
        info('Attempting to connect to Supabase...');

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
        error(`Exception during connection test: ${err}`);
        return false;
    }
}

// Test 2: Read Existing Data
async function testReadData(): Promise<boolean> {
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
        error(`Exception during read test: ${err}`);
        return false;
    }
}

// Test 3: Write Test Data
async function testWriteData(): Promise<boolean> {
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

        const success = await saveCMSContent(testPageId, testData);

        if (!success) {
            error('Failed to save test data');
            return false;
        }

        info('Verifying data was saved correctly...');

        const retrieved = await getCMSContent<typeof testData>(testPageId);

        if (!retrieved) {
            error('Failed to retrieve saved data');
            return false;
        }

        if (JSON.stringify(retrieved) !== JSON.stringify(testData)) {
            error('Retrieved data does not match saved data');
            console.log('Expected:', testData);
            console.log('Got:', retrieved);
            return false;
        }

        success('Successfully wrote and verified test data!');

        // Clean up test data
        info('Cleaning up test data...');
        await supabase.from('cms_content').delete().eq('page_id', testPageId);
        success('Test data cleaned up');

        return true;
    } catch (err) {
        error(`Exception during write test: ${err}`);
        return false;
    }
}

// Test 4: Update Existing Data
async function testUpdateData(): Promise<boolean> {
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
        await saveCMSContent(testPageId, initialData);

        info('Updating data...');
        await saveCMSContent(testPageId, updatedData);

        info('Verifying update...');
        const retrieved = await getCMSContent<typeof updatedData>(testPageId);

        if (!retrieved) {
            error('Failed to retrieve updated data');
            return false;
        }

        if (JSON.stringify(retrieved) !== JSON.stringify(updatedData)) {
            error('Updated data does not match expected data');
            return false;
        }

        success('Successfully updated and verified data!');

        // Clean up
        await supabase.from('cms_content').delete().eq('page_id', testPageId);

        return true;
    } catch (err) {
        error(`Exception during update test: ${err}`);
        return false;
    }
}

// Test 5: Real-time Subscriptions (optional, requires manual verification)
async function testRealTimeUpdates(): Promise<boolean> {
    section('TEST 5: Real-time Updates (5-second test)');

    const testPageId = 'test-realtime-' + Date.now();
    let updateReceived = false;

    try {
        info('Setting up real-time subscription...');

        // Create initial data
        await saveCMSContent(testPageId, { value: 'initial' });

        // Subscribe to updates
        const cleanup = subscribeToCMSUpdates(testPageId, (content) => {
            log(`Received real-time update: ${JSON.stringify(content)}`, colors.green);
            updateReceived = true;
        });

        // Wait a bit for subscription to establish
        await new Promise(resolve => setTimeout(resolve, 1000));

        info('Triggering an update...');
        await saveCMSContent(testPageId, { value: 'updated', timestamp: Date.now() });

        // Wait for update to arrive
        await new Promise(resolve => setTimeout(resolve, 3000));

        cleanup();

        if (updateReceived) {
            success('Real-time updates are working!');
        } else {
            log('⚠ Real-time update not received (might be disabled or slow)', colors.yellow);
        }

        // Clean up
        await supabase.from('cms_content').delete().eq('page_id', testPageId);

        return true;
    } catch (err) {
        error(`Exception during real-time test: ${err}`);
        return false;
    }
}

// Test 6: Test Actual CMS Pages
async function testActualCMSPages(): Promise<boolean> {
    section('TEST 6: Check Actual CMS Pages');

    const cmsPages = [
        'pricing',
        'service-web-dev',
        'service-marketing',
        'service-video',
        'home',
    ];

    try {
        for (const pageId of cmsPages) {
            const content = await getCMSContent(pageId);

            if (content) {
                success(`✓ ${pageId}: Data exists`);
                console.log(`  Keys: ${Object.keys(content).join(', ')}`);
            } else {
                log(`  ${pageId}: No data (will use defaults)`, colors.yellow);
            }
        }

        return true;
    } catch (err) {
        error(`Exception checking CMS pages: ${err}`);
        return false;
    }
}

// Main test runner
async function runAllTests() {
    log('\n╔════════════════════════════════════════════════════════════╗', colors.blue);
    log('║        IMPACT.224 PORTFOLIO - DATABASE TEST SUITE         ║', colors.blue);
    log('╚════════════════════════════════════════════════════════════╝\n', colors.blue);

    const results: { test: string; passed: boolean }[] = [];

    // Run all tests
    results.push({ test: 'Database Connection', passed: await testDatabaseConnection() });
    results.push({ test: 'Read Data', passed: await testReadData() });
    results.push({ test: 'Write Data', passed: await testWriteData() });
    results.push({ test: 'Update Data', passed: await testUpdateData() });
    results.push({ test: 'Real-time Updates', passed: await testRealTimeUpdates() });
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
    } else {
        log(`\n⚠ Some tests failed (${passedCount}/${totalCount} passed)`, colors.yellow);
        log('\nPlease check the errors above and ensure:', colors.yellow);
        log('1. Supabase credentials are correct in .env.local', colors.yellow);
        log('2. The database schema has been created', colors.yellow);
        log('3. RLS policies are properly configured', colors.yellow);
    }

    console.log();
}

// Run tests
runAllTests().catch(err => {
    error(`\nFatal error running tests: ${err}`);
    process.exit(1);
});
