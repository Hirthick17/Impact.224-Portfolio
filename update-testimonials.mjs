import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ygydqxxeiuhtiabrtmex.supabase.co';
const supabaseKey = 'sb_publishable_O6rWC594cml7aRIAO98jsg_UDKFvZxn';

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateProjectTestimonials() {
  console.log('Updating project testimonials...');

  try {
    // Get current data
    const { data: currentData, error: fetchError } = await supabase
      .from('cms_content')
      .select('*')
      .eq('page_id', 'projects')
      .single();

    if (fetchError) {
      console.error('Error fetching current data:', fetchError);
      return;
    }

    console.log('Current data:', JSON.stringify(currentData, null, 2));

    // Update project1 testimonial
    const updatedContent = {
      ...currentData.content,
      project1: {
        ...currentData.content.project1,
        testimonialText: 'Working with Impact.224 was a game-changer for our fintech platform. We were struggling with a clunky, outdated dashboard that was causing user frustration and high churn rates. The team didn\'t just redesign the interface—they completely reimagined our user experience. The migration to Next.js was seamless, and the performance improvements were immediate. Our load times dropped from over 4 seconds to under a second, which directly translated to better user engagement. What impressed me most was their attention to detail and their commitment to understanding our business goals. They delivered on time, stayed within budget, and the results speak for themselves. We secured our Series B funding largely because investors were blown away by the new platform.',
        testimonialAuthor: 'David Richardson',
        testimonialRole: 'CEO, FinFlow Systems',
        testimonialRating: '5',
        testimonialImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
      },
      project2: {
        ...currentData.content.project2,
        testimonialText: 'Our summer campaign needed to clear seasonal inventory without diluting our brand value—a delicate balance. Impact.224 approached this challenge with creativity and strategic thinking that exceeded our expectations. Instead of typical discount advertising, they crafted a \'Limited Edition\' narrative that created urgency while maintaining our premium positioning. The video assets they produced were high-energy and perfectly aligned with our brand aesthetic. Their use of lookalike audiences and dynamic retargeting was sophisticated and data-driven. We generated $1.2M in revenue with a 3.5x ROAS, and sold out our inventory two weeks ahead of schedule. The team was responsive, professional, and truly understood the Nike brand. I would absolutely work with them again.',
        testimonialAuthor: 'Sarah Martinez',
        testimonialRole: 'Marketing Director, Nike Regional',
        testimonialRating: '5',
        testimonialImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
      },
      project3: {
        ...currentData.content.project3,
        testimonialText: 'TechTalks was stuck in the long-form webinar format, and we knew we needed to pivot to short-form social content to reach younger audiences. Impact.224 took our extensive archive of webinar footage and transformed it into engaging 60-second vertical clips optimized for TikTok and Instagram. Their expertise in kinetic typography, sound design, and platform-specific optimization was evident in every piece. The hooks they created were algorithmically optimized and incredibly effective at stopping the scroll. Within three months, we grew our Instagram following by 150,000 and achieved over 1 million organic views. Most importantly, we saw a 45% increase in webinar signups from social channels. The ROI was phenomenal, and the team was a pleasure to work with. They understood our content, our audience, and the platforms better than anyone else we\'ve worked with.',
        testimonialAuthor: 'Michael Chen',
        testimonialRole: 'Content Director, TechTalks Media',
        testimonialRating: '5',
        testimonialImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
      }
    };

    // Update the database
    const { data, error } = await supabase
      .from('cms_content')
      .update({ content: updatedContent })
      .eq('page_id', 'projects')
      .select();

    if (error) {
      console.error('Error updating data:', error);
      return;
    }

    console.log('✅ Successfully updated project testimonials!');
    console.log('Updated data:', JSON.stringify(data, null, 2));

  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

updateProjectTestimonials();
