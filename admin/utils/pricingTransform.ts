import { PricingPageData, ServicePricingData, PricingTierData } from '../types';

/**
 * Transforms flat admin fields to nested tier objects for database storage
 * 
 * Converts:
 *   { tier1Name: "BASIC", tier1Tagline: "...", ... }
 * To:
 *   { tier1: { name: "BASIC", tagline: "...", ... } }
 */
export const flatToNested = (flatData: any): PricingPageData => {
    const transformService = (serviceData: any): ServicePricingData => {
        if (!serviceData) {
            return {
                serviceTitle: '',
                serviceSubtitle: '',
                tier1: createEmptyTier(),
                tier2: createEmptyTier(),
                tier3: createEmptyTier(),
            };
        }

        // If already nested (from SQL restore), return as-is
        if (serviceData.tier1 && typeof serviceData.tier1 === 'object') {
            return serviceData as ServicePricingData;
        }

        // Transform flat fields to nested objects
        const transformTier = (tierNum: number): PricingTierData => ({
            name: serviceData[`tier${tierNum}Name`] || '',
            tagline: serviceData[`tier${tierNum}Tagline`] || '',
            goal: serviceData[`tier${tierNum}Goal`] || '',
            includes: serviceData[`tier${tierNum}Includes`] || '',
            pricingInIndia: serviceData[`tier${tierNum}PricingInIndia`] || '',
            pricingInternational: serviceData[`tier${tierNum}PricingInternational`] || '',
            note: serviceData[`tier${tierNum}Note`] || '',
            popular: serviceData[`tier${tierNum}Popular`] === 'true' || serviceData[`tier${tierNum}Popular`] === true,
        });

        return {
            serviceTitle: serviceData.serviceTitle || '',
            serviceSubtitle: serviceData.serviceSubtitle || '',
            tier1: transformTier(1),
            tier2: transformTier(2),
            tier3: transformTier(3),
        };
    };

    return {
        pageHeader: flatData.pageHeader || { pageTitle: '', pageSubtitle: '' },
        personalBranding: transformService(flatData.personalBranding),
        socialMediaGrowth: transformService(flatData.socialMediaGrowth),
        websiteDevelopment: transformService(flatData.websiteDevelopment),
        appDevelopment: transformService(flatData.appDevelopment),
        growthMarketing: transformService(flatData.growthMarketing),
        strategyExecution: transformService(flatData.strategyExecution),
    };
};

/**
 * Transforms nested tier objects to flat admin fields for form editing
 * 
 * Converts:
 *   { tier1: { name: "BASIC", tagline: "...", ... } }
 * To:
 *   { tier1Name: "BASIC", tier1Tagline: "...", ... }
 */
export const nestedToFlat = (nestedData: PricingPageData): any => {
    const transformService = (serviceData: ServicePricingData | undefined): any => {
        // Helper to flatten a single tier, handling missing data gracefully
        const flattenTier = (tier: PricingTierData | undefined, tierNum: number) => {
            // If tier is missing, return empty fields for this tier
            if (!tier) {
                return {
                    [`tier${tierNum}Name`]: '',
                    [`tier${tierNum}Tagline`]: '',
                    [`tier${tierNum}Goal`]: '',
                    [`tier${tierNum}Includes`]: '',
                    [`tier${tierNum}PricingInIndia`]: '',
                    [`tier${tierNum}PricingInternational`]: '',
                    [`tier${tierNum}Note`]: '',
                    [`tier${tierNum}Popular`]: 'false',
                };
            }

            // Otherwise flatten the tier object
            return {
                [`tier${tierNum}Name`]: tier.name || '',
                [`tier${tierNum}Tagline`]: tier.tagline || '',
                [`tier${tierNum}Goal`]: tier.goal || '',
                [`tier${tierNum}Includes`]: tier.includes || '',
                [`tier${tierNum}PricingInIndia`]: tier.pricingInIndia || '',
                [`tier${tierNum}PricingInternational`]: tier.pricingInternational || '',
                [`tier${tierNum}Note`]: tier.note || '',
                [`tier${tierNum}Popular`]: tier.popular ? 'true' : 'false',
            };
        };

        if (!serviceData) {
            return {
                serviceTitle: '',
                serviceSubtitle: '',
                ...flattenTier(undefined, 1),
                ...flattenTier(undefined, 2),
                ...flattenTier(undefined, 3),
            };
        }

        return {
            serviceTitle: serviceData.serviceTitle,
            serviceSubtitle: serviceData.serviceSubtitle,
            ...flattenTier(serviceData.tier1, 1),
            ...flattenTier(serviceData.tier2, 2),
            ...flattenTier(serviceData.tier3, 3),
        };
    };

    return {
        pageHeader: nestedData.pageHeader,
        personalBranding: transformService(nestedData.personalBranding),
        socialMediaGrowth: transformService(nestedData.socialMediaGrowth),
        websiteDevelopment: transformService(nestedData.websiteDevelopment),
        appDevelopment: transformService(nestedData.appDevelopment),
        growthMarketing: transformService(nestedData.growthMarketing),
        strategyExecution: transformService(nestedData.strategyExecution),
    };
};

/**
 * Validates pricing data structure
 */
export const validatePricingData = (data: any): boolean => {
    if (!data) return false;

    const services = [
        'personalBranding',
        'socialMediaGrowth',
        'websiteDevelopment',
        'appDevelopment',
        'growthMarketing',
        'strategyExecution',
    ];

    for (const service of services) {
        if (!data[service]) {
            console.warn(`⚠️ Missing service: ${service}`);
            return false;
        }

        const serviceData = data[service];

        // Check for nested structure
        if (serviceData.tier1 && typeof serviceData.tier1 === 'object') {
            // Valid nested structure
            for (let i = 1; i <= 3; i++) {
                const tier = serviceData[`tier${i}`];
                if (!tier || !tier.name) {
                    console.warn(`⚠️ Invalid tier${i} in ${service}`);
                    return false;
                }
            }
        } else {
            // Check for flat structure (admin format)
            for (let i = 1; i <= 3; i++) {
                if (!serviceData[`tier${i}Name`]) {
                    console.warn(`⚠️ Missing tier${i}Name in ${service}`);
                    return false;
                }
            }
        }
    }

    return true;
};

/**
 * Helper to create an empty tier
 */
const createEmptyTier = (): PricingTierData => ({
    name: '',
    tagline: '',
    goal: '',
    includes: '',
    pricingInIndia: '',
    pricingInternational: '',
    note: '',
    popular: false,
});
