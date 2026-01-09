import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { useCMSContent } from '../context/CMSContext';
import { ServiceDetailData } from '../admin/types';
import { defaultServiceWebDevData } from '../admin/schemas/serviceWebDevSchema';
import { defaultServiceMarketingData } from '../admin/schemas/serviceMarketingSchema';
import { defaultServiceVideoData } from '../admin/schemas/serviceVideoSchema';
import { SectionHeader, Button, ScrollReveal, Card, Badge } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';

// Map service URL IDs to CMS page IDs
const serviceIdToCMSPage: Record<string, string> = {
  'web-development': 'service-web-dev',
  'digital-marketing': 'service-marketing',
  'video-editing': 'service-video',
  'visual-storytelling': 'service-video', // added mapping for visual storytelling
};

// Get default data for fallback
const getDefaultData = (serviceId: string): ServiceDetailData => {
  switch (serviceId) {
    case 'web-development':
      return defaultServiceWebDevData;
    case 'digital-marketing':
      return defaultServiceMarketingData;
    case 'video-editing':
      return defaultServiceVideoData;
    default:
      return defaultServiceWebDevData;
  }
};

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getAccentColorClass } = useTheme();

  // Get CMS page ID
  const cmsPageId = serviceIdToCMSPage[id || ''];

  if (!cmsPageId) {
    return <Navigate to="/services" />;
  }

  // Fetch from CMS
  const cmsData = useCMSContent<ServiceDetailData>(cmsPageId);
  
  // Fallback to default data if CMS data is incomplete
  const defaultData = getDefaultData(id || '');
  const hasValidCMSData = cmsData.hero?.title;
  const serviceData = hasValidCMSData ? cmsData : defaultData;

  // Convert features object to array
  const features = [
    serviceData.features?.feature1,
    serviceData.features?.feature2,
    serviceData.features?.feature3,
    serviceData.features?.feature4,
  ].filter(f => f);

  // Convert stats object to array
  const stats = [
    { label: serviceData.stats?.stat1Label || '', value: serviceData.stats?.stat1Value || '' },
    { label: serviceData.stats?.stat2Label || '', value: serviceData.stats?.stat2Value || '' },
    { label: serviceData.stats?.stat3Label || '', value: serviceData.stats?.stat3Value || '' },
  ].filter(s => s.label && s.value);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={serviceData.hero.heroImage} alt={serviceData.hero.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
             <div className="mb-4 flex justify-center">
                 <Badge text="Service" />
             </div>
             <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">{serviceData.hero.title}</h1>
             <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">{serviceData.hero.subtitle}</p>
             <NavLink to="/contact">
                <Button size="lg" withIcon>Start Your Project</Button>
             </NavLink>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
                <div className="p-8 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-xl">
                    <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">The Problem</h2>
                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">{serviceData.problem.problemTitle}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">{serviceData.problem.problemDescription}</p>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <div className={`p-8 bg-neutral-50 dark:bg-neutral-900 border-l-4 border-current rounded-r-xl`} style={{ borderColor: 'var(--color-accent)' }}>
                    <h2 className={`text-2xl font-bold mb-4 ${getAccentColorClass('text')}`}>Our Solution</h2>
                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">{serviceData.solution.solutionTitle}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">{serviceData.solution.solutionDescription}</p>
                </div>
            </ScrollReveal>
         </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50 px-6">
        <div className="max-w-7xl mx-auto">
            <SectionHeader title="What's Included" centered />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, i) => (
                    <ScrollReveal key={i} delay={i * 50}>
                        <Card className="flex items-start gap-4 h-full">
                            <div className={`mt-1 ${getAccentColorClass('text')}`}>
                                <CheckCircle2 size={24} />
                            </div>
                            <span className="font-bold text-lg text-neutral-900 dark:text-white">{feature}</span>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      {/* Stats & Results */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeader title="Data-Driven Results" subtitle="We don't deal in vague promises. We deliver measurable impact." centered />
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={i * 100} className="text-center p-8 bg-neutral-900 text-white rounded-2xl">
                    <div className={`text-5xl font-bold mb-2 ${getAccentColorClass('text')}`}>{stat.value}</div>
                    <div className="text-neutral-400 uppercase tracking-wider text-sm font-bold">{stat.label}</div>
                </ScrollReveal>
            ))}
        </div>

        {/* Testimonial */}
        <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-12 rounded-3xl text-center relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 ${getAccentColorClass('bg')}`}></div>
                <div className="text-6xl text-neutral-200 dark:text-neutral-800 font-serif absolute top-8 left-8">"</div>
                <p className="text-2xl font-medium text-neutral-900 dark:text-white relative z-10 mb-8 leading-relaxed">
                    {serviceData.testimonial.quote}
                </p>
                <div>
                    <div className="font-bold text-lg">{serviceData.testimonial.author}</div>
                    <div className="text-neutral-500">{serviceData.testimonial.role}</div>
                </div>
            </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900 dark:bg-black text-white text-center px-6">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to scale?</h2>
            <p className="text-xl text-neutral-400 mb-8">Stop settling for average. Let's build something world-class together.</p>
            <NavLink to="/contact">
                <Button size="lg">Get a Free Proposal <ArrowRight className="ml-2" /></Button>
            </NavLink>
         </div>
      </section>
    </div>
  );
};