-- =====================================================
-- COMPLETE HOME PAGE CMS UPDATE - ALL SECTIONS
-- =====================================================
-- This script adds 3 new sections to the home page CMS:
-- 1. Why Impact 224 Section (features grid)
-- 2. Projects Showcase Section (case studies)
-- 3. Latest Insights Section (blog preview)
--
-- Run this entire script in Supabase SQL Editor
-- Safe to re-run - checks for existing data before updating
-- =====================================================

-- =====================================================
-- SECTION 1: Why Impact 224
-- =====================================================
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

-- =====================================================
-- SECTION 2: Projects Showcase
-- =====================================================
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

-- =====================================================
-- SECTION 3: Latest Insights
-- =====================================================
UPDATE cms_content
SET content = jsonb_set(
    content,
    '{latestInsights}',
    jsonb_build_object(
        'sectionTitle', 'Latest Insights',
        'sectionSubtitle', 'Strategies to dominate your niche.',
        'blog1Category', 'Strategy',
        'blog1Image', 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200',
        'blog1Title', 'The Death of Traditional SEO: What''s Next in 2025?',
        'blog1Date', 'Oct 24, 2024',
        'blog1ReadTime', '6 min read',
        'blog2Category', 'UX/UI Design',
        'blog2Image', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        'blog2Title', 'Why Your Website Conversion Rate is Low (And How to Fix It)',
        'blog2Date', 'Oct 20, 2024',
        'blog2ReadTime', '8 min read',
        'blog3Category', 'Paid Media',
        'blog3Image', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
        'blog3Title', 'Maximizing ROAS on Meta Ads in a Post-Cookie World',
        'blog3Date', 'Oct 15, 2024',
        'blog3ReadTime', '5 min read',
        'blog4Category', 'Branding',
        'blog4Image', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        'blog4Title', 'Brand Storytelling: The Only Moat Left',
        'blog4Date', 'Oct 10, 2024',
        'blog4ReadTime', '7 min read'
    )
)
WHERE page_id = 'home'
AND NOT content ? 'latestInsights';

-- =====================================================
-- VERIFICATION
-- =====================================================
-- Check all 3 sections were added successfully
SELECT 
    page_id,
    CASE 
        WHEN content ? 'whyImpact224' THEN '✓ Why Impact 224'
        ELSE '✗ Why Impact 224 MISSING'
    END as section1_status,
    CASE 
        WHEN content ? 'projectsShowcase' THEN '✓ Projects Showcase'
        ELSE '✗ Projects Showcase MISSING'
    END as section2_status,
    CASE 
        WHEN content ? 'latestInsights' THEN '✓ Latest Insights'
        ELSE '✗ Latest Insights MISSING'
    END as section3_status,
    updated_at
FROM cms_content
WHERE page_id = 'home';

-- =====================================================
-- SUCCESS!
-- =====================================================
-- If all sections show ✓, the migration was successful!
-- You can now access these sections in the admin interface:
-- /admin/login → Home → Landing Page
--
-- New Admin Sections:
-- 1. Why Impact 224 Section (9 fields)
-- 2. Projects Showcase Section (15 fields)
-- 3. Latest Insights Section (22 fields)
--
-- Total: 46 new editable fields!
-- =====================================================
