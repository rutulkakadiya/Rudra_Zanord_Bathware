import React, { useState } from 'react';
import { User, LogOut, Bell, Settings, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext'; // ✅ Import theme hook

const AdminHeader = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme(); // ✅ Get dark mode status

  const handleLogout = () => {
    // Add logout logic here
    navigate('/admin');
  };

  return (
    <header
      className={`w-full border-b shadow-sm 
        ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo/Brand */}
          <div className="flex items-center">
            <h1
              className={`text-xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Zanord Admin
            </h1>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

       

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200
                  ${isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="hidden sm:block text-sm font-medium">
                  Admin
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div
                  className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg border py-2
                    ${isDarkMode
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-white border-gray-200'}`}
                >
                  <div
                    className={`px-4 py-2 border-b
                      ${isDarkMode
                        ? 'border-gray-700'
                        : 'border-gray-200'}`}
                  >
                    <p
                      className={`text-sm font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Admin User
                    </p>
                    <p
                      className={`text-xs ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      admin@zanord.com
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className={`w-full flex items-center space-x-2 px-4 py-2 text-sm transition-colors duration-200
                      ${isDarkMode
                        ? 'text-red-400 hover:bg-gray-700'
                        : 'text-red-600 hover:bg-gray-100'}`}
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
