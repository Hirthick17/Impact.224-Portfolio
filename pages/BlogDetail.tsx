import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { blogPosts } from '../data';
import { ScrollReveal, Button, Badge } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { useCMSContent } from '../context/CMSContext';
import { BlogDetailData } from '../admin/types';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const { getAccentColorClass } = useTheme();

  // Check if this blog has CMS content
  const blogPageId = slug === 'seo-2025' ? 'blog-seo-2025' : null;
  const cmsData = blogPageId ? useCMSContent<BlogDetailData>(blogPageId) : null;

  if (!post) {
    return <Navigate to="/blog" />;
  }

  // If CMS data exists, use it; otherwise fall back to static content
  const useCMS = cmsData && Object.keys(cmsData).length > 0;

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
            <NavLink to="/blog" className="inline-flex items-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Insights
            </NavLink>
            
            <div className="mb-6 flex gap-2">
                <Badge text={useCMS ? cmsData.hero?.tagline || post.category : post.category} />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                {useCMS ? cmsData.hero?.heading || post.title : post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-8">
                <span className="flex items-center gap-2">
                  <User size={16} /> {useCMS ? cmsData.hero?.author || post.author : post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} /> {useCMS ? cmsData.hero?.date || post.date : post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} /> {useCMS ? cmsData.hero?.readTime || post.readTime : post.readTime}
                </span>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
                <img 
                  src={useCMS ? cmsData.hero?.featuredImage || post.image : post.image} 
                  alt={useCMS ? cmsData.hero?.heading || post.title : post.title} 
                  className="w-full h-full object-cover" 
                />
            </div>

            {useCMS ? (
              // Render CMS-based content
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-neutral-900 dark:prose-headings:text-white prose-p:text-neutral-600 dark:prose-p:text-neutral-400">
                {/* Introduction */}
                {cmsData.introduction?.introParagraph && (
                  <p className="mb-6 text-lg leading-relaxed">{cmsData.introduction.introParagraph}</p>
                )}

                {/* Section 1 */}
                {cmsData.section1 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">{cmsData.section1.subheading}</h3>
                    <p className="mb-6">{cmsData.section1.content}</p>
                  </div>
                )}

                {/* Section 2 */}
                {cmsData.section2 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">{cmsData.section2.subheading}</h3>
                    <p className="mb-6">{cmsData.section2.content}</p>
                  </div>
                )}

                {/* Dialog Box / Quote */}
                {cmsData.dialogBox?.quoteText && (
                  <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-xl border-l-4 border-yellow-400 my-8">
                    <p className="font-bold italic text-neutral-900 dark:text-white">{cmsData.dialogBox.quoteText}</p>
                  </div>
                )}

                {/* Section 3 with Bullets */}
                {cmsData.section3 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">{cmsData.section3.subheading}</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      {cmsData.section3.bullet1 && <li>{cmsData.section3.bullet1}</li>}
                      {cmsData.section3.bullet2 && <li>{cmsData.section3.bullet2}</li>}
                      {cmsData.section3.bullet3 && <li>{cmsData.section3.bullet3}</li>}
                    </ul>
                    {cmsData.section3.closingParagraph && (
                      <p className="mb-6">{cmsData.section3.closingParagraph}</p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              // Fall back to static HTML content
              <div 
                  className="prose prose-lg dark:prose-invert max-w-none prose-a:text-yellow-500 hover:prose-a:text-yellow-600"
                  dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}
            
            {/* CTA Section */}
            <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      {useCMS ? cmsData.cta?.ctaHeading || 'Enjoyed this article?' : 'Enjoyed this article?'}
                    </h3>
                    <p className="text-neutral-500 mb-6">
                      {useCMS ? cmsData.cta?.ctaSubheading || 'Subscribe to our newsletter for more insights on digital growth.' : 'Subscribe to our newsletter for more insights on digital growth.'}
                    </p>
                    <div className="flex justify-center">
                         <Button>
                           {useCMS ? cmsData.cta?.buttonText || 'Subscribe Now' : 'Subscribe Now'}
                         </Button>
                    </div>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </div>
  );
};