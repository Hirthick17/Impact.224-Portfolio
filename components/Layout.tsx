import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Button } from './UIComponents';
import { Lightbulb, Menu, X, Moon, Sun, Palette, Mail, Linkedin, Instagram, ChevronDown, Lock } from 'lucide-react';
import { servicesData } from '../data';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services', isDropdown: true },
  { name: 'Projects', path: '/projects' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
];

export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isDarkMode, toggleDarkMode, accentColor, setAccentColor, getAccentColorClass } = useTheme();
  const [showThemePanel, setShowThemePanel] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-neutral-800 selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* --- Background Image Layer --- */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background: "url('/bg.jpg') center center / cover no-repeat",
          opacity: 0.35, // Adjust for desired transparency
          pointerEvents: "none",
          mixBlendMode: "multiply", // Optional: for blending effect
        }}
      />

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
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {links.map(link => (
              <div key={link.path} className="relative group" ref={link.isDropdown ? dropdownRef : null}>
                {link.isDropdown ? (
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    className={`flex items-center gap-1 text-base font-medium transition-all hover:${getAccentColorClass('text')} ${location.pathname.startsWith('/services') ? getAccentColorClass('text') : 'text-white dark:text-white'}`}
                  >
                    {link.name} <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => `text-base font-medium transition-all hover:${getAccentColorClass('text')} ${isActive ? getAccentColorClass('text') : 'text-white dark:text-white'}`}
                  >
                    {link.name}
                  </NavLink>
                )}

                {/* Dropdown Menu */}
                {link.isDropdown && (
                  <div 
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 w-80 bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 overflow-hidden transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                  >
                    <div className="py-3">
                      <NavLink 
                        to="/services" 
                        className="block px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-300 transition-colors"
                      >
                        View All Services
                      </NavLink>
                      <div className="border-t border-neutral-800 my-2"></div>
                      {servicesData.map(service => (
                        <NavLink 
                          key={service.id} 
                          to={`/services/${service.id}`}
                          className="flex items-start gap-4 px-6 py-4 hover:bg-neutral-800/50 transition-all group"
                        >
                          <div className={`mt-1 ${getAccentColorClass('text')}`}>
                            <service.icon size={20} strokeWidth={2} />
                          </div>
                          <span className="text-sm font-bold text-white leading-relaxed group-hover:text-neutral-100">{service.title}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Admin Access Icon */}
            <NavLink 
              to="/admin/login"
              className="p-2 rounded-lg hover:bg-neutral-800 transition-colors group"
              title="Admin Access"
            >
              <Lock className="w-5 h-5 text-neutral-400 group-hover:text-yellow-400 transition-colors" />
            </NavLink>
            
            <NavLink to="/contact">
              <Button size="sm" variant="secondary" className="rounded-lg px-6 bg-white text-black font-bold normal-case tracking-normal">Contact Us</Button>
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
            <h3 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-white">Subscribe to our newsletter</h3>
            <p className="text-neutral-500">Stay updated with our latest insights and exclusive content.</p>
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
      <footer className="bg-neutral-950 dark:bg-black py-12 px-6 text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-start mb-4">
              <span className="font-script text-3xl font-bold text-white leading-none">
                Impact
              </span>
              <span className="font-sans text-xs font-bold text-neutral-400 -mt-1 ml-1">
                224
              </span>
            </div>
            <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
              Empowering students to craft their careers, build skills, and connect with opportunities that matter.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Resources - Navigation Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/" className="text-neutral-300 hover:text-white transition-colors">Home</NavLink></li>
              <li><NavLink to="/services" className="text-neutral-300 hover:text-white transition-colors">Services</NavLink></li>
              <li><NavLink to="/projects" className="text-neutral-300 hover:text-white transition-colors">Projects</NavLink></li>
              <li><NavLink to="/blog" className="text-neutral-300 hover:text-white transition-colors">Blog</NavLink></li>
              <li><NavLink to="/about" className="text-neutral-300 hover:text-white transition-colors">About</NavLink></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:hello@impact.224@gmail.com" className="text-neutral-300 hover:text-white transition-colors">
                  hello@impact.224@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-neutral-300">+91 99880 66050</span>
              </li>
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-neutral-300">Ludhiana, Punjab</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 flex justify-center">
          <p className="text-neutral-400 text-sm">© 2025 Impact.224. All rights reserved.</p>
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