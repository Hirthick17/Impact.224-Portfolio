import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// --- Scroll Reveal Component ---
export const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`reveal ${isVisible ? 'active' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Primary CTA Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  withIcon = false,
  className = '',
  ...props 
}) => {
  const { getAccentColorClass } = useTheme();

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const bgAccent = getAccentColorClass('bg');
  const textAccent = getAccentColorClass('text');
  const borderAccent = getAccentColorClass('border');

  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = `${bgAccent} text-neutral-900 hover:brightness-110 shadow-lg shadow-${bgAccent}/20`;
      break;
    case 'secondary':
      variantStyles = "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200";
      break;
    case 'outline':
      variantStyles = `border-2 ${borderAccent} ${textAccent} hover:${bgAccent} hover:text-neutral-900 bg-transparent`;
      break;
    case 'ghost':
      variantStyles = "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800";
      break;
  }

  return (
    <button className={`${baseStyles} ${sizeStyles[size]} ${variantStyles} ${className}`} {...props}>
      {children}
      {withIcon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};

// --- Card Component ---
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-neutral-800/50 border border-neutral-200 dark:border-neutral-800 ${className}`} {...props}>
      {children}
    </div>
  );
};

// --- Section Header ---
export const SectionHeader: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = false }) => {
  return (
    <ScrollReveal>
      <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h2>
        {subtitle && <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">{subtitle}</p>}
      </div>
    </ScrollReveal>
  );
};

// --- Badge ---
export const Badge: React.FC<{ text: string }> = ({ text }) => {
  const { getAccentColorClass } = useTheme();
  return (
    <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-opacity-10 dark:bg-opacity-20 ${getAccentColorClass('bg')} ${getAccentColorClass('text')}`}>
      {text}
    </span>
  );
};