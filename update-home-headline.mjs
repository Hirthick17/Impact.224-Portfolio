import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ygydqxxeiuhtiabrtmex.supabase.co';
const supabaseKey = 'sb_publishable_O6rWC594cml7aRIAO98jsg_UDKFvZxn';

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateHomeHeadline() {
  console.log('Updating home page headline structure...');

  try {
    // Get current data
    const { data: currentData, error: fetchError } = await supabase
      .from('cms_content')
      .select('*')
      .eq('page_id', 'home')
      .single();

    if (fetchError) {
      console.error('Error fetching current data:', fetchError);
      return;
    }

    console.log('Current hero data:', JSON.stringify(currentData.content.hero, null, 2));

    // Update hero section with split headline
    const updatedContent = {
      ...currentData.content,
      hero: {
        ...currentData.content.hero,
        headlineLine1: 'Stop Chasing Leads',
        headlineLine2: 'Online',
        // Remove old headline field if it exists
        headline: undefined
      }
    };

    // Clean up undefined fields
    if (updatedContent.hero.headline === undefined) {
      delete updatedContent.hero.headline;
    }

    // Update the database
    const { data, error } = await supabase
      .from('cms_content')
      .update({ content: updatedContent })
      .eq('page_id', 'home')
      .select();

    if (error) {
      console.error('Error updating data:', error);
      return;
    }

    console.log('✅ Successfully updated home page headline!');
    console.log('New hero data:', JSON.stringify(data[0].content.hero, null, 2));

  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

updateHomeHeadline();
