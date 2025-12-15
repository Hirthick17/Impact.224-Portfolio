import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { blogPosts } from '../data';
import { ScrollReveal, Button, Badge } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const { getAccentColorClass } = useTheme();

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
            <NavLink to="/blog" className="inline-flex items-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Insights
            </NavLink>
            
            <div className="mb-6 flex gap-2">
                <Badge text={post.category} />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-8">
                <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
                <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div 
                className="prose prose-lg dark:prose-invert max-w-none prose-a:text-yellow-500 hover:prose-a:text-yellow-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
                    <p className="text-neutral-500 mb-6">Subscribe to our newsletter for more insights on digital growth.</p>
                    <div className="flex justify-center">
                         <Button>Subscribe Now</Button>
                    </div>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </div>
  );
};