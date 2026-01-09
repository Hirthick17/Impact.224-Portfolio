import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Users, Settings, DollarSign, Image, PenTool, Rocket, Activity, Database, Zap, LogOut, Lightbulb, Globe, BarChart3, Video } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [adminUser, setAdminUser] = useState<any>(null);

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (!auth) {
      navigate('/admin/login');
      return;
    }
    setAdminUser(JSON.parse(auth));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/admin/login');
  };

  const modules = [
    {
      id: 'home',
      title: 'Landing Page',
      description: 'MANAGE HERO, STATS, AND CORE MESSAGING.',
      icon: FileText,
      color: 'yellow',
      path: '/admin/editor/home',
    },
    {
      id: 'about',
      title: 'About Section',
      description: 'EDIT COMPANY VISION, TEAM MEMBERS, AND HISTORY.',
      icon: Users,
      color: 'blue',
      path: '/admin/editor/about',
    },
    {
      id: 'services',
      title: 'Service Modules',
      description: 'DEFINE SERVICE DESCRIPTIONS, FEATURES, AND CASE STORIES.',
      icon: Settings,
      color: 'green',
      path: '/admin/editor/services',
    },
    {
      id: 'pricing',
      title: 'Pricing Engine',
      description: 'CONFIGURE GLOBAL PRICING TIERS AND FEATURE LISTS.',
      icon: DollarSign,
      color: 'purple',
      path: '/admin/editor/pricing',
    },
    {
      id: 'projects',
      title: 'Project Portfolio',
      description: 'SHOWCASE CLIENT RESULTS AND HIGH-IMPACT IMAGERY.',
      icon: Image,
      color: 'pink',
      path: '/admin/editor/projects',
    },
    {
      id: 'blog',
      title: 'Growth Blog',
      description: 'WRITE ARTICLES AND MANAGE THE RESOURCE HUB.',
      icon: PenTool,
      color: 'orange',
      path: '/admin/editor/blog',
    },
    {
      id: 'service-web-dev',
      title: 'Service: Web Development',
      description: 'EDIT WEB DEVELOPMENT SERVICE DETAIL PAGE.',
      icon: Globe,
      color: 'cyan',
      path: '/admin/editor/service-web-dev',
    },
    {
      id: 'service-marketing',
      title: 'Service: Digital Marketing',
      description: 'EDIT DIGITAL MARKETING SERVICE DETAIL PAGE.',
      icon: BarChart3,
      color: 'indigo',
      path: '/admin/editor/service-marketing',
    },
    {
      id: 'service-video',
      title: 'Service: Video Editing',
      description: 'EDIT VIDEO EDITING SERVICE DETAIL PAGE.',
      icon: Video,
      color: 'red',
      path: '/admin/editor/service-video',
    },
  ];

  const colorClasses: Record<string, string> = {
    yellow: 'text-yellow-400',
    blue: 'text-blue-400',
    green: 'text-green-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    orange: 'text-orange-400',
    cyan: 'text-cyan-400',
    indigo: 'text-indigo-400',
    red: 'text-red-400',
  };

  if (!adminUser) return null;

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-neutral-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-start">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="relative flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Go to Admin Dashboard"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-yellow-400">
                <Lightbulb size={24} strokeWidth={2.5} className="fill-current" />
              </div>
              <div className="flex items-start pt-2">
                <span className="font-script text-4xl text-white leading-none">Impact</span>
                <span className="font-sans text-lg font-bold text-neutral-400 -mt-1 ml-1">224</span>
              </div>
            </button>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition-colors font-medium"
          >
            <LogOut className="w-4 h-4" />
            Terminate Session
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Console Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight">
            CONTROL CONSOLE
          </h1>
          <p className="text-neutral-400 text-lg mb-4">
            WELCOME TO THE IMPACT 224 ENGINE ROOM. FROM HERE, YOU ACTIVELY EVERY PIXEL AND BYTE OF YOUR DIGITAL PRESENCE.{' '}
            <span className="text-yellow-400 font-bold">CURRENTLY IN SANDBOX MODE.</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-12">
          <button className="flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all transform hover:scale-105">
            <Rocket className="w-5 h-5" />
            PRODUCTION BUILD
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-lg transition-colors border border-neutral-800"
          >
            TERMINATE SESSION
          </button>
        </div>

        {/* Health Monitor Grid */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Site Status</p>
            <p className="text-3xl font-bold text-white mb-1">ONLINE</p>
            <p className="text-sm text-neutral-600">0 Pending Changes</p>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Active Sections</p>
            <p className="text-3xl font-bold text-white">12</p>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">API Health</p>
            <p className="text-3xl font-bold text-green-400">99.9%</p>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Traffic Activity</p>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-yellow-400" />
              <p className="text-xl font-bold text-white">Live</p>
            </div>
          </div>
        </div>

        {/* Module Navigation Grid */}
        <div className="grid grid-cols-3 gap-6">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => navigate(module.path)}
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl p-8 text-left transition-all hover:scale-105 group"
            >
              <module.icon className={`w-12 h-12 mb-4 ${colorClasses[module.color]}`} />
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                {module.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {module.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
