-- Update existing home page data to include whyImpact224 fields
-- Run this to add the new Why Impact 224 section fields

UPDATE cms_content
SET content = jsonb_set(
    content,
    '{whyImpact224}',
    jsonb_build_object(
        'sectionTitle', 'Why Impact 224?',
        'feature1Title', 'Conversion First Design',
        'feature1Icon', 'Zap',
        'feature2Title', 'Data-Driven Identity',
        'feature2Icon', 'Users',
        'feature3Title', '99/100 Speed Score',
        'feature3Icon', 'TrendingUp',
        'feature4Title', '24/7 Priority Support',
        'feature4Icon', 'CheckCircle2'
    )
)
WHERE page_id = 'home'
AND NOT content ? 'whyImpact224';

-- Verify the update
SELECT page_id, content->'whyImpact224' as why_impact_224_content
FROM cms_content
WHERE page_id = 'home';
