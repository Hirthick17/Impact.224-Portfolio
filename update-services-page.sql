-- Update Services page data with complete information
-- This ensures all service cards have proper content for the admin interface

UPDATE cms_content
SET content = jsonb_set(
    jsonb_set(
        jsonb_set(
            jsonb_set(
                content,
                '{mainPageHeader}',
                jsonb_build_object(
                    'pageTitle', 'OUR EXPERTISE',
                    'pageAccentText', 'SERVICES BUILT FOR IMPACT'
                )
            ),
            '{personalBranding}',
            jsonb_build_object(
                'displayTitle', 'PERSONAL BRANDING',
                'shortPitch', 'ESTABLISH YOUR AUTHORITY AND BUILD A POWERFUL ONLINE IDENTITY.',
                'heroCoverImage', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
                'estimatedPricing', '₹15,000 – ₹1,50,000 / MONTH'
            )
        ),
        '{videoEditing}',
        jsonb_build_object(
            'displayTitle', 'VIDEO EDITING',
            'shortPitch', 'HIGH-END POST-PRODUCTION THAT KEEPS VIEWERS HOOKED FOR LONGER.',
            'heroCoverImage', 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&q=80&w=1200',
            'estimatedPricing', '₹5,000 – ₹1,20,000 / PROJECT'
        )
    ),
    '{websiteDevelopment}',
    jsonb_build_object(
        'displayTitle', 'WEBSITE DEVELOPMENT',
        'shortPitch', 'HIGH-PERFORMANCE, CONVERSION-DRIVEN DIGITAL ASSETS BUILT FOR SPEED.',
        'heroCoverImage', 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
        'estimatedPricing', '₹40,000 – ₹5,00,000+'
    )
)
WHERE page_id = 'services';

-- If the record doesn't exist, create it
INSERT INTO cms_content (page_id, content, created_at, updated_at)
SELECT 
    'services',
    jsonb_build_object(
        'mainPageHeader', jsonb_build_object(
            'pageTitle', 'OUR EXPERTISE',
            'pageAccentText', 'SERVICES BUILT FOR IMPACT'
        ),
        'personalBranding', jsonb_build_object(
            'displayTitle', 'PERSONAL BRANDING',
            'shortPitch', 'ESTABLISH YOUR AUTHORITY AND BUILD A POWERFUL ONLINE IDENTITY.',
            'heroCoverImage', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
            'estimatedPricing', '₹15,000 – ₹1,50,000 / MONTH'
        ),
        'videoEditing', jsonb_build_object(
            'displayTitle', 'VIDEO EDITING',
            'shortPitch', 'HIGH-END POST-PRODUCTION THAT KEEPS VIEWERS HOOKED FOR LONGER.',
            'heroCoverImage', 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&q=80&w=1200',
            'estimatedPricing', '₹5,000 – ₹1,20,000 / PROJECT'
        ),
        'websiteDevelopment', jsonb_build_object(
            'displayTitle', 'WEBSITE DEVELOPMENT',
            'shortPitch', 'HIGH-PERFORMANCE, CONVERSION-DRIVEN DIGITAL ASSETS BUILT FOR SPEED.',
            'heroCoverImage', 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
            'estimatedPricing', '₹40,000 – ₹5,00,000+'
        )
    ),
    NOW(),
    NOW()
WHERE NOT EXISTS (
    SELECT 1 FROM cms_content WHERE page_id = 'services'
);

-- Verify the update
SELECT 
    page_id,
    content->'mainPageHeader' as page_header,
    content->'personalBranding' as personal_branding,
    content->'videoEditing' as video_editing,
    content->'websiteDevelopment' as website_development,
    updated_at
FROM cms_content
WHERE page_id = 'services';
