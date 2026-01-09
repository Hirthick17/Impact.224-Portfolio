// Migration Script - Migrate localStorage data to Supabase
// This script helps migrate existing CMS data from localStorage to Supabase

import { migrateLocalStorageToSupabase } from '../lib/cms-service';

/**
 * Migrate all CMS data from localStorage to Supabase
 * This is a one-time operation
 */
export async function migrateToSupabase() {
    console.log('🚀 Starting migration from localStorage to Supabase...');
    console.log('This will copy all CMS data from localStorage to your Supabase database.');

    const result = await migrateLocalStorageToSupabase();

    console.log('\n📊 Migration Results:');
    console.log(`✅ Successfully migrated: ${result.migrated.length} pages`);
    if (result.migrated.length > 0) {
        console.log('   Pages:', result.migrated.join(', '));
    }

    if (result.failed.length > 0) {
        console.log(`❌ Failed to migrate: ${result.failed.length} pages`);
        console.log('   Pages:', result.failed.join(', '));
    }

    if (result.success) {
        console.log('\n✅ Migration completed successfully!');
        console.log('💡 You can now safely clear localStorage if desired.');
    } else {
        console.log('\n⚠️ Migration completed with errors. Please check the logs above.');
    }

    return result;
}

// Auto-run if this file is executed directly
if (typeof window !== 'undefined') {
    // Browser environment - expose to window for manual execution
    (window as any).migrateToSupabase = migrateToSupabase;
    console.log('💡 Run migrateToSupabase() in the console to migrate your data');
}
