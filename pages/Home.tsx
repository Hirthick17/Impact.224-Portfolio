import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, SectionHeader, Badge, ScrollReveal } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { Globe, BarChart3, PenTool, Zap, CheckCircle2, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { servicesData, blogPosts, projectsData } from '../data';

export const Home: React.FC = () => {
  const { getAccentColorClass } = useTheme();

  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[85vh]">
        <ScrollReveal className="space-y-8 z-10">
          <Badge text="Digital Growth Agency" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-neutral-900 dark:text-white">
            Stop Losing <br/>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400`}>
              Leads Online.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
            We build high-performance websites and automated marketing systems that turn silent visitors into loyal customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <NavLink to="/contact">
                <Button size="lg" withIcon>Audit My Presence</Button>
            </NavLink>
            <NavLink to="/projects">
                <Button size="lg" variant="ghost">See Results</Button>
            </NavLink>
          </div>
          <div className="pt-8 flex items-center gap-4 text-sm font-medium text-neutral-500">
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                    <img key={i} src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} className="w-10 h-10 rounded-full border-2 border-white dark:border-neutral-950 object-cover" alt="User" />
                ))}
             </div>
             <p>Generating Revenue for 50+ Clients</p>
          </div>
        </ScrollReveal>
        
        <div className="relative z-0">
          <div className={`absolute -inset-4 rounded-3xl opacity-20 blur-3xl animate-pulse ${getAccentColorClass('bg')}`}></div>
          <ScrollReveal delay={200} className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl">
            <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
                alt="Digital Team Working" 
                className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-1000"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* --- Services Preview --- */}
      <section className="px-6 py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Revenue-First Digital Services" 
            subtitle="Most agencies focus on 'pretty'. We focus on 'profitable'."
            centered 
          />
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                    <Card className="group cursor-pointer h-full flex flex-col">
                        <div className="h-48 mb-6 overflow-hidden rounded-lg">
                            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <service.icon className={`w-10 h-10 mb-4 ${getAccentColorClass('text')}`} />
                        <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">{service.title}</h3>
                        <p className="text-neutral-500 mb-6 flex-grow">{service.subtitle}</p>
                        <NavLink to={`/services/${service.id}`} className={`inline-flex items-center text-sm font-bold hover:underline decoration-2 underline-offset-4 ${getAccentColorClass('text')}`}>
                            Explore Service <ArrowRight className="w-4 h-4 ml-1" />
                        </NavLink>
                    </Card>
                </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <SectionHeader title="Why Impact 224?" centered />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
                { title: 'Conversion First Design', icon: Zap },
                { title: 'Data-Driven Identity', icon: Users },
                { title: '99/100 Speed Score', icon: TrendingUp },
                { title: '24/7 Priority Support', icon: CheckCircle2 },
            ].map((feature, i) => (
                <ScrollReveal key={i} delay={i * 50} className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-neutral-100 dark:border-neutral-800">
                    <div className={`w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center bg-white dark:bg-neutral-800 shadow-sm ${getAccentColorClass('text')}`}>
                        <feature.icon size={24} />
                    </div>
                    <h4 className="font-bold leading-tight text-neutral-900 dark:text-white">{feature.title}</h4>
                </ScrollReveal>
            ))}
        </div>
      </section>

      {/* --- Projects Showcase --- */}
      <section className="px-6 py-24 bg-neutral-900 dark:bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
            <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-bold mb-2">Recent Success Stories</h2>
                    <p className="text-neutral-400">Real businesses. Real growth. Real numbers.</p>
                </div>
                <NavLink to="/projects">
                     <Button variant="outline" className="mt-6 md:mt-0 border-white text-white hover:bg-white hover:text-black">View All Case Studies</Button>
                </NavLink>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectsData.slice(0, 4).map((p, i) => (
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
            <SectionHeader title="Latest Insights" subtitle="Strategies to dominate your niche." />
            <div className="grid md:grid-cols-4 gap-6">
                {blogPosts.map((blog, i) => (
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