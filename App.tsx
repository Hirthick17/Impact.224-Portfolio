import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CMSProvider } from './context/CMSContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Pricing } from './pages/Pricing';
import { ServiceDetail } from './pages/ServiceDetail';
import { BlogDetail } from './pages/BlogDetail';
import { ProjectDetail } from './pages/ProjectDetail';
import { SeedPage } from './pages/SeedPage';

// Admin Pages
import { AdminLogin } from './admin/pages/Login';
import { AdminDashboard } from './admin/pages/Dashboard';
import { AdminEditor } from './admin/pages/Editor';

// Migration utilities
import { seedDatabase } from './scripts/seed-database';
import { migrateToSupabase } from './scripts/migrate-to-supabase';
import { testSupabaseConnection } from './scripts/test-connection';

const App: React.FC = () => {
  // Expose migration utilities to window for easy console access
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).seedDatabase = seedDatabase;
      (window as any).migrateToSupabase = migrateToSupabase;
      (window as any).testSupabaseConnection = testSupabaseConnection;
      
      console.log('🚀 Supabase Migration Utilities Loaded!');
      console.log('💡 Available commands:');
      console.log('   - testSupabaseConnection() - Test Supabase connection');
      console.log('   - seedDatabase() - Seed database with default content');
      console.log('   - migrateToSupabase() - Migrate localStorage data to Supabase');
      console.log('💡 Or visit /seed page to seed via UI');
    }
  }, []);

  return (
    <ThemeProvider>
      <CMSProvider>
        <Router>
          <Routes>
            {/* Utility Routes */}
            <Route path="/seed" element={<SeedPage />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/editor/:pageId" element={<AdminEditor />} />

            {/* Public Routes */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/services" element={<Layout><Services /></Layout>} />
            <Route path="/services/:id" element={<Layout><ServiceDetail /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/projects/:slug" element={<Layout><ProjectDetail /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/:slug" element={<Layout><BlogDetail /></Layout>} />
            <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
          </Routes>
        </Router>
      </CMSProvider>
    </ThemeProvider>
  );
};


export default App;