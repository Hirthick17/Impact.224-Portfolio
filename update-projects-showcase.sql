-- Update existing home page data to include projectsShowcase fields
-- Run this to add the new Projects Showcase section fields

UPDATE cms_content
SET content = jsonb_set(
    content,
    '{projectsShowcase}',
    jsonb_build_object(
        'sectionTitle', 'Recent Success Stories',
        'sectionSubtitle', 'Real businesses. Real growth. Real numbers.',
        'buttonText', 'View All Case Studies',
        'project1Title', 'FinTech Global Dashboard',
        'project1Stats', '40% INCREASE IN RETENTION',
        'project1Image', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        'project2Title', 'Nike Summer Campaign',
        'project2Stats', '3.5X ROAS',
        'project2Image', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200',
        'project3Title', 'TechTalks Docuseries',
        'project3Stats', '1M+ VIEWS ORGANIC',
        'project3Image', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
        'project4Title', 'Real Estate Lead Funnel',
        'project4Stats', '200+ LEADS/MONTH',
        'project4Image', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200'
    )
)
WHERE page_id = 'home'
AND NOT content ? 'projectsShowcase';

-- Verify the update
SELECT page_id, content->'projectsShowcase' as projects_showcase_content
FROM cms_content
WHERE page_id = 'home';
