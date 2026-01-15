-- Create newsletter CTA global component data
-- This section appears on all pages and is globally editable

-- First, create the newsletter page entry if it doesn't exist
INSERT INTO cms_content (page_id, content, created_at, updated_at)
SELECT 
    'newsletter',
    jsonb_build_object(
        'newsletterCTA', jsonb_build_object(
            'heading', 'Subscribe to our newsletter',
            'subheading', 'Stay updated with our latest insights and exclusive content.',
            'button1Text', 'Case Studies',
            'button1Link', '/projects',
            'button2Text', 'Scale Your Business',
            'button2Link', '/contact'
        )
    ),
    NOW(),
    NOW()
WHERE NOT EXISTS (
    SELECT 1 FROM cms_content WHERE page_id = 'newsletter'
);

-- If the record already exists, update it
UPDATE cms_content
SET 
    content = jsonb_build_object(
        'newsletterCTA', jsonb_build_object(
            'heading', 'Subscribe to our newsletter',
            'subheading', 'Stay updated with our latest insights and exclusive content.',
            'button1Text', 'Case Studies',
            'button1Link', '/projects',
            'button2Text', 'Scale Your Business',
            'button2Link', '/contact'
        )
    ),
    updated_at = NOW()
WHERE page_id = 'newsletter'
AND NOT content ? 'newsletterCTA';

-- Verify the update
SELECT 
    page_id,
    content->'newsletterCTA' as newsletter_cta_content,
    updated_at
FROM cms_content
WHERE page_id = 'newsletter';
