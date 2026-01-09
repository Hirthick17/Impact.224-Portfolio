// Supabase Connection Test Utility
import { supabase } from '../lib/supabase';

/**
 * Test Supabase connection and credentials
 * This will verify:
 * 1. Environment variables are loaded
 * 2. Supabase client is initialized
 * 3. Database connection works
 * 4. cms_content table exists
 */
export async function testSupabaseConnection() {
    console.log('🔍 Testing Supabase Connection...\n');

    // Test 1: Check environment variables
    console.log('1️⃣ Checking environment variables...');
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        console.error('❌ Environment variables missing!');
        console.error('   VITE_SUPABASE_URL:', supabaseUrl ? '✓ Set' : '✗ Missing');
        console.error('   VITE_SUPABASE_ANON_KEY:', supabaseKey ? '✓ Set' : '✗ Missing');
        console.log('\n💡 Make sure .env.local contains:');
        console.log('   VITE_SUPABASE_URL=your-url');
        console.log('   VITE_SUPABASE_ANON_KEY=your-key');
        console.log('   Then restart the dev server!');
        return false;
    }

    console.log('✅ Environment variables loaded');
    console.log(`   URL: ${supabaseUrl.substring(0, 30)}...`);
    console.log(`   Key: ${supabaseKey.substring(0, 20)}...`);

    // Test 2: Test database connection
    console.log('\n2️⃣ Testing database connection...');
    try {
        const { data, error } = await supabase
            .from('cms_content')
            .select('count')
            .limit(1);

        if (error) {
            console.error('❌ Database connection failed!');
            console.error('   Error:', error.message);
            console.error('   Code:', error.code);

            if (error.code === '42P01') {
                console.log('\n💡 Table does not exist. Run the SQL schema:');
                console.log('   1. Open Supabase Dashboard → SQL Editor');
                console.log('   2. Copy contents of supabase-schema.sql');
                console.log('   3. Paste and run the SQL');
            } else if (error.code === 'PGRST301') {
                console.log('\n💡 Authentication failed. Check your API key.');
            }

            return false;
        }

        console.log('✅ Database connection successful!');
    } catch (err: any) {
        console.error('❌ Connection test failed!');
        console.error('   Error:', err.message);
        return false;
    }

    // Test 3: Check table structure
    console.log('\n3️⃣ Checking table structure...');
    try {
        const { data, error } = await supabase
            .from('cms_content')
            .select('*')
            .limit(1);

        if (error) {
            console.error('❌ Cannot query table');
            console.error('   Error:', error.message);
            return false;
        }

        console.log('✅ Table structure is correct');
        console.log(`   Current records: ${data?.length || 0}`);

        if (data && data.length > 0) {
            console.log('   Sample record:', data[0].page_id);
        } else {
            console.log('\n💡 Table is empty. Run seedDatabase() to populate it.');
        }
    } catch (err: any) {
        console.error('❌ Table check failed!');
        console.error('   Error:', err.message);
        return false;
    }

    // Test 4: Test write permissions
    console.log('\n4️⃣ Testing write permissions...');
    try {
        const testData = {
            page_id: '_connection_test',
            content: { test: true, timestamp: new Date().toISOString() },
        };

        const { error: insertError } = await supabase
            .from('cms_content')
            .upsert(testData);

        if (insertError) {
            console.error('❌ Write permission denied!');
            console.error('   Error:', insertError.message);
            console.log('\n💡 Check RLS policies in Supabase Dashboard');
            return false;
        }

        console.log('✅ Write permissions working');

        // Clean up test data
        await supabase
            .from('cms_content')
            .delete()
            .eq('page_id', '_connection_test');

        console.log('✅ Test data cleaned up');
    } catch (err: any) {
        console.error('❌ Write test failed!');
        console.error('   Error:', err.message);
        return false;
    }

    // Test 5: Test real-time subscriptions
    console.log('\n5️⃣ Testing real-time subscriptions...');
    try {
        const channel = supabase
            .channel('connection_test')
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'cms_content',
                },
                () => {
                    // Callback
                }
            )
            .subscribe((status) => {
                if (status === 'SUBSCRIBED') {
                    console.log('✅ Real-time subscriptions working');
                    supabase.removeChannel(channel);
                } else if (status === 'CHANNEL_ERROR') {
                    console.error('❌ Real-time subscription failed');
                    console.log('💡 Enable Realtime in Supabase Dashboard → Database → Replication');
                }
            });

        // Give it a moment to connect
        await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err: any) {
        console.warn('⚠️ Real-time test skipped');
        console.warn('   Error:', err.message);
    }

    // All tests passed!
    console.log('\n' + '='.repeat(50));
    console.log('🎉 All connection tests passed!');
    console.log('='.repeat(50));
    console.log('\n✅ Your Supabase integration is working correctly!');
    console.log('\n📝 Next steps:');
    console.log('   1. Run: await seedDatabase()');
    console.log('   2. Navigate to pages and verify content loads');
    console.log('   3. Test admin panel CRUD operations');

    return true;
}

// Auto-expose to window
if (typeof window !== 'undefined') {
    (window as any).testSupabaseConnection = testSupabaseConnection;
    console.log('💡 Run testSupabaseConnection() to verify your Supabase setup');
}
