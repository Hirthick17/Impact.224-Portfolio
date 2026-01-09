import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCMSContent, subscribeToCMSUpdates } from '../lib/cms-service';

// Import all schemas and default data
import { homeSchema, defaultHomeData } from '../admin/schemas/homeSchema';
import { aboutSchema, defaultAboutData } from '../admin/schemas/aboutSchema';
import { servicesSchema, defaultServicesData } from '../admin/schemas/servicesSchema';
import { pricingSchema, defaultPricingData } from '../admin/schemas/pricingSchema';
import { blogSchema, defaultBlogData } from '../admin/schemas/blogSchema';
import { projectsSchema, defaultProjectsData } from '../admin/schemas/projectsSchema';
import { serviceWebDevSchema, defaultServiceWebDevData } from '../admin/schemas/serviceWebDevSchema';
import { serviceMarketingSchema, defaultServiceMarketingData } from '../admin/schemas/serviceMarketingSchema';
import { serviceVideoSchema, defaultServiceVideoData } from '../admin/schemas/serviceVideoSchema';

// Map of all available schemas and their default data
const schemaMap: Record<string, { schema: any; defaultData: any }> = {
  home: { schema: homeSchema, defaultData: defaultHomeData },
  about: { schema: aboutSchema, defaultData: defaultAboutData },
  services: { schema: servicesSchema, defaultData: defaultServicesData },
  pricing: { schema: pricingSchema, defaultData: defaultPricingData },
  blog: { schema: blogSchema, defaultData: defaultBlogData },
  projects: { schema: projectsSchema, defaultData: defaultProjectsData },
  'service-web-dev': { schema: serviceWebDevSchema, defaultData: defaultServiceWebDevData },
  'service-marketing': { schema: serviceMarketingSchema, defaultData: defaultServiceMarketingData },
  'service-video': { schema: serviceVideoSchema, defaultData: defaultServiceVideoData },
};

interface CMSContextType {
  getCMSContentSync: <T>(pageId: string) => T;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [, setUpdateTrigger] = useState(0);

  const getCMSContentSync = <T,>(pageId: string): T => {
    // Return default data from schema
    // The actual Supabase data will be loaded asynchronously in useCMSContent hook
    const schemaConfig = schemaMap[pageId];
    if (schemaConfig) {
      return schemaConfig.defaultData as T;
    }

    console.warn(`No schema found for pageId: ${pageId}`);
    return {} as T;
  };

  return (
    <CMSContext.Provider value={{ getCMSContentSync }}>
      {children}
    </CMSContext.Provider>
  );
};

// Custom hook to use CMS content with Supabase
export const useCMSContent = <T,>(pageId: string): T => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMSContent must be used within a CMSProvider');
  }

  // Get default data from schema
  const schemaConfig = schemaMap[pageId];
  const defaultData = schemaConfig?.defaultData as T;

  const [content, setContent] = useState<T>(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let unsubscribe: (() => void) | null = null;

    // Fetch content from Supabase
    const fetchContent = async () => {
      try {
        const data = await getCMSContent<T>(pageId);
        
        if (isMounted) {
          if (data) {
            setContent(data);
          } else {
            // Use default data if no content in database
            setContent(defaultData);
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.error(`Error fetching CMS content for ${pageId}:`, error);
        if (isMounted) {
          // Fallback to default data on error
          setContent(defaultData);
          setIsLoading(false);
        }
      }
    };

    // Initial fetch
    fetchContent();

    // Subscribe to real-time updates
    unsubscribe = subscribeToCMSUpdates(pageId, (updatedContent) => {
      if (isMounted) {
        setContent(updatedContent as T);
      }
    });

    return () => {
      isMounted = false;
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [pageId]);

  return content;
};
