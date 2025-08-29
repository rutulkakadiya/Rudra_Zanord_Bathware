import React, { useState } from 'react'
import {
  LayoutDashboard,
  Sliders,
  Tags,
  FolderTree,
  FileText,
  Image,
  Menu,
  X,
  Users,
  Settings,
  LogOut,
  Sun,
  Moon
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import AdminHeader from '../Components/Common Components/AdminHeader'
import { DashboardContent } from './DashboardContent'
import { SliderContent } from './SliderContent'
import { CategoryContent } from './CategoryContent'
import { SubCategoryContent } from './SubCategoryContent'
import { ProductsContent } from './ProductsContent'
import { EBrochureContent } from './EBrochureContent'
import { GalleryContent } from './GalleryContent'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { isDarkMode, toggleTheme } = useTheme()

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'slider', label: 'Slider', icon: Sliders },
    { id: 'category', label: 'Category', icon: Tags },
    { id: 'subcategory', label: 'Subcategory', icon: FolderTree },
    { id: 'products', label: 'Products', icon: FolderTree },
    { id: 'ebrochure', label: 'E-Brochure', icon: FileText },
    { id: 'gallery', label: 'Gallery', icon: Image },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardContent />
      case 'slider':
        return <SliderContent />
      case 'category':
        return <CategoryContent />
      case 'subcategory':
        return <SubCategoryContent />
      case 'products':
        return <ProductsContent />
      case 'ebrochure':
        return <EBrochureContent />
      case 'gallery':
        return <GalleryContent />
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400 dark:text-gray-500 text-lg">Select a section from the sidebar</p>
          </div>
        )
    }
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Mobile menu button */}
      <div className={`lg:hidden p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className="flex h-[100vh]">
        {/* Fixed Sidebar - Only Navigation */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out lg:static fixed inset-y-0 left-0 z-40 w-64 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r`}>
          <div className="p-6 h-screen overflow-y-auto">
            <h1 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Admin Panel
            </h1>

            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id)
                      setSidebarOpen(false)
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeSection === item.id
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-md'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </nav>

            <div className={`mt-8 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isDarkMode
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}>
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>

              {/* Theme Toggle in Sidebar */}
              <div className={`mt-4 p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Theme</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode
                      ? 'bg-gray-600 text-gray-200'
                      : 'bg-gray-200 text-gray-600'
                    }`}>
                    {isDarkMode ? 'Dark' : 'Light'}
                  </span>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${isDarkMode
                      ? 'bg-gray-600 hover:bg-gray-500 text-gray-200'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="h-4 w-4" />
                      <span className="text-sm">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      <span className="text-sm">Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Scrollable Area */}
        <div className="flex-1 lg:ml-0 h-[100vh] overflow-y-auto">
          {/* AdminHeader inside main content */}
          <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-sm`}>
            <AdminHeader />
          </div>

          <div className="p-6 lg:p-8">
            <div className={`mb-6 p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h1 className={`text-3xl font-bold capitalize ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {activeSection === 'ebrochure' ? 'E-Brochure' : activeSection}
              </h1>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Manage your {activeSection === 'ebrochure' ? 'e-brochure' : activeSection} content
              </p>
            </div>

            <div className={`rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
