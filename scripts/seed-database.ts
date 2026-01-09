// Database Seeding Script
// This script seeds the Supabase database with default content from data.ts and schemas

import { seedDatabaseWithDefaults } from '../lib/cms-service';
import { defaultHomeData } from '../admin/schemas/homeSchema';
import { defaultAboutData } from '../admin/schemas/aboutSchema';
import { defaultServicesData } from '../admin/schemas/servicesSchema';
import { defaultPricingData } from '../admin/schemas/pricingSchema';
import { defaultBlogData } from '../admin/schemas/blogSchema';
import { defaultProjectsData } from '../admin/schemas/projectsSchema';
import { defaultServiceWebDevData } from '../admin/schemas/serviceWebDevSchema';
import { defaultServiceMarketingData } from '../admin/schemas/serviceMarketingSchema';
import { defaultServiceVideoData } from '../admin/schemas/serviceVideoSchema';

/**
 * Seed the database with default content
 * Run this once to populate your Supabase database
 */
export async function seedDatabase() {
    console.log('🌱 Starting database seeding...');
    console.log('📦 Seeding 9 pages: home, about, services, pricing, blog, projects, service-web-dev, service-marketing, service-video');

    const defaultDataMap = {
        home: defaultHomeData,
        about: defaultAboutData,
        services: defaultServicesData,
        pricing: defaultPricingData,
        blog: defaultBlogData,
        projects: defaultProjectsData,
        'service-web-dev': defaultServiceWebDevData,
        'service-marketing': defaultServiceMarketingData,
        'service-video': defaultServiceVideoData,
    };

    await seedDatabaseWithDefaults(defaultDataMap);

    console.log('✅ Database seeding complete!');
    console.log('📊 Seeded pages:', Object.keys(defaultDataMap).join(', '));
}

// Auto-run if this file is executed directly
if (typeof window !== 'undefined') {
    // Browser environment - expose to window for manual execution
    (window as any).seedDatabase = seedDatabase;
    console.log('💡 Run seedDatabase() in the console to seed the database');
}
