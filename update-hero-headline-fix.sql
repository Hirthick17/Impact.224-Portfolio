-- Update Hero Headline to make it fully editable via CMS
-- This fixes the issue where "Leads Online." was hardcoded in the component

UPDATE cms_content
SET content = jsonb_set(
    content,
    '{hero,headline}',
    '"Stop Chasing Leads Online."'::jsonb
)
WHERE page_id = 'home';

-- Optional: If you want to match your admin edit intention and keep it as "Stop Chasing"
-- Uncomment the following instead:
-- UPDATE cms_content
-- SET content = jsonb_set(
--     content,
--     '{hero,headline}',
--     '"Stop Chasing"'::jsonb
-- )
-- WHERE page_id = 'home';
