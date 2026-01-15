
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

// ANSI Colors
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m'
};

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: Env vars missing');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function runVerificationCycle() {
  console.log(`${colors.cyan}\n=== Starting Pricing CMS Verification Cycle ===${colors.reset}`);
  
  // 1. READ
  console.log(`\n${colors.yellow}1. READING current data...${colors.reset}`);
  const { data: initialData, error: readError } = await supabase
    .from('cms_content')
    .select('content')
    .eq('page_id', 'pricing')
    .single();

  if (readError || !initialData) {
    console.error(`${colors.red}❌ Read Failed:${colors.reset}`, readError);
    return;
  }
  
  const originalPrice = initialData.content.personalBranding.tier1.pricingInIndia;
  console.log(`   Current Basic Price: ${colors.green}${originalPrice}${colors.reset}`);

  // 2. UPDATE
  const testPrice = `₹TEST-${Date.now()}`;
  console.log(`\n${colors.yellow}2. UPDATING to test price: ${testPrice}...${colors.reset}`);
  
  const updatedContent = { ...initialData.content };
  updatedContent.personalBranding.tier1.pricingInIndia = testPrice; // MODIFY

  const { error: updateError } = await supabase
    .from('cms_content')
    .update({ content: updatedContent, updated_at: new Date().toISOString() })
    .eq('page_id', 'pricing');

  if (updateError) {
    console.error(`${colors.red}❌ Update Failed:${colors.reset}`, updateError);
    return;
  }
  console.log(`   ${colors.green}Update successful.${colors.reset}`);

  // 3. VERIFY
  console.log(`\n${colors.yellow}3. VERIFYING update...${colors.reset}`);
  const { data: verifyData } = await supabase
    .from('cms_content')
    .select('content')
    .eq('page_id', 'pricing')
    .single();

  const newPrice = verifyData.content.personalBranding.tier1.pricingInIndia;
  if (newPrice === testPrice) {
    console.log(`   ${colors.green}✅ Verified: Price is now ${newPrice}${colors.reset}`);
  } else {
    console.error(`   ${colors.red}❌ Mismatch! Expected ${testPrice}, got ${newPrice}${colors.reset}`);
  }

  // 4. REVERT
  console.log(`\n${colors.yellow}4. REVERTING to original price...${colors.reset}`);
  updatedContent.personalBranding.tier1.pricingInIndia = originalPrice; // RESTORE

  const { error: revertError } = await supabase
    .from('cms_content')
    .update({ content: updatedContent, updated_at: new Date().toISOString() })
    .eq('page_id', 'pricing');

  if (revertError) {
    console.error(`${colors.red}❌ Revert Failed! Data is stuck on test value.${colors.reset}`);
  } else {
    console.log(`   ${colors.green}✅ Reverted successfully to ${originalPrice}${colors.reset}`);
  }

  console.log(`${colors.cyan}\n=== Verification Complete ===${colors.reset}\n`);
}

runVerificationCycle();
