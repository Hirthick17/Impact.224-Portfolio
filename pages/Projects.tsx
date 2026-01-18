import React, { useState } from 'react';
import { SectionHeader, Button, ScrollReveal } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { useCMSContent } from '../context/CMSContext';
import { ProjectsPageData } from '../admin/types';
import { NavLink } from 'react-router-dom';

type Category = 'All' | 'Website Development' | 'Digital Marketing' | 'Video Editing';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const { getAccentColorClass } = useTheme();
  
  // Get CMS data for projects page
  const cmsData = useCMSContent<ProjectsPageData>('projects');

  // Convert CMS data to array format for rendering
  const projectsArray = [
    {
      id: 1,
      slug: 'fintech-dashboard',
      title: cmsData.project1?.projectTitle || '',
      category: 'Website Development',
      image: cmsData.project1?.featuredImage || '',
      stats: cmsData.project1?.headlineResultStat || '',
      client: cmsData.project1?.clientName || '',
      duration: cmsData.project1?.projectDuration || '',
      challenge: cmsData.project1?.theChallenge || '',
      solution: cmsData.project1?.theSolution || '',
      results: cmsData.project1?.results?.split('\n') || [],
      testimonial: {
        text: cmsData.project1?.testimonialText || '',
        author: cmsData.project1?.testimonialAuthor || '',
        role: cmsData.project1?.testimonialRole || '',
        rating: parseInt(cmsData.project1?.testimonialRating || '5'),
        image: cmsData.project1?.testimonialImage || ''
      }
    },
    {
      id: 2,
      slug: 'nike-campaign',
      title: cmsData.project2?.projectTitle || '',
      category: 'Digital Marketing',
      image: cmsData.project2?.featuredImage || '',
      stats: cmsData.project2?.headlineResultStat || '',
      client: cmsData.project2?.clientName || '',
      duration: cmsData.project2?.projectDuration || '',
      challenge: cmsData.project2?.theChallenge || '',
      solution: cmsData.project2?.theSolution || '',
      results: cmsData.project2?.results?.split('\n') || [],
      testimonial: {
        text: cmsData.project2?.testimonialText || '',
        author: cmsData.project2?.testimonialAuthor || '',
        role: cmsData.project2?.testimonialRole || '',
        rating: parseInt(cmsData.project2?.testimonialRating || '5'),
        image: cmsData.project2?.testimonialImage || ''
      }
    },
    {
      id: 3,
      slug: 'tech-talks',
      title: cmsData.project3?.projectTitle || '',
      category: 'Video Editing',
      image: cmsData.project3?.featuredImage || '',
      stats: cmsData.project3?.headlineResultStat || '',
      client: cmsData.project3?.clientName || '',
      duration: cmsData.project3?.projectDuration || '',
      challenge: cmsData.project3?.theChallenge || '',
      solution: cmsData.project3?.theSolution || '',
      results: cmsData.project3?.results?.split('\n') || [],
      testimonial: {
        text: cmsData.project3?.testimonialText || '',
        author: cmsData.project3?.testimonialAuthor || '',
        role: cmsData.project3?.testimonialRole || '',
        rating: parseInt(cmsData.project3?.testimonialRating || '5'),
        image: cmsData.project3?.testimonialImage || ''
      }
    }
  ];

  const filteredProjects = filter === 'All' ? projectsArray : projectsArray.filter(p => p.category === filter);

  return (
    <div className="px-6 py-20 max-w-7xl mx-auto min-h-screen">
      <SectionHeader 
        title={cmsData.pageHeader?.pageTitle || 'Our Work'} 
        subtitle={cmsData.pageHeader?.pageSubtitle || 'A collection of projects that have generated millions in revenue for our clients.'} 
        centered 
      />
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {(['All', 'Website Development', 'Digital Marketing', 'Video Editing'] as Category[]).map(cat => (
            <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    filter === cat 
                    ? `${getAccentColorClass('bg')} text-neutral-900 shadow-lg scale-105` 
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                }`}
            >
                {cat}
            </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, i) => (
            <ScrollReveal key={project.id} className="group cursor-pointer">
                <NavLink to={`/projects/${project.slug}`}>
                    <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden mb-3 relative shadow-sm hover:shadow-2xl transition-shadow duration-500">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                            <span className={`text-xl font-bold text-white mb-2`}>{project.stats}</span>
                            <span className="text-white/80 text-xs mb-4">Result Achieved</span>
                            <span className="text-white font-bold border border-white px-5 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors">View Case Study</span>
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{project.title}</h3>
                    <p className="text-neutral-500 text-xs mt-1">{project.category}</p>
                </NavLink>
            </ScrollReveal>
        ))}
      </div>
      
      {/* Project Insights Section */}
      <div className="mt-32 mb-20">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-neutral-900 dark:text-white mb-4">
            {cmsData.projectInsights?.sectionTitle || 'Project Insights'}
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-16 max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <ScrollReveal delay={0.1}>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-200 dark:border-neutral-800 group">
              <div className={`text-5xl font-bold mb-2 ${getAccentColorClass('text')}`}>
                {cmsData.projectInsights?.insight1Number || '150+'}
              </div>
              <div className="text-neutral-900 dark:text-white text-lg font-semibold mb-1">
                {cmsData.projectInsights?.insight1Heading || 'Projects Completed'}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {cmsData.projectInsights?.insight1Subtitle || 'Across 3 continents'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-200 dark:border-neutral-800 group">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-5xl font-bold ${getAccentColorClass('text')}`}>
                  {cmsData.projectInsights?.insight2Number || '4.9'}
                </span>
                <svg className={`w-8 h-8 ${getAccentColorClass('text')}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-neutral-900 dark:text-white text-lg font-semibold mb-1">
                {cmsData.projectInsights?.insight2Heading || 'Overall Rating'}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {cmsData.projectInsights?.insight2Subtitle || 'From 120+ reviews'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-200 dark:border-neutral-800 group">
              <div className={`text-5xl font-bold mb-2 ${getAccentColorClass('text')}`}>
                {cmsData.projectInsights?.insight3Number || '6-8'}
              </div>
              <div className="text-neutral-900 dark:text-white text-lg font-semibold mb-1">
                {cmsData.projectInsights?.insight3Heading || 'Weeks Average'}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {cmsData.projectInsights?.insight3Subtitle || 'Project completion time'}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-200 dark:border-neutral-800 group">
              <div className={`text-5xl font-bold mb-2 ${getAccentColorClass('text')}`}>
                {cmsData.projectInsights?.insight4Number || '85%'}
              </div>
              <div className="text-neutral-900 dark:text-white text-lg font-semibold mb-1">
                {cmsData.projectInsights?.insight4Heading || 'Avg. Retention Rate'}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {cmsData.projectInsights?.insight4Subtitle || 'Audience engagement'}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Client Reviews Section */}
      <div className="mb-20">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-neutral-900 dark:text-white mb-4">
            {cmsData.clientReviews?.sectionTitle || 'Reviews from Clients'}
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-16 max-w-2xl mx-auto">
            {cmsData.clientReviews?.sectionSubtitle || 'Hear what our clients have to say about their project experience'}
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {projectsArray.map((project, i) => (
            <ScrollReveal key={`testimonial-${project.id}`} delay={i * 0.1}>
              <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-800">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left side - Project Info */}
                  <div className="md:w-1/3 flex flex-col">
                    <div className="aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${getAccentColorClass('text')}`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                      {project.category}
                    </p>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getAccentColorClass('bg')} bg-opacity-10 w-fit`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className={`font-bold text-sm ${getAccentColorClass('text')}`}>{project.stats}</span>
                    </div>
                  </div>

                  {/* Right side - Client Review */}
                  <div className="md:w-2/3 flex flex-col">
                    {/* Client Info Header */}
                    <div className="flex items-start gap-4 mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200 dark:bg-neutral-800">
                        {project.testimonial.image ? (
                          <img 
                            src={project.testimonial.image} 
                            alt={project.testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`w-full h-full ${getAccentColorClass('bg')} bg-opacity-20 flex items-center justify-center`}>
                            <span className={`text-2xl font-bold ${getAccentColorClass('text')}`}>
                              {project.testimonial.author.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                          {project.testimonial.author}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                          {project.testimonial.role}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Client:</span>
                          <span className={`text-sm font-bold ${getAccentColorClass('text')}`}>{project.client}</span>
                        </div>
                      </div>
                      {/* Star Rating */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className={`w-5 h-5 ${
                              index < project.testimonial.rating
                                ? `${getAccentColorClass('text')}`
                                : 'text-neutral-300 dark:text-neutral-700'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="mb-6">
                      <h5 className="text-sm font-bold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-3">
                        Project Overview
                      </h5>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">Service Type</span>
                          <p className="font-semibold text-neutral-900 dark:text-white">{project.category}</p>
                        </div>
                        <div>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">Duration</span>
                          <p className="font-semibold text-neutral-900 dark:text-white">{project.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Client Experience */}
                    <div>
                      <h5 className="text-sm font-bold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-3">
                        Client Experience
                      </h5>
                      <blockquote className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                        "{project.testimonial.text}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
        
      <div className="text-center mt-20">
        <Button variant="outline" className="rounded-full px-12">Load More Projects</Button>
      </div>
    </div>
  );
};