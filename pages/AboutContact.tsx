import React from 'react';
import { SectionHeader, Button, Card } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
    const { getAccentColorClass } = useTheme();
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                 <SectionHeader title="About" subtitle="Building Digital Experiences That Matter" />
                 <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    From concept to execution, we craft digital products that empower businesses and create meaningful user impact. With a focus on quality, speed, and innovation, we turn challenges into opportunities.
                 </p>
                 
                 {/* Stats from wireframe */}
                 <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                    <div>
                        <span className="block text-3xl font-bold">80%</span>
                        <span className="text-xs uppercase tracking-wide text-neutral-500">Faster Development</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold">No. 1</span>
                        <span className="text-xs uppercase tracking-wide text-neutral-500">Ranking in Return</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold">100%</span>
                        <span className="text-xs uppercase tracking-wide text-neutral-500">Guaranteed Result</span>
                    </div>
                 </div>
                 <p className="mt-4 text-sm font-medium italic">Promised by Us - Gunn Malhotra [US]</p>
            </div>
            <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-3xl overflow-hidden relative">
                <img src="https://picsum.photos/seed/aboutus/800/800" className="w-full h-full object-cover" alt="Team" />
            </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
             <SectionHeader title="Our Trustworthy Developers" centered />
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1,2,3,4].map(i => (
                    <div key={i} className="text-center">
                        <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-neutral-200">
                             <img src={`https://picsum.photos/seed/dev${i}/300/400`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="Developer" />
                        </div>
                        <h4 className="font-bold">Team Member {i}</h4>
                        <p className="text-xs text-neutral-500">Senior Engineer</p>
                    </div>
                ))}
             </div>
        </div>
    </div>
  );
};

export const Contact: React.FC = () => {
    const { getAccentColorClass } = useTheme();

    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            <SectionHeader title="Contact me" centered />
            <Card className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl">
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">First name</label>
                            <input type="text" className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-current" placeholder="Jane" style={{ color: 'var(--color-accent)' }} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Last name</label>
                            <input type="text" className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-current" placeholder="Doe" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Email address</label>
                        <input type="email" className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-current" placeholder="email@janesfakedomain.net" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Your message</label>
                        <textarea rows={4} className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-current" placeholder="Enter your question or message"></textarea>
                    </div>
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Card>
        </div>
    );
};