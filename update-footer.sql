-- Create footer global component data
-- This section appears on all pages and is globally editable

-- First, create the footer page entry if it doesn't exist
INSERT INTO cms_content (page_id, content, created_at, updated_at)
SELECT 
    'footer',
    jsonb_build_object(
        'branding', jsonb_build_object(
            'brandName', 'Impact',
            'brandNumber', '224',
            'description', 'Empowering students to craft their careers, build skills, and connect with opportunities that matter.'
        ),
        'socialMedia', jsonb_build_object(
            'linkedinUrl', 'https://linkedin.com/company/impact224',
            'instagramUrl', 'https://instagram.com/impact224',
            'youtubeUrl', 'https://youtube.com/@impact224'
        ),
        'resources', jsonb_build_object(
            'sectionTitle', 'Resources'
        ),
        'contact', jsonb_build_object(
            'sectionTitle', 'Contact Us',
            'email', 'hello@impact.224@gmail.com',
            'phone', '+91 99880 66050',
            'location', 'Ludhiana, Punjab'
        ),
        'copyright', jsonb_build_object(
            'copyrightText', '© 2025 Impact.224. All rights reserved.'
        )
    ),
    NOW(),
    NOW()
WHERE NOT EXISTS (
    SELECT 1 FROM cms_content WHERE page_id = 'footer'
);

-- If the record already exists, update it (only if sections don't exist)
UPDATE cms_content
SET 
    content = content || jsonb_build_object(
        'branding', jsonb_build_object(
            'brandName', 'Impact',
            'brandNumber', '224',
            'description', 'Empowering students to craft their careers, build skills, and connect with opportunities that matter.'
        ),
        'socialMedia', jsonb_build_object(
            'linkedinUrl', 'https://linkedin.com/company/impact224',
            'instagramUrl', 'https://instagram.com/impact224',
            'youtubeUrl', 'https://youtube.com/@impact224'
        ),
        'resources', jsonb_build_object(
            'sectionTitle', 'Resources'
        ),
        'contact', jsonb_build_object(
            'sectionTitle', 'Contact Us',
            'email', 'hello@impact.224@gmail.com',
            'phone', '+91 99880 66050',
            'location', 'Ludhiana, Punjab'
        ),
        'copyright', jsonb_build_object(
            'copyrightText', '© 2025 Impact.224. All rights reserved.'
        )
    ),
    updated_at = NOW()
WHERE page_id = 'footer'
AND (
    NOT content ? 'branding' OR
    NOT content ? 'socialMedia' OR
    NOT content ? 'resources' OR
    NOT content ? 'contact' OR
    NOT content ? 'copyright'
);

-- Verify the update
SELECT 
    page_id,
    content->'branding' as branding,
    content->'socialMedia' as social_media,
    content->'contact' as contact,
    updated_at
FROM cms_content
WHERE page_id = 'footer';
