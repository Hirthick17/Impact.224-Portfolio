import React from 'react';
import { SectionHeader, ScrollReveal } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { getAccentColorClass } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
        <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                 <SectionHeader title="About Impact 224" subtitle="Building Digital Experiences That Matter" />
                 <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-lg">
                    We are a collective of digital natives, strategists, and engineers who believe that a website should be your best salesperson. From concept to execution, we craft digital products that empower businesses and create meaningful user impact.
                 </p>
                 <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-lg">
                    With a focus on quality code, speed optimization, and psychological triggers in design, we turn your digital challenges into revenue opportunities.
                 </p>
                 
                 <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                    <div>
                        <span className={`block text-4xl font-bold mb-1 ${getAccentColorClass('text')}`}>80%</span>
                        <span className="text-xs uppercase tracking-wide text-neutral-500 font-bold">Faster Load Times</span>
                    </div>
                    <div>
                        <span className={`block text-4xl font-bold mb-1 ${getAccentColorClass('text')}`}>No. 1</span>
                        <span className="text-xs uppercase tracking-wide text-neutral-500 font-bold">In ROI Focused Design</span>
                    </div>
                    <div>
                        <span className={`block text-4xl font-bold mb-1 ${getAccentColorClass('text')}`}>100%</span>
                        <span className="text-xs uppercase tracking-wide text-neutral-500 font-bold">Client Satisfaction</span>
                    </div>
                 </div>
                 
                 <div className="mt-8 p-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl border-l-4 border-current" style={{ borderColor: 'var(--color-accent)' }}>
                    <p className="font-medium italic text-neutral-700 dark:text-neutral-300">"We don't just deliver a product; we deliver a promise of growth. That is the Impact 224 guarantee."</p>
                    <p className="mt-4 text-sm font-bold">— Gunn Malhotra, Founder</p>
                 </div>
            </div>
            <div className="relative">
                <div className={`absolute -inset-4 rounded-full opacity-20 blur-3xl ${getAccentColorClass('bg')}`}></div>
                <div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-800 rounded-3xl overflow-hidden relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Team collaborating" />
                </div>
            </div>
        </ScrollReveal>

        {/* Team Section */}
        <div className="mb-20">
             <SectionHeader title="Meet the Experts" subtitle="The brains behind the operation." centered />
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    {name: "Gunn Malhotra", role: "Founder & Strategy", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"},
                    {name: "Sarah Chen", role: "Lead Developer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"},
                    {name: "Marcus Jones", role: "Creative Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"},
                    {name: "Priya Patel", role: "Marketing Head", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"}
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