import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-xl border transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400 transform hover:scale-105 ${
        isDarkMode
          ? 'bg-gray-800 border-gray-700 hover:bg-gray-700 text-yellow-300 hover:text-yellow-200'
          : 'bg-white border-gray-200 hover:bg-sky-50 text-sky-500 hover:text-sky-600'
      }`}
      aria-label="Toggle theme"
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative">
        {isDarkMode ? (
          <Sun className="h-5 w-5 animate-pulse" />
        ) : (
          <Moon className="h-5 w-5 animate-pulse" />
        )}
        {/* Theme indicator dot */}
        <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
          isDarkMode ? 'bg-yellow-400' : 'bg-sky-400'
        } animate-ping`}></div>
      </div>
    </button>
  );
};

export default ThemeToggle;



