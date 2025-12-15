import React from 'react';
import { SectionHeader, Button, Card, ScrollReveal } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
    const { getAccentColorClass } = useTheme();

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                <ScrollReveal>
                    <SectionHeader title="Let's build something great together" subtitle="Ready to start your project? Fill out the form or contact us directly." />
                    
                    <div className="space-y-8 mt-8">
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 ${getAccentColorClass('text')}`}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-neutral-900 dark:text-white">Email Us</h3>
                                <p className="text-neutral-500 mb-1">Our friendly team is here to help.</p>
                                <a href="mailto:hello@impact224.com" className="font-semibold hover:underline">hello@impact224.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 ${getAccentColorClass('text')}`}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-neutral-900 dark:text-white">Visit Us</h3>
                                <p className="text-neutral-500 mb-1">Come say hello at our office HQ.</p>
                                <p className="font-medium">100 Smith Street<br/>Collingwood VIC 3066 AU</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 ${getAccentColorClass('text')}`}>
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-neutral-900 dark:text-white">Working Hours</h3>
                                <p className="text-neutral-500">Mon - Fri: 8am - 6pm</p>
                                <p className="text-neutral-500">Sat - Sun: Closed</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <Card className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl p-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">First name</label>
                                    <input type="text" className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-current transition-all" placeholder="Jane" style={{ color: 'inherit' }} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Last name</label>
                                    <input type="text" className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-current transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Email address</label>
                                <input type="email" className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-current transition-all" placeholder="email@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Project Type</label>
                                <select className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-current transition-all">
                                    <option>Web Development</option>
                                    <option>Digital Marketing</option>
                                    <option>SEO Audit</option>
                                    <option>Brand Identity</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">Your message</label>
                                <textarea rows={4} className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-current transition-all" placeholder="Tell us about your project goals..."></textarea>
                            </div>
                            <Button type="submit" className="w-full text-lg py-4">Send Message</Button>
                        </form>
                    </Card>
                </ScrollReveal>
            </div>
        </div>
    );
};