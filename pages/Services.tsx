import React from 'react';
import { SectionHeader, Card, Button, ScrollReveal } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { useCMSContent } from '../context/CMSContext';
import { ServicesPageData } from '../admin/types';
import { NavLink } from 'react-router-dom';

export const Services: React.FC = () => {
  const { getAccentColorClass } = useTheme();
  const cmsData = useCMSContent<ServicesPageData>('services');

  // Convert CMS data to array format for rendering
  const servicesArray = [
    {
      id: 'personal-branding',
      title: cmsData.personalBranding?.displayTitle || 'PERSONAL BRANDING',
      subtitle: cmsData.personalBranding?.shortPitch || '',
      heroImage: cmsData.personalBranding?.heroCoverImage || '',
      pricing: cmsData.personalBranding?.estimatedPricing || '',
    },
    {
      id: 'video-editing',
      title: cmsData.videoEditing?.displayTitle || 'VIDEO EDITING',
      subtitle: cmsData.videoEditing?.shortPitch || '',
      heroImage: cmsData.videoEditing?.heroCoverImage || '',
      pricing: cmsData.videoEditing?.estimatedPricing || '',
    },
    {
      id: 'website-development',
      title: cmsData.websiteDevelopment?.displayTitle || 'WEBSITE DEVELOPMENT',
      subtitle: cmsData.websiteDevelopment?.shortPitch || '',
      heroImage: cmsData.websiteDevelopment?.heroCoverImage || '',
      pricing: cmsData.websiteDevelopment?.estimatedPricing || '',
    }
  ];

  return (
    <div className="pt-10">
        <ScrollReveal className="text-center px-6 mb-16">
            <span className={`text-sm font-bold uppercase tracking-widest ${getAccentColorClass('text')}`}>
              {cmsData.mainPageHeader?.pageTitle || 'OUR EXPERTISE'}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 text-neutral-900 dark:text-white">
              {cmsData.mainPageHeader?.pageAccentText || 'SERVICES BUILT FOR IMPACT'}
            </h1>
        </ScrollReveal>

        {servicesArray.map((service, index) => (
             <section key={service.id} className="py-20 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
                <div className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                    <ScrollReveal delay={100} className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">{service.title}</h2>
                        <p className="text-lg text-neutral-500 mb-8">{service.subtitle}</p>
                        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-800 mb-8">
                            <div className={`w-2 h-2 rounded-full mb-2 ${getAccentColorClass('bg')}`}></div>
                            <span className="font-bold text-xl text-neutral-900 dark:text-white">{service.pricing}</span>
                            <p className="text-xs text-neutral-500 mt-1">Estimated Investment</p>
                        </div>
                        <div className="flex gap-4">
                            <NavLink to={`/services/${service.id}`}>
                                <Button variant="outline">Learn More</Button>
                            </NavLink>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200} className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 relative group">
                        {service.heroImage && (
                            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        )}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        ))}
    </div>
  );
};