import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('zanord-admin-theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [themePreference, setThemePreference] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('zanord-admin-theme-preference') || 'system';
    }
    return 'system';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('zanord-admin-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('zanord-admin-theme', 'light');
    }
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    if (themePreference === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        setIsDarkMode(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [themePreference]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const setTheme = (theme) => {
    if (theme === 'system') {
      setThemePreference('system');
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      setThemePreference(theme);
      setIsDarkMode(theme === 'dark');
    }
    localStorage.setItem('zanord-admin-theme-preference', theme);
  };

  const getThemeColors = () => {
    return {
      primary: isDarkMode ? '#155dfd' : '#155dfd',
      background: isDarkMode ? '#111827' : '#f9fafb',
      surface: isDarkMode ? '#1f2937' : '#ffffff',
      text: isDarkMode ? '#f9fafb' : '#111827',
      textSecondary: isDarkMode ? '#9ca3af' : '#6b7280',
      border: isDarkMode ? '#374151' : '#e5e7eb',
      hover: isDarkMode ? '#374151' : '#f3f4f6',
    };
  };

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme, 
      setTheme, 
      themePreference,
      getThemeColors 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};



