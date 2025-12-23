import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
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

const pricingData: ServicePricing[] = [
  {
    id: 'personal-branding',
    title: 'Personal Branding',
    subtitle: 'Establish your authority and build a powerful online identity.',
    icon: Users,
    serviceLink: '/services/web-development',
    tiers: [
      {
        name: 'BASIC',
        tagline: 'Best for: Beginners, early-stage founders',
        goal: 'GOAL: ESTABLISH A PRESENCE',
        includes: [
          'LinkedIn & Instagram (2 platforms)',
          '8 posts/month',
          'Profile optimization',
          'Content strategy + calendar',
          'Monthly report'
        ],
        pricing: {
          inIndia: '₹18,000–₹25,000/month',
          international: '$250–$350/month'
        },
        note: '*Why: Build a credible presence before you can play "fast" personal branding.'
      },
      {
        name: 'STANDARD',
        tagline: 'Best for: Growing founders, startup leaders',
        goal: 'GOAL: CONSISTENT REACH + FOLLOWERS GROWTH',
        includes: [
          'LinkedIn + Instagram',
          '12–15 posts/month',
          '1 video/month',
          'Storytelling + repurposing',
          'Monthly analytics'
        ],
        pricing: {
          inIndia: '₹40,000–₹60,000/month',
          international: '$600–$900/month'
        },
        note: '*Why: This is your sweet-spot package — serious results without over-investing.',
        popular: true
      },
      {
        name: 'PREMIUM',
        tagline: 'Best for: Thought-leaders, founders, exec creators',
        goal: 'GOAL: DOMINATE YOUR NICHE',
        includes: [
          '3–4 platforms',
          '20–30 posts/month',
          '3–5 reels/shorts',
          'Ghostwriting + automation',
          'Weekly reviews + manager'
        ],
        pricing: {
          inIndia: '₹90,000–₹1,50,000/month',
          international: '$1,500–$3,000/month'
        },
        note: '*Why: Premium-level tools for people with strategy, and authority.'
      }
    ]
  },
  {
    id: 'social-media-growth',
    title: 'Social Media Growth',
    subtitle: 'Build engaged communities and drive meaningful connections.',
    icon: TrendingUp,
    serviceLink: '/services/digital-marketing',
    tiers: [
      {
        name: 'BASIC',
        tagline: 'Best for: New brands / creators with low-mid budgets',
        goal: 'GOAL: TAX COMMITMENT + START ORGANIC REACH',
        includes: [
          'Growth work',
          'Platform optimization',
          'Monthly outreach optimization',
          'Organic engagement strategy',
          'Hashtag + keyword research',
          'Trend & format guidance'
        ],
        pricing: {
          inIndia: '₹15,000–₹25,000/month',
          international: '$200–$350/month'
        },
        note: '*Why: Builds the foundation for organic growth.'
      },
      {
        name: 'STANDARD',
        tagline: 'Best for: Founders & brands ready to scale with paid ads',
        goal: 'GOAL: CONSISTENT REACH + FOLLOWERS GROWTH',
        includes: [
          'Daily engagement outreach',
          'Paid/Organic strategy',
          'Content amplification planning',
          'Automation framework',
          'Collaboration & influencer planning',
          'Automation & batch monitoring'
        ],
        pricing: {
          inIndia: '₹35,000–₹55,000/month',
          international: '$500–$800/month'
        },
        note: '*Why: Focuses on building real community connections.',
        popular: true
      },
      {
        name: 'PREMIUM',
        tagline: 'Best for: Established founders',
        goal: 'GOAL: ACCELERATE GROWTH + DOMINATE AT NICHE',
        includes: [
          'Advanced distribution systems',
          'Creator & influencer outreach',
          'Trend hijacking (micro)',
          'High-volume engagement workflows',
          'Automation (bots/APIs)',
          'Platform expansion planning'
        ],
        pricing: {
          inIndia: '₹70,000–₹1,20,000/month',
          international: '$1,200–$2,500/month'
        },
        note: '*Why: Maximum leverage for brands with high volume.'
      }
    ]
  },
  {
    id: 'website-development',
    title: 'Website Development',
    subtitle: 'High-performance, conversion-driven digital assets built for speed.',
    icon: Globe,
    serviceLink: '/services/web-development',
    tiers: [
      {
        name: 'BASIC',
        tagline: 'Best for: Tryout, brands, startups',
        goal: 'GOAL: ESTABLISH A CAPABLE + TRUST ONLINE PRESENCE',
        includes: [
          '1-3 page website',
          'Mobile-responsive design',
          'Clean UI/UX',
          'Basic SEO structure',
          'Speed optimization',
          'Domain & hosting support'
        ],
        pricing: {
          inIndia: '₹40,000–₹60,000 (one-time)',
          international: '$700–$1,200'
        },
        note: '*Why: Affordable for launching a professional online.'
      },
      {
        name: 'STANDARD',
        tagline: 'Best for: Mid-size service businesses',
        goal: 'GOAL: DRIVE LEADS, CONVERSIONS & TRUST',
        includes: [
          '6+ pages',
          'Custom UI/UX',
          'CMS integration',
          'Conversion-focused copywriting',
          'Analytics (GA4)',
          'Lead capture system'
        ],
        pricing: {
          inIndia: '₹90,000–₹1,50,000',
          international: '$1,500–$3,000'
        },
        note: '*Why: Turns visitors into recurring customers.',
        popular: true
      },
      {
        name: 'PREMIUM',
        tagline: 'Best for: SaaS, enterprise, high-growth brands',
        goal: 'GOAL: HIGH-PERFORMANCE, SCALE-READY DIGITAL ASSET',
        includes: [
          'Unlimited pages',
          'Advanced animations',
          'Custom dashboards / portals',
          'Integrations (CRM, payment, APIs)',
          'Security hardening',
          '30-day post-launch support'
        ],
        pricing: {
          inIndia: '₹2,00,000–₹5,00,000+',
          international: '$4,000–$10,000+'
        },
        note: '*Why: Enterprise-grade speed and reliability.'
      }
    ]
  },
  {
    id: 'app-development',
    title: 'App Development',
    subtitle: 'Scalable mobile and web applications engineered for the future.',
    icon: Smartphone,
    serviceLink: '/services/web-development',
    tiers: [
      {
        name: 'BASIC',
        tagline: 'Best for: Startup MVPs, no-frills',
        goal: 'GOAL: LAUNCH FAST, VALIDATE IDEA',
        includes: [
          'MVP planning',
          'UI/UX wireframes',
          'Core features only',
          'Android or iOS',
          'Backend integration',
          'Basic testing'
        ],
        pricing: {
          inIndia: '₹2,00,000–₹4,00,000',
          international: '$4,000–$7,000'
        },
        note: '*Why: Validates concepts with minimal spend.'
      },
      {
        name: 'STANDARD',
        tagline: 'Best for: Growing startups',
        goal: 'GOAL: STABLE, SCALABLE APP',
        includes: [
          'Cross-platform (Flutter / React Native)',
          'Authentication',
          'Database + APIs',
          'Admin dashboard',
          'Push notifications',
          'Analytics'
        ],
        pricing: {
          inIndia: '₹5,00,000–₹10,00,000',
          international: '$8,000–$15,000'
        },
        note: '*Why: Built for actual users and scale.',
        popular: true
      },
      {
        name: 'PREMIUM',
        tagline: 'Best for: Funded startups',
        goal: 'GOAL: HIGH-SCALE, SECURE APPLICATION',
        includes: [
          'Advanced architecture',
          'Role-based access',
          'Cloud deployment',
          'Security audits',
          'Load testing',
          'Maintenance support'
        ],
        pricing: {
          inIndia: '₹12,00,000–₹25,00,000+',
          international: '$20,000–$50,000+'
        },
        note: '*Why: Zero-compromise on performance and security.'
      }
    ]
  },
  {
    id: 'growth-marketing',
    title: 'Growth & Digital Marketing',
    subtitle: 'Build predictable revenue and scale profitably with full-funnel marketing.',
    icon: BarChart3,
    serviceLink: '/services/digital-marketing',
    tiers: [
      {
        name: 'STARTER',
        tagline: 'Best for: Early-stage brands, solopreneurs',
        goal: 'GOAL: INCREASE REACH + AWARENESS WITH CONTROLLED SPEND',
        includes: [
          'Profile audit',
          'Organic engagement',
          'Meta/Google Ad setup',
          '1 campaign (awareness)',
          'Audience targeting',
          'Budget monitoring'
        ],
        pricing: {
          inIndia: '₹25,000–₹40,000/month',
          international: '$350–$600/month'
        },
        note: '*Why: Ideal for establishing a market foothold.'
      },
      {
        name: 'GROWTH',
        tagline: 'Best for: Startups, D2C brands',
        goal: 'GOAL: GENERATE LEADS, INQUIRIES, AND CONVERSIONS',
        includes: [
          'Funnel strategy (TOF/MOF/BOF)',
          'Up to 3 ad campaigns',
          'Ad copywriting',
          'Creative variations',
          'Retargeting setup',
          'Weekly performance check'
        ],
        pricing: {
          inIndia: '₹60,000–₹1,00,000/month',
          international: '$900–$1,800/month'
        },
        note: '*Why: Engineered for scaling revenue profitably.',
        popular: true
      },
      {
        name: 'SCALE',
        tagline: 'Best for: High-growth brands, serious founders',
        goal: 'GOAL: BUILD PREDICTABLE REVENUE & SCALE PROFITABLY',
        includes: [
          'Full-funnel performance marketing',
          'Conversion Rate Optimization (CRO)',
          'Advanced retargeting',
          'Marketing automation',
          'Dedicated account manager'
        ],
        pricing: {
          inIndia: '₹1,50,000–₹3,00,000+/month',
          international: '$2,500–$6,000+/month'
        },
        note: '*Why: Dominate the market with high-volume growth.'
      }
    ]
  },
  {
    id: 'strategy-execution',
    title: 'Strategy & Execution',
    subtitle: 'Clarify your direction and grow your growth with high-level advisory.',
    icon: Lightbulb,
    serviceLink: '/services/web-development',
    tiers: [
      {
        name: 'STARTER',
        tagline: 'Best for: Early-stage startups, new brands',
        goal: 'GOAL: CLARIFY WHAT TO TARGET AND WHAT TO SAY',
        includes: [
          'Brand & market audit',
          'ICP definition',
          'Competitor analysis',
          'Core messaging',
          '30-day marketing plan'
        ],
        pricing: {
          inIndia: '₹25,000–₹40,000 (one-time)',
          international: '$400–$700'
        },
        note: '*Why: Builds trust and opens doors to resources.'
      },
      {
        name: 'GROWTH',
        tagline: 'Best for: Startups & service brands ready to scale',
        goal: 'GOAL: CREATE CONSISTENT INBOUND LEADS & VISIBILITY',
        includes: [
          'Full-funnel strategy',
          'Content marketing roadmap',
          'Lead generation strategy',
          'KPI tracking',
          'Monthly strategic call'
        ],
        pricing: {
          inIndia: '₹60,000–₹1,00,000/month',
          international: '$1,000–$2,000/month'
        },
        note: '*Why: Our most "Wedding + planning" package.',
        popular: true
      },
      {
        name: 'PREMIUM',
        tagline: 'Best for: Funded startups, scaling brands',
        goal: 'GOAL: OWN MARKETING DECISIONS, GROWTH DIRECTION & EXPERIMENTS',
        includes: [
          'Go-to-Market (GTM) strategy',
          'Revenue & growth forecasting',
          'Multi-channel orchestration',
          'Weekly growth experiments',
          'Dedicated marketing lead'
        ],
        pricing: {
          inIndia: '₹1,50,000–₹3,00,000+/month',
          international: '$3,000–$6,000+/month'
        },
        note: '*Why: Premium clients pay for dividends, not deliverables.'
      }
    ]
  }
];

export const Pricing: React.FC = () => {
  const { getAccentColorClass } = useTheme();
  const [selectedService, setSelectedService] = useState<string>('all');

  const filteredServices = selectedService === 'all' 
    ? pricingData 
    : pricingData.filter(service => service.id === selectedService);

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <ScrollReveal className="text-center px-6 mb-16">
        <span className={`text-sm font-bold uppercase tracking-widest ${getAccentColorClass('text')}`}>Pricing & Packages</span>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 text-neutral-900 dark:text-white">Scale Your Business Profits</h1>
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
