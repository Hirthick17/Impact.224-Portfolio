import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCMSContent } from '../context/CMSContext';
import { PricingPageData } from '../admin/types';
import { defaultPricingData } from '../admin/schemas/pricingSchema';
import { Button, ScrollReveal } from '../components/UIComponents';
import { Users, TrendingUp, Globe, Smartphone, Lightbulb, BarChart3, Check, ArrowRight } from 'lucide-react';

interface PricingTier {
  name: string;
  tagline: string;
  goal: string;
  includes: string[];
  pricing: {
    inIndia?: string;
    international?: string;
  };
  note?: string;
  popular?: boolean;
}

interface ServicePricing {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  serviceLink: string;
  tiers: PricingTier[];
}

// Helper function to build pricing data from CMS
const buildPricingDataFromCMS = (cmsData: PricingPageData): ServicePricing[] => {
  const buildService = (
    id: string,
    serviceData: any,
    icon: React.ElementType,
    serviceLink: string
  ): ServicePricing => {
    // Safety check: if serviceData is undefined, return empty structure
    if (!serviceData || !serviceData.tier1 || !serviceData.tier2 || !serviceData.tier3) {
      return {
        id,
        title: '',
        subtitle: '',
        icon,
        serviceLink,
        tiers: [],
      };
    }

    return {
      id,
      title: serviceData.serviceTitle || '',
      subtitle: serviceData.serviceSubtitle || '',
      icon,
      serviceLink,
      tiers: [
        {
          name: serviceData.tier1.name || '',
          tagline: serviceData.tier1.tagline || '',
          goal: serviceData.tier1.goal || '',
          includes: (serviceData.tier1.includes || '').split('\n').filter((s: string) => s.trim()),
          pricing: {
            inIndia: serviceData.tier1.pricingInIndia || '',
            international: serviceData.tier1.pricingInternational || '',
          },
          note: serviceData.tier1.note || '',
          popular: serviceData.tier1.popular === true || serviceData.tier1.popular === 'true',
        },
        {
          name: serviceData.tier2.name || '',
          tagline: serviceData.tier2.tagline || '',
          goal: serviceData.tier2.goal || '',
          includes: (serviceData.tier2.includes || '').split('\n').filter((s: string) => s.trim()),
          pricing: {
            inIndia: serviceData.tier2.pricingInIndia || '',
            international: serviceData.tier2.pricingInternational || '',
          },
          note: serviceData.tier2.note || '',
          popular: serviceData.tier2.popular === true || serviceData.tier2.popular === 'true',
        },
        {
          name: serviceData.tier3.name || '',
          tagline: serviceData.tier3.tagline || '',
          goal: serviceData.tier3.goal || '',
          includes: (serviceData.tier3.includes || '').split('\n').filter((s: string) => s.trim()),
          pricing: {
            inIndia: serviceData.tier3.pricingInIndia || '',
            international: serviceData.tier3.pricingInternational || '',
          },
          note: serviceData.tier3.note || '',
          popular: serviceData.tier3.popular === true || serviceData.tier3.popular === 'true',
        },
      ],
    };
  };

  return [
    buildService('personal-branding', cmsData.personalBranding, Users, '/services/visual-storytelling'),
    buildService('social-media-growth', cmsData.socialMediaGrowth, TrendingUp, '/services/digital-marketing'),
    buildService('website-development', cmsData.websiteDevelopment, Globe, '/services/web-development'),
    buildService('app-development', cmsData.appDevelopment, Smartphone, '/services/web-development'),
    buildService('growth-marketing', cmsData.growthMarketing, BarChart3, '/services/digital-marketing'),
    buildService('strategy-execution', cmsData.strategyExecution, Lightbulb, '/services/web-development'),
  ];
};

export const Pricing: React.FC = () => {
  const { getAccentColorClass } = useTheme();
  const [selectedService, setSelectedService] = useState<string>('all');
  const cmsData = useCMSContent<PricingPageData>('pricing');
  
  // Build pricing data from CMS, fallback to default if CMS data is incomplete
  const pricingDataFromCMS = buildPricingDataFromCMS(cmsData);
  const pricingDataFromDefault = buildPricingDataFromCMS(defaultPricingData);
  
  // Use CMS data if first service has a title, otherwise use default
  const pricingData = pricingDataFromCMS[0]?.title ? pricingDataFromCMS : pricingDataFromDefault;

  const filteredServices = selectedService === 'all' 
    ? pricingData 
    : pricingData.filter(service => service.id === selectedService);

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <ScrollReveal className="text-center px-6 mb-16">
        <span className={`text-sm font-bold uppercase tracking-widest ${getAccentColorClass('text')}`}>
          {cmsData.pageHeader?.pageTitle || 'Pricing & Packages'}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 text-neutral-900 dark:text-white">
          {cmsData.pageHeader?.pageSubtitle || 'Scale Your Business Profits'}
        </h1>
        <p className="text-lg text-neutral-500 mt-4 max-w-2xl mx-auto">
          Transparent pricing for world-class digital execution. No hidden fees. Just ROI.
        </p>
      </ScrollReveal>

      {/* Service Filter */}
      <ScrollReveal delay={100} className="py-6 px-6 border-b border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedService('all')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                selectedService === 'all'
                  ? `${getAccentColorClass('bg')} text-black`
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              All Services
            </button>
            {pricingData.map(service => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  selectedService === service.id
                    ? `${getAccentColorClass('bg')} text-black`
                    : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'
                }`}
              >
                <service.icon size={14} />
                {service.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Pricing Sections */}
      {filteredServices.map((service, idx) => (
        <section key={service.id} className="py-20 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
          <div className="max-w-7xl mx-auto px-6">
            {/* Service Header */}
            <ScrollReveal className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-4">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${getAccentColorClass('bg')} bg-opacity-10`}>
                  <service.icon size={32} className={getAccentColorClass('text')} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-2 text-neutral-900 dark:text-white">{service.title}</h2>
                  <p className="text-lg text-neutral-500">
                    {service.subtitle}
                  </p>
                </div>
              </div>
              <NavLink to={service.serviceLink}>
                <Button variant="outline" className="flex items-center gap-2 rounded-xl">
                  Full Details <ArrowRight size={16} />
                </Button>
              </NavLink>
            </ScrollReveal>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.tiers.map((tier, tierIdx) => (
                <ScrollReveal key={tier.name} delay={tierIdx * 100}>
                  <div
                    className={`relative rounded-2xl p-8 transition-all hover:scale-[1.02] h-full ${
                      tier.popular
                        ? `bg-gradient-to-b from-${getAccentColorClass('bg').replace('bg-', '')}/10 to-white dark:to-black border-2 ${getAccentColorClass('border')}`
                        : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className={`${getAccentColorClass('bg')} text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider`}>
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">{tier.name}</h3>
                      <p className="text-sm font-medium text-neutral-500">
                        {tier.tagline}
                      </p>
                    </div>

                    <div className={`mb-6 p-4 rounded-xl ${getAccentColorClass('bg')} bg-opacity-10 border ${getAccentColorClass('border')} border-opacity-20`}>
                      <p className={`text-xs font-bold uppercase tracking-wide ${getAccentColorClass('text')}`}>
                        {tier.goal}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider mb-4 text-neutral-500">
                        Includes:
                      </p>
                      <ul className="space-y-3">
                        {tier.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check size={18} className={`mt-0.5 flex-shrink-0 ${getAccentColorClass('text')}`} strokeWidth={3} />
                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-neutral-500">
                        Pricing:
                      </p>
                      {tier.pricing.inIndia && (
                        <>
                          <p className="text-xs font-semibold uppercase text-neutral-500 mb-1">In India</p>
                          <p className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">{tier.pricing.inIndia}</p>
                        </>
                      )}
                      {tier.pricing.international && (
                        <>
                          <p className="text-xs font-semibold uppercase text-neutral-500 mb-1">International</p>
                          <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-400">{tier.pricing.international}</p>
                        </>
                      )}
                    </div>

                    {tier.note && (
                      <div className="mb-6 p-4 rounded-xl bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800">
                        <p className="text-xs italic text-neutral-600 dark:text-neutral-500">
                          {tier.note}
                        </p>
                      </div>
                    )}

                    <NavLink to="/contact">
                      <Button 
                        className="w-full rounded-xl font-bold uppercase tracking-wider"
                      >
                        SELECT PLAN
                      </Button>
                    </NavLink>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Custom Package CTA */}
      <ScrollReveal className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-12 text-center border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Need a Custom Package?
            </h2>
            <p className="text-neutral-500 mb-8 font-medium text-lg">
              We handle enterprise-scale projects and custom requirements. Let's talk strategy.
            </p>
            <NavLink to="/contact">
              <Button size="lg" className="rounded-xl px-12">
                BOOK A STRATEGY CALL
              </Button>
            </NavLink>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
