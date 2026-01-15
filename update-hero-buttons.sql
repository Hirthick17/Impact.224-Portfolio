-- Update existing home page data to include button text fields
-- Run this to add the new primaryButtonText and secondaryButtonText fields

UPDATE cms_content
SET content = jsonb_set(
    jsonb_set(
        content,
        '{hero,primaryButtonText}',
        '"Audit My Presence"'
    ),
    '{hero,secondaryButtonText}',
    '"See Results"'
)
WHERE page_id = 'home'
AND NOT content->'hero' ? 'primaryButtonText';

-- Verify the update
SELECT page_id, section_id, content->'hero' as hero_content
FROM cms_content
WHERE page_id = 'home' AND section_id = 'hero';
