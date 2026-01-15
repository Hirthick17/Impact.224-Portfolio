/**
 * Database Duplicate Check Script
 * Checks for duplicate entries in cms_content table
 * Run with: node scripts/check-duplicates.mjs
 */

import { createClient } from '@supabase/supabase-js';
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

// Validate credentials
if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase credentials!');
    process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDuplicates() {
    console.log('\n╔════════════════════════════════════════════════════════════╗');
    console.log('║         CHECKING FOR DUPLICATE DATABASE ENTRIES          ║');
    console.log('╚════════════════════════════════════════════════════════════╝\n');

    try {
        // Get all records from cms_content
        const { data, error } = await supabase
            .from('cms_content')
            .select('*')
            .order('page_id', { ascending: true });

        if (error) {
            console.error('❌ Error fetching data:', error.message);
            return;
        }

        if (!data || data.length === 0) {
            console.log('⚠️  No data found in cms_content table');
            return;
        }

        console.log(`📊 Total records in database: ${data.length}\n`);

        // Group by page_id
        const grouped = new Map();
        data.forEach((record) => {
            const pageId = record.page_id;
            if (!grouped.has(pageId)) {
                grouped.set(pageId, []);
            }
            grouped.get(pageId).push(record);
        });

        console.log('📋 Analysis by page_id:\n');
        console.log('─'.repeat(80));
        
        let hasDuplicates = false;
        const duplicatePages = [];
        
        grouped.forEach((records, pageId) => {
            if (records.length > 1) {
                hasDuplicates = true;
                duplicatePages.push({ pageId, records });
                console.log(`\n⚠️  DUPLICATE FOUND: "${pageId}" has ${records.length} records\n`);
                
                records.forEach((record, index) => {
                    console.log(`   Record #${index + 1}:`);
                    console.log(`     • ID: ${record.id}`);
                    console.log(`     • Created: ${new Date(record.created_at).toLocaleString()}`);
                    console.log(`     • Updated: ${new Date(record.updated_at).toLocaleString()}`);
                    
                    if (record.content) {
                        const contentKeys = Object.keys(record.content);
                        console.log(`     • Content fields: ${contentKeys.length} (${contentKeys.slice(0, 5).join(', ')}${contentKeys.length > 5 ? '...' : ''})`);
                    }
                    console.log('');
                });
                console.log('─'.repeat(80));
            } else {
                console.log(`✅ ${pageId.padEnd(30)} → 1 record (ID: ${records[0].id})`);
            }
        });

        console.log('\n' + '═'.repeat(80));
        console.log('SUMMARY');
        console.log('═'.repeat(80) + '\n');

        if (hasDuplicates) {
            console.log('❌ DUPLICATES DETECTED!\n');
            console.log(`Found ${duplicatePages.length} page(s) with duplicate entries:\n`);
            
            duplicatePages.forEach(({ pageId, records }) => {
                console.log(`  • ${pageId}: ${records.length} records`);
            });

            console.log('\n🔍 ROOT CAUSE:');
            console.log('   This is why your admin edits don\'t reflect on the website!');
            console.log('   When fetching data, the query returns one record (usually the first),');
            console.log('   but when updating, it may update a different record.\n');

            console.log('🔧 SOLUTION:');
            console.log('   You need to delete the duplicate records.\n');
            console.log('   For each duplicate page, keep the MOST RECENT record (latest updated_at)');
            console.log('   and delete the older ones.\n');

            console.log('📝 RECOMMENDED ACTIONS:\n');
            console.log('   1. Go to your Supabase dashboard');
            console.log('   2. Navigate to Table Editor → cms_content');
            console.log('   3. For each duplicate page, identify the most recent record');
            console.log('   4. Delete the older duplicate records');
            console.log('   5. Verify your database has a UNIQUE constraint on page_id column\n');

            console.log('⚡ QUICK FIX SQL:');
            console.log('   You can run this SQL in Supabase SQL Editor to keep only the latest:\n');
            console.log('   ```sql');
            console.log('   -- Keep only the most recent record for each page_id');
            console.log('   DELETE FROM cms_content a');
            console.log('   USING cms_content b');
            console.log('   WHERE a.page_id = b.page_id');
            console.log('   AND a.updated_at < b.updated_at;');
            console.log('   ```\n');

        } else {
            console.log('✅ NO DUPLICATES FOUND!\n');
            console.log('   Each page has exactly one record in the database.');
            console.log('   This is the correct state.\n');
            
            console.log('🔍 If you\'re still experiencing sync issues, check:\n');
            console.log('   1. Browser cache - Try hard refresh (Ctrl+Shift+R)');
            console.log('   2. Check if real-time subscriptions are working');
            console.log('   3. Verify Supabase RLS policies allow reading/writing');
            console.log('   4. Check browser console for errors\n');
        }

        console.log('═'.repeat(80) + '\n');

    } catch (error) {
        console.error('❌ Exception:', error.message);
        console.error(error);
    }
}

// Run the check
checkDuplicates();
