import { createClient } from '@supabase/supabase-js';
import { defaultProjectsData } from '../admin/schemas/projectsSchema';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing Supabase environment variables!');
    console.error('Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fixProjectsData() {
    console.log('🔧 Fixing Projects Data...');
    console.log('');

    try {
        // Step 1: Delete existing projects data
        console.log('🗑️  Step 1: Deleting existing projects data...');
        const { error: deleteError } = await supabase
            .from('cms_content')
            .delete()
            .eq('page_id', 'projects');

        if (deleteError) {
            console.error('❌ Error deleting projects data:', deleteError);
            return false;
        }

        console.log('✅ Deleted existing incomplete data');
        console.log('');

        // Step 2: Insert complete projects data with default values
        console.log('💾 Step 2: Inserting complete projects data...');
        const { error: insertError } = await supabase
            .from('cms_content')
            .insert({
                page_id: 'projects',
                content: defaultProjectsData
            });

        if (insertError) {
            console.error('❌ Error inserting projects data:', insertError);
            return false;
        }

        console.log('✅ Inserted complete projects data!');
        console.log('');
        console.log('📋 Data structure included:');
        console.log('  ✓ pageHeader (Page Title & Subtitle)');
        console.log('  ✓ project1 (FinTech Dashboard)');
        console.log('  ✓ project2 (Nike Summer Campaign)');
        console.log('  ✓ project3 (TechTalks Docuseries)');
        console.log('');

        return true;

    } catch (error) {
        console.error('❌ Exception:', error);
        return false;
    }
}

// Run the fix
fixProjectsData().then(success => {
    if (success) {
        console.log('🎉 Projects data fixed successfully!');
        console.log('💡 Visit http://localhost:3000/Impact.224-Portfolio/projects to see all 3 projects');
    } else {
        console.log('❌ Failed to fix projects data');
        process.exit(1);
    }
});
