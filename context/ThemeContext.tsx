import React, { createContext, useContext, useState, useEffect } from 'react';
import { ColorTheme } from '../types';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  accentColor: ColorTheme;
  setAccentColor: (color: ColorTheme) => void;
  getAccentColorClass: (type: 'bg' | 'text' | 'border' | 'ring') => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode for that "premium agency" feel
  const [accentColor, setAccentColor] = useState<ColorTheme>('yellow');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Set CSS variable for accent color
  useEffect(() => {
    const root = document.documentElement;
    const colors: Record<ColorTheme, string> = {
      yellow: '#FACC15',
      blue: '#3B82F6',
      emerald: '#10B981',
      rose: '#F43F5E',
    };
    root.style.setProperty('--color-accent', colors[accentColor]);
  }, [accentColor]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Helper to dynamically get Tailwind classes based on selected theme
  const getAccentColorClass = (type: 'bg' | 'text' | 'border' | 'ring') => {
    const map: Record<ColorTheme, string> = {
      yellow: 'yellow-400',
      blue: 'blue-500',
      emerald: 'emerald-500',
      rose: 'rose-500',
    };
    return `${type}-${map[accentColor]}`;
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, accentColor, setAccentColor, getAccentColorClass }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};