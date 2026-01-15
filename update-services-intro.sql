-- Update existing home page data to include servicesIntro fields
-- Run this to add the new Services Introduction section fields

UPDATE cms_content
SET content = jsonb_set(
    content,
    '{servicesIntro}',
    jsonb_build_object(
        'sectionTitle', 'Revenue-First Digital Services',
        'sectionSubtitle', 'Most agencies focus on ''pretty''. We focus on ''profitable''.',
        'service1Heading', 'High-Performance Web Development',
        'service1Description', 'We build digital experiences that load instantly and convert visitors into customers.',
        'service1Image', 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
        'service2Heading', 'Data-Driven Digital Marketing',
        'service2Description', 'Stop guessing. Start scaling with precision-targeted campaigns.',
        'service2Image', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        'service3Heading', 'Visual Storytelling & Video',
        'service3Description', 'Capture attention in the first 3 seconds with high-retention video content.',
        'service3Image', 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&q=80&w=1200'
    )
)
WHERE page_id = 'home'
AND NOT content ? 'servicesIntro';

-- Verify the update
SELECT page_id, content->'servicesIntro' as services_intro_content
FROM cms_content
WHERE page_id = 'home';
