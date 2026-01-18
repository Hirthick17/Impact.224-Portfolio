// API Keys Test Script
// Run this to verify all API keys before deployment

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '.env.local') });

console.log('\n🔍 Testing API Keys...\n');
console.log('='.repeat(60));

// Test 1: Supabase Connection
async function testSupabase() {
    console.log('\n1️⃣  Testing Supabase Connection...');
    
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
        console.log('   ❌ FAILED: Missing Supabase credentials');
        console.log('   Missing:', !supabaseUrl ? 'VITE_SUPABASE_URL' : 'VITE_SUPABASE_ANON_KEY');
        return false;
    }
    
    console.log('   📍 URL:', supabaseUrl);
    console.log('   🔑 Key:', supabaseKey.substring(0, 20) + '...');
    
    try {
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        // Test database connection by fetching from cms_content
        const { data, error } = await supabase
            .from('cms_content')
            .select('page_id')
            .limit(1);
        
        if (error) {
            console.log('   ❌ FAILED: Database query error');
            console.log('   Error:', error.message);
            return false;
        }
        
        console.log('   ✅ SUCCESS: Supabase connection working!');
        console.log('   📊 Database accessible, found', data?.length || 0, 'records');
        return true;
    } catch (error) {
        console.log('   ❌ FAILED: Connection error');
        console.log('   Error:', error.message);
        return false;
    }
}

// Test 2: EmailJS Configuration
function testEmailJS() {
    console.log('\n2️⃣  Testing EmailJS Configuration...');
    
    const serviceId = process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (!serviceId || !templateId || !publicKey) {
        console.log('   ❌ FAILED: Missing EmailJS credentials');
        const missing = [];
        if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID');
        if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID');
        if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY');
        console.log('   Missing:', missing.join(', '));
        return false;
    }
    
    console.log('   📧 Service ID:', serviceId);
    console.log('   📝 Template ID:', templateId);
    console.log('   🔑 Public Key:', publicKey);
    console.log('   ✅ SUCCESS: All EmailJS credentials present');
    console.log('   ℹ️  Note: Actual email sending can only be tested in browser');
    return true;
}

// Test 3: Gemini API Key
function testGeminiAPI() {
    console.log('\n3️⃣  Testing Gemini API Key...');
    
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
        console.log('   ⚠️  WARNING: Gemini API key is placeholder');
        console.log('   Current value:', apiKey);
        console.log('   ℹ️  This is optional - site will work without it');
        return true; // Not critical
    }
    
    console.log('   🔑 API Key:', apiKey.substring(0, 15) + '...');
    console.log('   ✅ SUCCESS: Gemini API key configured');
    console.log('   ℹ️  Note: Actual API testing requires making a request');
    return true;
}

// Test 4: Admin Credentials
function testAdminCredentials() {
    console.log('\n4️⃣  Testing Admin Credentials...');
    
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    
    if (!email || !password) {
        console.log('   ❌ FAILED: Missing admin credentials');
        const missing = [];
        if (!email) missing.push('ADMIN_EMAIL');
        if (!password) missing.push('ADMIN_PASSWORD');
        console.log('   Missing:', missing.join(', '));
        return false;
    }
    
    console.log('   📧 Email:', email);
    console.log('   🔒 Password:', '*'.repeat(password.length));
    
    if (password === 'admin123') {
        console.log('   ⚠️  WARNING: Using default password!');
        console.log('   🔐 Recommendation: Change password after deployment');
    }
    
    console.log('   ✅ SUCCESS: Admin credentials configured');
    return true;
}

// Run all tests
async function runAllTests() {
    const results = {
        supabase: false,
        emailjs: false,
        gemini: false,
        admin: false
    };
    
    results.supabase = await testSupabase();
    results.emailjs = testEmailJS();
    results.gemini = testGeminiAPI();
    results.admin = testAdminCredentials();
    
    console.log('\n' + '='.repeat(60));
    console.log('\n📊 Test Results Summary:\n');
    
    console.log('   Supabase:        ', results.supabase ? '✅ PASS' : '❌ FAIL');
    console.log('   EmailJS:         ', results.emailjs ? '✅ PASS' : '❌ FAIL');
    console.log('   Gemini API:      ', results.gemini ? '✅ PASS' : '⚠️  OPTIONAL');
    console.log('   Admin Creds:     ', results.admin ? '✅ PASS' : '❌ FAIL');
    
    const criticalTests = results.supabase && results.emailjs && results.admin;
    
    console.log('\n' + '='.repeat(60));
    
    if (criticalTests) {
        console.log('\n✅ ALL CRITICAL TESTS PASSED!');
        console.log('🚀 Your site is ready for deployment!\n');
        return true;
    } else {
        console.log('\n❌ SOME TESTS FAILED!');
        console.log('⚠️  Please fix the issues before deploying.\n');
        return false;
    }
}

// Run tests
runAllTests().then(success => {
    process.exit(success ? 0 : 1);
}).catch(error => {
    console.error('\n💥 Unexpected error:', error);
    process.exit(1);
});
