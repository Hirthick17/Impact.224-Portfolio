import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StickyToolbar } from '../components/StickyToolbar';
import { SectionSidebar } from '../components/SectionSidebar';
import { FieldRenderer } from '../components/FieldRenderer';
import { getCMSData, saveCMSData, initializeCMSData, onCMSUpdate } from '../utils/storage';
import { CMSPageSchema } from '../types';
import { homeSchema, defaultHomeData } from '../schemas/homeSchema';
import { aboutSchema, defaultAboutData } from '../schemas/aboutSchema';
import { servicesSchema, defaultServicesData } from '../schemas/servicesSchema';
import { pricingSchema, defaultPricingData } from '../schemas/pricingSchema';
import { blogSchema, defaultBlogData } from '../schemas/blogSchema';
import { projectsSchema, defaultProjectsData } from '../schemas/projectsSchema';
import { serviceWebDevSchema, defaultServiceWebDevData } from '../schemas/serviceWebDevSchema';
import { serviceMarketingSchema, defaultServiceMarketingData } from '../schemas/serviceMarketingSchema';
import { serviceVideoSchema, defaultServiceVideoData } from '../schemas/serviceVideoSchema';
import { newsletterSchema, defaultNewsletterData } from '../schemas/newsletterSchema';
import { footerSchema, defaultFooterData } from '../schemas/footerSchema';
import { blogSeo2025Schema, defaultBlogSeo2025Data } from '../schemas/blogSeo2025Schema';
import { flatToNested, nestedToFlat } from '../utils/pricingTransform';
import { deepMerge } from '../utils/objectUtils';
import { FileText, BarChart3 } from 'lucide-react';

const schemas: Record<string, { schema: CMSPageSchema; defaultData: any }> = {
  home: { schema: homeSchema, defaultData: defaultHomeData },
  about: { schema: aboutSchema, defaultData: defaultAboutData },
  services: { schema: servicesSchema, defaultData: defaultServicesData },
  pricing: { schema: pricingSchema, defaultData: defaultPricingData },
  blog: { schema: blogSchema, defaultData: defaultBlogData },
  projects: { schema: projectsSchema, defaultData: defaultProjectsData },
  'service-web-dev': { schema: serviceWebDevSchema, defaultData: defaultServiceWebDevData },
  'service-marketing': { schema: serviceMarketingSchema, defaultData: defaultServiceMarketingData },
  'service-video': { schema: serviceVideoSchema, defaultData: defaultServiceVideoData },
  newsletter: { schema: newsletterSchema, defaultData: defaultNewsletterData },
  footer: { schema: footerSchema, defaultData: defaultFooterData },
  'blog-seo-2025': { schema: blogSeo2025Schema, defaultData: defaultBlogSeo2025Data },
};

export const AdminEditor: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const navigate = useNavigate();
  
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState<any>({});
  const [showToast, setShowToast] = useState(false);

  const schemaConfig = pageId ? schemas[pageId] : null;

  useEffect(() => {
    if (!pageId || !schemaConfig) {
      navigate('/admin/dashboard');
      return;
    }

    // Initialize with default data if not exists
    initializeCMSData(pageId, schemaConfig.defaultData);

    // Load existing data from Supabase (not localStorage)
    const loadData = async () => {
      const { getCMSContent } = await import('../../lib/cms-service');
      const data = await getCMSContent(pageId);
      
      if (data) {
        // If pricing page, ensure data is flat for the editor
        if (pageId === 'pricing') {
          const flatData = nestedToFlat(data as any);
          setFormData(flatData);
        } else {
          // Deep merge default data with fetched data to ensure no fields are missing
          const mergedData = deepMerge(schemaConfig.defaultData, data);
          setFormData(mergedData);
        }
      } else {
        // If no data in database, use default data
        if (pageId === 'pricing') {
          const flatData = nestedToFlat(schemaConfig.defaultData as any);
          setFormData(flatData);
        } else {
          setFormData(schemaConfig.defaultData);
        }
      }
    };
    
    loadData();

    // Set first section as active
    if (schemaConfig.schema.sections.length > 0) {
      setActiveSection(schemaConfig.schema.sections[0].id);
    }

    // Listen for updates from other tabs
    const cleanup = onCMSUpdate((updatedPageId) => {
      if (updatedPageId === pageId) {
        // Reload from database when updated
        loadData();
      }
    });

    return cleanup;
  }, [pageId, navigate]);

  const handleFieldChange = (sectionId: string, fieldName: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [fieldName]: value,
      },
    }));
  };

  const handleSave = () => {
    if (pageId) {
      // Stage 1: Log when user initiates content change
      console.log('🎨 [ADMIN UI] Content change initiated', {
        pageId,
        timestamp: new Date().toISOString(),
        sections: Object.keys(formData),
        dataSize: JSON.stringify(formData).length + ' bytes',
      });
      
      let dataToSave = formData;
      
      // If pricing page, transform flat form data to nested structure for DB
      if (pageId === 'pricing') {
        console.log('🔄 [ADMIN UI] Transforming pricing data to nested structure');
        dataToSave = flatToNested(formData);
      }
      
      saveCMSData(pageId, dataToSave);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  if (!schemaConfig || !pageId) return null;

  const { schema } = schemaConfig;
  const currentSection = schema.sections.find(s => s.id === activeSection);

  const iconMap: Record<string, React.ReactNode> = {
    document: <FileText className="w-8 h-8" />,
    chart: <BarChart3 className="w-8 h-8" />,
    target: <FileText className="w-8 h-8" />,
    trophy: <BarChart3 className="w-8 h-8" />,
    quote: <FileText className="w-8 h-8" />,
    users: <FileText className="w-8 h-8" />,
    user: <FileText className="w-8 h-8" />,
    scissors: <FileText className="w-8 h-8" />,
    dollar: <FileText className="w-8 h-8" />,
    tag: <FileText className="w-8 h-8" />,
    mail: <FileText className="w-8 h-8" />,
    briefcase: <BarChart3 className="w-8 h-8" />,
    newspaper: <FileText className="w-8 h-8" />,
    award: <BarChart3 className="w-8 h-8" />,
    badge: <FileText className="w-8 h-8" />,
    share: <BarChart3 className="w-8 h-8" />,
    book: <FileText className="w-8 h-8" />,
    phone: <BarChart3 className="w-8 h-8" />,
    shield: <FileText className="w-8 h-8" />,
  };

  return (
    <div className="min-h-screen bg-black">
      <StickyToolbar
        pageId={pageId}
        pageName={schema.pageName}
        onSave={handleSave}
      />

      <div className="flex">
        <SectionSidebar
          sections={schema.sections}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <div className="flex-1 p-12">
          {currentSection && (
            <div className="max-w-4xl">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center text-yellow-400">
                  {iconMap[currentSection.icon] || <FileText className="w-8 h-8" />}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white uppercase tracking-wide">
                    {currentSection.title}
                  </h2>
                </div>
              </div>

              {/* Fields */}
              <div>
                {currentSection.fields.map((field) => (
                  <FieldRenderer
                    key={field.name}
                    field={field}
                    value={formData[currentSection.id]?.[field.name]}
                    onChange={(value) => handleFieldChange(currentSection.id, field.name, value)}
                    sectionId={currentSection.id}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-yellow-400 text-black px-6 py-4 rounded-xl shadow-2xl font-bold animate-in slide-in-from-bottom-5">
          ✓ Draft saved successfully!
        </div>
      )}
    </div>
  );
};
