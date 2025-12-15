import React from 'react';
import { SectionHeader, Card, Button } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import { servicesData } from '../data';

export const Services: React.FC = () => {
  const { getAccentColorClass } = useTheme();

  return (
    <div className="pt-10">
        <div className="text-center px-6 mb-16">
            <span className={`text-sm font-bold uppercase tracking-widest ${getAccentColorClass('text')}`}>Our Expertise</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 text-neutral-900 dark:text-white">Services Built for Impact</h1>
        </div>

        {servicesData.map((service, index) => (
             <section key={service.id} className="py-20 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
                <div className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">{service.title}</h2>
                        <p className="text-lg text-neutral-500 mb-8">{service.subtitle}</p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {service.features.slice(0, 4).map((f, i) => (
                                <div key={i} className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-800">
                                    <div className={`w-2 h-2 rounded-full mb-2 ${getAccentColorClass('bg')}`}></div>
                                    <span className="font-semibold text-sm text-neutral-900 dark:text-white">{f}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <NavLink to={`/services/${service.id}`}>
                                <Button>Learn More</Button>
                            </NavLink>
                            <NavLink to="/contact">
                                <Button variant="outline">Get Started</Button>
                            </NavLink>
                        </div>
                    </div>
                    <div className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 relative group">
                            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    </div>
                </div>
            </section>
        ))}
    </div>
  );
};