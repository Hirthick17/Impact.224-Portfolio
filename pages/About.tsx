import React from 'react';
import { SectionHeader, ScrollReveal } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { useCMSContent } from '../context/CMSContext';
import { AboutPageData } from '../admin/types';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { getAccentColorClass } = useTheme();
  const cmsData = useCMSContent<AboutPageData>('about');

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
        <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                 <SectionHeader 
                   title={cmsData.narrative?.mainHeading || "About Impact 224"} 
                   subtitle={cmsData.narrative?.subHeading || "Building Digital Experiences That Matter"} 
                 />
                 <div 
                   className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-lg"
                   dangerouslySetInnerHTML={{ __html: cmsData.narrative?.visionNarrative || "We are a collective of digital natives, strategists, and engineers who believe that a website should be your best salesperson." }}
                 />
                 
                 <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                    <div>
                        <span className={`block text-4xl font-bold mb-1 ${getAccentColorClass('text')}`}>
                          {cmsData.performance?.stat1Value || "80%"}
                        </span>
                        <span className="text-xs uppercase tracking-wide text-neutral-500 font-bold">
                          {cmsData.performance?.stat1Label || "Faster Load Times"}
                        </span>
                    </div>
                    <div>
                        <span className={`block text-4xl font-bold mb-1 ${getAccentColorClass('text')}`}>
                          {cmsData.performance?.stat2Value || "No. 1"}
                        </span>
                        <span className="text-xs uppercase tracking-wide text-neutral-500 font-bold">
                          {cmsData.performance?.stat2Label || "In ROI Focused Design"}
                        </span>
                    </div>
                    <div>
                        <span className={`block text-4xl font-bold mb-1 ${getAccentColorClass('text')}`}>
                          {cmsData.performance?.stat3Value || "100%"}
                        </span>
                        <span className="text-xs uppercase tracking-wide text-neutral-500 font-bold">
                          {cmsData.performance?.stat3Label || "Client Satisfaction"}
                        </span>
                    </div>
                 </div>
                 
                 <div className="mt-8 p-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl border-l-4 border-current" style={{ borderColor: 'var(--color-accent)' }}>
                    <p className="font-medium italic text-neutral-700 dark:text-neutral-300">
                      "{cmsData.promise?.coreQuote || "We don't just deliver a product; we deliver a promise of growth. That is the Impact 224 guarantee."}"
                    </p>
                    <p className="mt-4 text-sm font-bold">
                      — {cmsData.promise?.quoteAuthor || "Gunn Malhotra, Founder"}
                    </p>
                 </div>
            </div>
            <div className="relative">
                <div className={`absolute -inset-4 rounded-full opacity-20 blur-3xl ${getAccentColorClass('bg')}`}></div>
                <div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-800 rounded-3xl overflow-hidden relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                    <img 
                      src={cmsData.narrative?.brandImage || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"} 
                      className="w-full h-full object-cover" 
                      alt="Team collaborating" 
                    />
                </div>
            </div>
        </ScrollReveal>

        {/* Team Section */}
        <div className="mb-20">
             <SectionHeader 
               title={cmsData.personnel?.teamHeader || "Meet the Experts"} 
               subtitle="The brains behind the operation." 
               centered 
             />
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    {
                      name: cmsData.personnel?.m1Name || "Gunn Malhotra", 
                      role: cmsData.personnel?.m1Role || "Founder & Strategy", 
                      img: cmsData.personnel?.m1Image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                    },
                    {
                      name: cmsData.personnel?.m2Name || "Sarah Chen", 
                      role: cmsData.personnel?.m2Role || "Lead Developer", 
                      img: cmsData.personnel?.m2Image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
                    },
                    {
                      name: cmsData.personnel?.m3Name || "Marcus Jones", 
                      role: cmsData.personnel?.m3Role || "Creative Director", 
                      img: cmsData.personnel?.m3Image || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
                    },
                    {
                      name: cmsData.personnel?.m4Name || "Priya Patel", 
                      role: cmsData.personnel?.m4Role || "Marketing Head", 
                      img: cmsData.personnel?.m4Image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                    }
                ].map((member, i) => (
                    <ScrollReveal key={i} delay={i * 100} className="group text-center">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-neutral-200 relative">
                             <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors z-10"></div>
                             <img src={member.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" alt={member.name} />
                        </div>
                        <h4 className="font-bold text-xl text-neutral-900 dark:text-white">{member.name}</h4>
                        <p className={`text-sm font-medium uppercase tracking-wider mt-1 ${getAccentColorClass('text')}`}>{member.role}</p>
                    </ScrollReveal>
                ))}
             </div>
        </div>

        {/* Values */}
        <div className="py-12 border-t border-neutral-200 dark:border-neutral-800">
             <div className="grid md:grid-cols-3 gap-8">
                {[
                    {t: "Transparency", d: "No hidden fees. No jargon. Just clear communication and results."},
                    {t: "Speed", d: "We move fast because the market moves fast. Rapid iteration is key."},
                    {t: "Excellence", d: "Good enough isn't in our vocabulary. We aim for pixel perfection."}
                ].map((v, i) => (
                    <div key={i} className="flex gap-4">
                        <div className={`mt-1 ${getAccentColorClass('text')}`}>
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">{v.t}</h3>
                            <p className="text-neutral-500">{v.d}</p>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    </div>
  );
};