import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { useCMSContent } from '../context/CMSContext';
import { ProjectsPageData } from '../admin/types';
import { ScrollReveal, Button } from '../components/UIComponents';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getAccentColorClass } = useTheme();
  
  // Get CMS data for projects page
  const cmsData = useCMSContent<ProjectsPageData>('projects');

  // Map slug to project data from CMS
  const projectMap: Record<string, any> = {
    'fintech-dashboard': {
      title: cmsData.project1?.projectTitle || '',
      category: 'Website Development',
      image: cmsData.project1?.featuredImage || '',
      stats: cmsData.project1?.headlineResultStat || '',
      client: cmsData.project1?.clientName || '',
      duration: cmsData.project1?.projectDuration || '',
      challenge: cmsData.project1?.theChallenge || '',
      solution: cmsData.project1?.theSolution || '',
      results: cmsData.project1?.results?.split('\n').filter(r => r.trim()) || []
    },
    'nike-campaign': {
      title: cmsData.project2?.projectTitle || '',
      category: 'Digital Marketing',
      image: cmsData.project2?.featuredImage || '',
      stats: cmsData.project2?.headlineResultStat || '',
      client: cmsData.project2?.clientName || '',
      duration: cmsData.project2?.projectDuration || '',
      challenge: cmsData.project2?.theChallenge || '',
      solution: cmsData.project2?.theSolution || '',
      results: cmsData.project2?.results?.split('\n').filter(r => r.trim()) || []
    },
    'tech-talks': {
      title: cmsData.project3?.projectTitle || '',
      category: 'Video Editing',
      image: cmsData.project3?.featuredImage || '',
      stats: cmsData.project3?.headlineResultStat || '',
      client: cmsData.project3?.clientName || '',
      duration: cmsData.project3?.projectDuration || '',
      challenge: cmsData.project3?.theChallenge || '',
      solution: cmsData.project3?.theSolution || '',
      results: cmsData.project3?.results?.split('\n').filter(r => r.trim()) || []
    }
  };

  const project = slug ? projectMap[slug] : null;

  if (!project || !project.title) {
    return <Navigate to="/projects" />;
  }

  return (
    <div className="min-h-screen">
       {/* Hero */}
       <div className="relative h-[50vh] min-h-[400px]">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <NavLink to="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Projects
                </NavLink>
                <div className="mb-4">
                    <span className={`px-3 py-1 text-sm font-bold uppercase tracking-wider rounded-full bg-white text-black`}>
                        {project.category}
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
                <p className={`text-2xl font-bold ${getAccentColorClass('text')}`}>{project.stats}</p>
            </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
             <ScrollReveal>
                <h2 className="text-2xl font-bold mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">The Challenge</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {project.challenge}
                </p>
             </ScrollReveal>

             <ScrollReveal delay={100}>
                <h2 className="text-2xl font-bold mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">Our Solution</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {project.solution}
                </p>
             </ScrollReveal>

             <ScrollReveal delay={200}>
                <h2 className="text-2xl font-bold mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">Key Results</h2>
                <div className="grid gap-4">
                    {project.results.map((result: string, i: number) => (
                        <div key={i} className="flex items-start gap-4 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                             <div className={`mt-1 ${getAccentColorClass('text')}`}>
                                <CheckCircle2 size={24} />
                             </div>
                             <p className="font-medium text-lg text-neutral-900 dark:text-white">{result}</p>
                        </div>
                    ))}
                </div>
             </ScrollReveal>
             
             <div className="pt-10">
                <NavLink to="/contact">
                    <Button size="lg" className="w-full md:w-auto">Start a Project Like This</Button>
                </NavLink>
             </div>
          </div>

          {/* Sidebar Meta */}
          <div className="space-y-8">
             <div className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-bold mb-6">Project Info</h3>
                <div className="space-y-6">
                    <div>
                        <div className="text-sm text-neutral-500 uppercase tracking-wider font-semibold mb-1">Client</div>
                        <div className="text-lg font-medium">{project.client}</div>
                    </div>
                    <div>
                        <div className="text-sm text-neutral-500 uppercase tracking-wider font-semibold mb-1">Duration</div>
                        <div className="text-lg font-medium">{project.duration}</div>
                    </div>
                    <div>
                        <div className="text-sm text-neutral-500 uppercase tracking-wider font-semibold mb-1">Services</div>
                        <div className="text-lg font-medium">{project.category}</div>
                    </div>
                </div>
             </div>
          </div>

       </div>
    </div>
  );
};