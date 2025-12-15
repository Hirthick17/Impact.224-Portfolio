import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Button } from './UIComponents';
import { Lightbulb, Menu, X, Moon, Sun, Palette, Mail, Linkedin, Instagram } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode, accentColor, setAccentColor, getAccentColorClass } = useTheme();
  const [showThemePanel, setShowThemePanel] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close menu on route change
    window.scrollTo(0, 0); // Scroll to top
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-neutral-800 selection:text-white dark:selection:bg-white dark:selection:text-black">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Custom Logo Implementation - High Precision */}
          <NavLink to="/" className="flex items-center gap-2 group select-none">
             <div className="relative flex items-center">
                {/* Lightbulb - Positioned to look like it's illuminating the text */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${getAccentColorClass('text')} transition-all duration-300 group-hover:scale-110`}>
                   <Lightbulb size={28} strokeWidth={2.5} className="fill-current opacity-20 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] transition-all duration-500" />
                </div>
                
                <div className="flex items-start pt-2">
                   {/* Main Script Text */}
                   <span className="font-script text-5xl text-neutral-900 dark:text-white leading-none relative z-10">
                      Impact
                   </span>
                   {/* Exponent 224 */}
                   <span className="font-sans text-xl font-bold text-neutral-500 dark:text-neutral-400 -mt-2 ml-1 tracking-tighter">
                      224
                   </span>
                </div>
                
                {/* Underline Animation */}
                <span className={`absolute -bottom-2 left-0 w-full h-[3px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${getAccentColorClass('bg')}`}></span>
             </div>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => `text-sm font-medium transition-colors hover:${getAccentColorClass('text')} ${isActive ? getAccentColorClass('text') : 'text-neutral-600 dark:text-neutral-400'}`}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/contact">
              <Button size="sm" variant="secondary">Contact Us</Button>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-neutral-900 dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-800 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
            {links.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className="text-lg font-medium py-2 border-b border-neutral-100 dark:border-neutral-900 text-neutral-900 dark:text-white"
              >
                {link.name}
              </NavLink>
            ))}
             <NavLink to="/contact" className="w-full">
              <Button className="w-full mt-4">Get Started</Button>
             </NavLink>
          </div>
        )}
      </nav>

      {/* --- Main Content --- */}
      <main className="flex-grow pt-28">
        {children}
      </main>

      {/* --- Sticky CTA Section (Pre-Footer) --- */}
      <section className="py-16 px-6 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-white">Ready to dominate your market?</h3>
            <p className="text-neutral-500">Book your free 30-minute strategy session. No obligations.</p>
          </div>
          <div className="flex gap-4">
             <NavLink to="/projects">
               <Button variant="outline">Case Studies</Button>
             </NavLink>
             <NavLink to="/contact">
                <Button>Scale Your Business</Button>
             </NavLink>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white dark:bg-black py-12 px-6 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-start mb-4">
                 <span className="font-script text-3xl font-bold text-neutral-900 dark:text-white leading-none">
                    Impact
                 </span>
                 <span className="font-sans text-xs font-bold text-neutral-500 dark:text-neutral-400 -mt-1 ml-1">
                    224
                 </span>
            </div>
            <p className="mb-6">Turning ideas into creativity. We help businesses grow through data-driven digital strategies and high-performance engineering.</p>
            <div className="flex gap-4">
              <a href="mailto:hello@impact224.com" className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-neutral-900 dark:text-white">
                <Mail size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-neutral-900 dark:text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-neutral-900 dark:text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2">
                <li><NavLink to="/services/web-development" className="hover:text-neutral-900 dark:hover:text-white">Web Development</NavLink></li>
                <li><NavLink to="/services/digital-marketing" className="hover:text-neutral-900 dark:hover:text-white">Performance Marketing</NavLink></li>
                <li><NavLink to="/services/video-editing" className="hover:text-neutral-900 dark:hover:text-white">Video Production</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Company</h4>
             <ul className="space-y-2">
                <li><NavLink to="/about" className="hover:text-neutral-900 dark:hover:text-white">About Us</NavLink></li>
                <li><NavLink to="/blog" className="hover:text-neutral-900 dark:hover:text-white">Blog</NavLink></li>
                <li><NavLink to="/projects" className="hover:text-neutral-900 dark:hover:text-white">Success Stories</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</NavLink></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Languages</h4>
             <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-300 text-xs font-semibold">English</span>
                <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-300 text-xs font-semibold">Hindi</span>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-900 flex justify-between">
            <p>© 2024 Impact 224. All rights reserved.</p>
        </div>
      </footer>

      {/* --- Design Experimentation Panel (Floating) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {showThemePanel && (
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 mb-2 w-64 animate-in slide-in-from-bottom-5">
                <p className="text-xs font-bold uppercase text-neutral-500 mb-2">Theme Experimentation</p>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-white">Dark Mode</span>
                        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 transition-colors">
                            {isDarkMode ? <Moon size={16} className="text-white"/> : <Sun size={16} />}
                        </button>
                    </div>
                    <div>
                        <span className="text-sm block mb-2 dark:text-white">Primary Accent</span>
                        <div className="flex gap-2">
                            {(['yellow', 'blue', 'emerald', 'rose'] as const).map(c => (
                                <button 
                                    key={c}
                                    onClick={() => setAccentColor(c)}
                                    className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${accentColor === c ? 'border-white ring-2 ring-neutral-400' : 'border-transparent'}`}
                                    style={{ backgroundColor: c === 'yellow' ? '#FACC15' : c === 'blue' ? '#3B82F6' : c === 'emerald' ? '#10B981' : '#F43F5E' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}
        <button 
            onClick={() => setShowThemePanel(!showThemePanel)}
            className={`p-4 rounded-full shadow-xl text-neutral-900 transition-all hover:scale-110 hover:shadow-2xl ${getAccentColorClass('bg')}`}
        >
            <Palette />
        </button>
      </div>

    </div>
  );
};