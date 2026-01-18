import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, SectionHeader, Badge, ScrollReveal } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { useCMSContent } from '../context/CMSContext';
import { HomePageData } from '../admin/types';
import { Globe, BarChart3, Video, PenTool, Zap, CheckCircle2, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { servicesData, blogPosts, projectsData } from '../data';

export const Home: React.FC = () => {
  const { getAccentColorClass } = useTheme();
  const cmsData = useCMSContent<HomePageData>('home');


  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-black pb-12">
        {/* Background Image with 30% Opacity */}
        <div className="absolute inset-0 z-0">
          <img 
            src={cmsData.hero?.backgroundImage || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"} 
            alt="Agency Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        {/* Gold Sparkle Effect */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="sparkle-particle animate-sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: 0.4
              }}
            />
          ))}
        </div>

        {/* Hero Content - Left Aligned */}
        <div className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto w-full z-10">
          <ScrollReveal className="space-y-8 max-w-3xl">
            <Badge text={cmsData.hero?.tagline || "Digital Growth Agency"} />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                {cmsData.hero?.headlineLine1 || "Stop Chasing Leads"}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                {cmsData.hero?.headlineLine2 || "Online"}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
              {cmsData.hero?.description || "We build high-performance websites and automated marketing systems that turn silent visitors into loyal customers."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <NavLink to="/contact">
                  <Button size="lg" withIcon>{cmsData.hero?.primaryButtonText || "Audit My Presence"}</Button>
              </NavLink>
              <NavLink to="/projects">
                  <Button size="lg" variant="ghost">{cmsData.hero?.secondaryButtonText || "See Results"}</Button>
              </NavLink>
            </div>
            <div className="pt-8 flex items-center gap-4 text-sm font-medium text-neutral-400">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                      <img key={i} src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} className="w-10 h-10 rounded-full border-2 border-neutral-950 object-cover" alt="User" />
                  ))}
               </div>
               <p>Generating Revenue for 50+ Clients</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- Services Preview --- */}
      <section className="px-6 py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title={cmsData.servicesIntro?.sectionTitle || "Revenue-First Digital Services"} 
            subtitle={cmsData.servicesIntro?.sectionSubtitle || "Most agencies focus on 'pretty'. We focus on 'profitable'."}
            centered 
          />
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Web Development */}
            <ScrollReveal delay={0}>
                <Card className="group cursor-pointer h-full flex flex-col">
                    <div className="h-48 mb-6 overflow-hidden rounded-lg">
                        <img 
                          src={cmsData.servicesIntro?.service1Image || servicesData[0].heroImage} 
                          alt={cmsData.servicesIntro?.service1Heading || servicesData[0].title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                    </div>
                    <Globe className={`w-10 h-10 mb-4 ${getAccentColorClass('text')}`} />
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                      {cmsData.servicesIntro?.service1Heading || servicesData[0].title}
                    </h3>
                    <p className="text-neutral-500 mb-6 flex-grow">
                      {cmsData.servicesIntro?.service1Description || servicesData[0].subtitle}
                    </p>
                    <NavLink to={`/services/${servicesData[0].id}`} className={`inline-flex items-center text-sm font-bold hover:underline decoration-2 underline-offset-4 ${getAccentColorClass('text')}`}>
                        Explore Service <ArrowRight className="w-4 h-4 ml-1" />
                    </NavLink>
                </Card>
            </ScrollReveal>

            {/* Service 2: Digital Marketing */}
            <ScrollReveal delay={100}>
                <Card className="group cursor-pointer h-full flex flex-col">
                    <div className="h-48 mb-6 overflow-hidden rounded-lg">
                        <img 
                          src={cmsData.servicesIntro?.service2Image || servicesData[1].heroImage} 
                          alt={cmsData.servicesIntro?.service2Heading || servicesData[1].title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                    </div>
                    <BarChart3 className={`w-10 h-10 mb-4 ${getAccentColorClass('text')}`} />
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                      {cmsData.servicesIntro?.service2Heading || servicesData[1].title}
                    </h3>
                    <p className="text-neutral-500 mb-6 flex-grow">
                      {cmsData.servicesIntro?.service2Description || servicesData[1].subtitle}
                    </p>
                    <NavLink to={`/services/${servicesData[1].id}`} className={`inline-flex items-center text-sm font-bold hover:underline decoration-2 underline-offset-4 ${getAccentColorClass('text')}`}>
                        Explore Service <ArrowRight className="w-4 h-4 ml-1" />
                    </NavLink>
                </Card>
            </ScrollReveal>

            {/* Service 3: Video Editing */}
            <ScrollReveal delay={200}>
                <Card className="group cursor-pointer h-full flex flex-col">
                    <div className="h-48 mb-6 overflow-hidden rounded-lg">
                        <img 
                          src={cmsData.servicesIntro?.service3Image || servicesData[2].heroImage} 
                          alt={cmsData.servicesIntro?.service3Heading || servicesData[2].title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                    </div>
                    <Video className={`w-10 h-10 mb-4 ${getAccentColorClass('text')}`} />
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                      {cmsData.servicesIntro?.service3Heading || servicesData[2].title}
                    </h3>
                    <p className="text-neutral-500 mb-6 flex-grow">
                      {cmsData.servicesIntro?.service3Description || servicesData[2].subtitle}
                    </p>
                    <NavLink to={`/services/${servicesData[2].id}`} className={`inline-flex items-center text-sm font-bold hover:underline decoration-2 underline-offset-4 ${getAccentColorClass('text')}`}>
                        Explore Service <ArrowRight className="w-4 h-4 ml-1" />
                    </NavLink>
                </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* --- Why Choose Us --- */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <SectionHeader title={cmsData.whyImpact224?.sectionTitle || "Why Impact 224?"} centered />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
                { title: cmsData.whyImpact224?.feature1Title || 'Conversion First Design', iconName: cmsData.whyImpact224?.feature1Icon || 'Zap' },
                { title: cmsData.whyImpact224?.feature2Title || 'Data-Driven Identity', iconName: cmsData.whyImpact224?.feature2Icon || 'Users' },
                { title: cmsData.whyImpact224?.feature3Title || '99/100 Speed Score', iconName: cmsData.whyImpact224?.feature3Icon || 'TrendingUp' },
                { title: cmsData.whyImpact224?.feature4Title || '24/7 Priority Support', iconName: cmsData.whyImpact224?.feature4Icon || 'CheckCircle2' },
            ].map((feature, i) => {
                // Map icon names to Lucide components
                const iconMap: { [key: string]: any } = {
                    'Zap': Zap,
                    'Users': Users,
                    'TrendingUp': TrendingUp,
                    'CheckCircle2': CheckCircle2,
                    'PenTool': PenTool,
                    'BarChart3': BarChart3,
                    'Globe': Globe,
                    'Video': Video,
                };
                const IconComponent = iconMap[feature.iconName] || Zap;

                return (
                    <ScrollReveal key={i} delay={i * 50} className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-neutral-100 dark:border-neutral-800">
                        <div className={`w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center bg-white dark:bg-neutral-800 shadow-sm ${getAccentColorClass('text')}`}>
                            <IconComponent size={24} />
                        </div>
                        <h4 className="font-bold leading-tight text-neutral-900 dark:text-white">{feature.title}</h4>
                    </ScrollReveal>
                );
            })}
        </div>
      </section>

      {/* --- Projects Showcase --- */}
      <section className="px-6 py-24 bg-neutral-900 dark:bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
            <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-bold mb-2">
                      {cmsData.projectsShowcase?.sectionTitle || "Recent Success Stories"}
                    </h2>
                    <p className="text-neutral-400">
                      {cmsData.projectsShowcase?.sectionSubtitle || "Real businesses. Real growth. Real numbers."}
                    </p>
                </div>
                <NavLink to="/projects">
                     <Button variant="outline" className="mt-6 md:mt-0 border-white text-white hover:bg-white hover:text-black">
                       {cmsData.projectsShowcase?.buttonText || "View All Case Studies"}
                     </Button>
                </NavLink>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: cmsData.projectsShowcase?.project1Title || projectsData[0]?.title,
                    stats: cmsData.projectsShowcase?.project1Stats || projectsData[0]?.stats,
                    image: cmsData.projectsShowcase?.project1Image || projectsData[0]?.image,
                    slug: projectsData[0]?.slug
                  },
                  {
                    title: cmsData.projectsShowcase?.project2Title || projectsData[1]?.title,
                    stats: cmsData.projectsShowcase?.project2Stats || projectsData[1]?.stats,
                    image: cmsData.projectsShowcase?.project2Image || projectsData[1]?.image,
                    slug: projectsData[1]?.slug
                  },
                  {
                    title: cmsData.projectsShowcase?.project3Title || projectsData[2]?.title,
                    stats: cmsData.projectsShowcase?.project3Stats || projectsData[2]?.stats,
                    image: cmsData.projectsShowcase?.project3Image || projectsData[2]?.image,
                    slug: projectsData[2]?.slug
                  },
                  {
                    title: cmsData.projectsShowcase?.project4Title || projectsData[3]?.title,
                    stats: cmsData.projectsShowcase?.project4Stats || projectsData[3]?.stats,
                    image: cmsData.projectsShowcase?.project4Image || projectsData[3]?.image,
                    slug: projectsData[3]?.slug
                  }
                ].map((p, i) => (
                    <ScrollReveal key={i} delay={i * 100} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-800 cursor-pointer">
                        <NavLink to={`/projects/${p.slug}`} className="block w-full h-full">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="font-bold text-lg">{p.title}</h3>
                                <p className="text-xs text-brand-yellow font-medium uppercase tracking-wide">{p.stats}</p>
                            </div>
                        </NavLink>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

       {/* --- Blog Teaser --- */}
       <section className="px-6 py-24 bg-neutral-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title={cmsData.latestInsights?.sectionTitle || "Latest Insights"} 
              subtitle={cmsData.latestInsights?.sectionSubtitle || "Strategies to dominate your niche."} 
            />
            <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    category: cmsData.latestInsights?.blog1Category || blogPosts[0]?.category,
                    image: cmsData.latestInsights?.blog1Image || blogPosts[0]?.image,
                    title: cmsData.latestInsights?.blog1Title || blogPosts[0]?.title,
                    date: cmsData.latestInsights?.blog1Date || blogPosts[0]?.date,
                    readTime: cmsData.latestInsights?.blog1ReadTime || blogPosts[0]?.readTime,
                    slug: blogPosts[0]?.slug
                  },
                  {
                    category: cmsData.latestInsights?.blog2Category || blogPosts[1]?.category,
                    image: cmsData.latestInsights?.blog2Image || blogPosts[1]?.image,
                    title: cmsData.latestInsights?.blog2Title || blogPosts[1]?.title,
                    date: cmsData.latestInsights?.blog2Date || blogPosts[1]?.date,
                    readTime: cmsData.latestInsights?.blog2ReadTime || blogPosts[1]?.readTime,
                    slug: blogPosts[1]?.slug
                  },
                  {
                    category: cmsData.latestInsights?.blog3Category || blogPosts[2]?.category,
                    image: cmsData.latestInsights?.blog3Image || blogPosts[2]?.image,
                    title: cmsData.latestInsights?.blog3Title || blogPosts[2]?.title,
                    date: cmsData.latestInsights?.blog3Date || blogPosts[2]?.date,
                    readTime: cmsData.latestInsights?.blog3ReadTime || blogPosts[2]?.readTime,
                    slug: blogPosts[2]?.slug
                  },
                  {
                    category: cmsData.latestInsights?.blog4Category || blogPosts[3]?.category,
                    image: cmsData.latestInsights?.blog4Image || blogPosts[3]?.image,
                    title: cmsData.latestInsights?.blog4Title || blogPosts[3]?.title,
                    date: cmsData.latestInsights?.blog4Date || blogPosts[3]?.date,
                    readTime: cmsData.latestInsights?.blog4ReadTime || blogPosts[3]?.readTime,
                    slug: blogPosts[3]?.slug
                  }
                ].map((blog, i) => (
                    <NavLink key={i} to={`/blog/${blog.slug}`}>
                        <ScrollReveal delay={i * 50} className="group cursor-pointer">
                             <div className="aspect-video rounded-xl overflow-hidden mb-4 relative">
                                <span className="absolute top-2 left-2 px-2 py-1 bg-black/50 backdrop-blur text-white text-[10px] uppercase font-bold rounded">
                                    {blog.category}
                                </span>
                                <img src={blog.image} alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                             </div>
                             <h4 className="font-bold mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 text-lg leading-tight text-neutral-900 dark:text-white">{blog.title}</h4>
                             <p className="text-xs text-neutral-500">{blog.date} • {blog.readTime}</p>
                        </ScrollReveal>
                    </NavLink>
                ))}
            </div>
        </div>
       </section>
    </>
  );
};