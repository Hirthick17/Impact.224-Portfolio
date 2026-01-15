// Script to check for duplicate entries in the database
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || '',
    process.env.VITE_SUPABASE_ANON_KEY || ''
);

async function checkDuplicates() {
    console.log('🔍 Checking for duplicate entries in cms_content table...\n');

    try {
        // Get all records from cms_content
        const { data, error } = await supabase
            .from('cms_content')
            .select('*')
            .order('page_id', { ascending: true });

        if (error) {
            console.error('❌ Error fetching data:', error);
            return;
        }

        if (!data || data.length === 0) {
            console.log('⚠️ No data found in cms_content table');
            return;
        }

        console.log(`📊 Total records: ${data.length}\n`);

        // Group by page_id
        const grouped = new Map<string, any[]>();
        data.forEach((record) => {
            const pageId = record.page_id;
            if (!grouped.has(pageId)) {
                grouped.set(pageId, []);
            }
            grouped.get(pageId)!.push(record);
        });

        console.log('📋 Records by page_id:\n');

        let hasDuplicates = false;

        grouped.forEach((records, pageId) => {
            if (records.length > 1) {
                hasDuplicates = true;
                console.log(`⚠️ DUPLICATE FOUND: ${pageId} (${records.length} records)`);
                records.forEach((record, index) => {
                    console.log(`   Record ${index + 1}:`);
                    console.log(`     - ID: ${record.id}`);
                    console.log(`     - Created: ${record.created_at}`);
                    console.log(`     - Updated: ${record.updated_at}`);
                    console.log(`     - Content keys: ${Object.keys(record.content || {}).join(', ')}`);
                });
                console.log('');
            } else {
                console.log(`✅ ${pageId} (1 record) - ID: ${records[0].id}`);
            }
        });

        if (hasDuplicates) {
            console.log('\n⚠️ DUPLICATES DETECTED!');
            console.log('This is causing the issue where edits don\'t reflect properly.');
            console.log('\nTo fix this, you need to:');
            console.log('1. Identify which record to keep (usually the most recent)');
            console.log('2. Delete the older duplicate records');
            console.log('3. Ensure your database has a UNIQUE constraint on page_id');
        } else {
            console.log('\n✅ No duplicates found! Each page has exactly one record.');
        }

    } catch (error) {
        console.error('❌ Exception:', error);
    }
}

checkDuplicates();
