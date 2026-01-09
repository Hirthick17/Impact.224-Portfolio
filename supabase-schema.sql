-- Impact.224 Portfolio CMS Database Schema
-- This script creates the necessary tables and policies for the CMS content management

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create cms_content table to store all page content
CREATE TABLE IF NOT EXISTS cms_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_id TEXT NOT NULL UNIQUE,
    content JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on page_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_cms_content_page_id ON cms_content(page_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_cms_content_updated_at ON cms_content;
CREATE TRIGGER update_cms_content_updated_at
    BEFORE UPDATE ON cms_content
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE cms_content ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (anyone can view content)
CREATE POLICY "Allow public read access"
    ON cms_content
    FOR SELECT
    USING (true);

-- Create policy for public insert/update (for now, no authentication required)
-- NOTE: In production, you should restrict this to authenticated admin users
CREATE POLICY "Allow public insert"
    ON cms_content
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow public update"
    ON cms_content
    FOR UPDATE
    USING (true)
    WITH CHECK (true);

-- Optional: Create policy for delete (restricted for safety)
CREATE POLICY "Allow public delete"
    ON cms_content
    FOR DELETE
    USING (true);

-- Create a view for easier querying
CREATE OR REPLACE VIEW cms_content_summary AS
SELECT 
    page_id,
    created_at,
    updated_at,
    jsonb_object_keys(content) as content_keys
FROM cms_content;

-- Grant permissions
GRANT ALL ON cms_content TO anon;
GRANT ALL ON cms_content TO authenticated;
GRANT SELECT ON cms_content_summary TO anon;
GRANT SELECT ON cms_content_summary TO authenticated;
