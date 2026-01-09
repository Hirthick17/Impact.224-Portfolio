import React from 'react';
import { SectionHeader, Button, ScrollReveal, Badge, Card } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { useCMSContent } from '../context/CMSContext';
import { BlogPageData } from '../admin/types';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { blogPosts } from '../data';

export const Blog: React.FC = () => {
  const { getAccentColorClass } = useTheme();
  const cmsData = useCMSContent<BlogPageData>('blog');

  return (
    <div className="px-6 py-20 max-w-7xl mx-auto min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <ScrollReveal>
            <Badge text={cmsData.pageHeader?.badge || 'Our Thoughts'} />
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-neutral-900 dark:text-white">
              {cmsData.pageHeader?.mainHeading || 'Insights for Growth'}
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {cmsData.pageHeader?.subHeading || 'Actionable strategies, technical deep dives, and marketing trends to help you stay ahead of the curve.'}
            </p>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 100} className="group flex flex-col h-full">
                <NavLink to={`/blog/${post.slug}`} className="h-full">
                    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div className="aspect-[16/10] overflow-hidden relative">
                            <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20">
                                {post.category}
                            </span>
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center text-[10px] font-bold">
                                        {post.author.charAt(0)}
                                    </div>
                                    <span className="text-xs font-medium text-neutral-900 dark:text-white">{post.author}</span>
                                </div>
                                <span className={`text-sm font-bold flex items-center gap-1 ${getAccentColorClass('text')}`}>
                                    Read <ArrowRight size={14} />
                                </span>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </ScrollReveal>
        ))}
      </div>
    </div>
  );
};