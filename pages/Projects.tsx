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
      results: cmsData.project1?.results?.split('\n') || []
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
      results: cmsData.project2?.results?.split('\n') || []
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
      results: cmsData.project3?.results?.split('\n') || []
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
        
      <div className="text-center mt-20">
        <Button variant="outline" className="rounded-full px-12">Load More Projects</Button>
      </div>
    </div>
  );
};