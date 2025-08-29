import React, { useState } from 'react'
import { FileText, Upload, Eye, Download, Trash2 } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export const EBrochureContent = () => {
  const [brochures, setBrochures] = useState([
    { id: 1, name: 'Product Catalog 2024', type: 'PDF', uploadDate: '2 days ago', size: '2.5 MB' },
    { id: 2, name: 'Service Brochure', type: 'PDF', uploadDate: '1 week ago', size: '1.8 MB' },
    { id: 3, name: 'Company Profile', type: 'PDF', uploadDate: '2 weeks ago', size: '3.2 MB' },
    { id: 4, name: 'Price List 2024', type: 'PDF', uploadDate: '1 month ago', size: '876 KB' }
  ])
  
  const { isDarkMode } = useTheme()

  const deleteBrochure = (id) => {
    setBrochures(brochures.filter(brochure => brochure.id !== id))
  }

  const handleFileUpload = (event) => {
    const files = event.target.files
    if (files.length > 0) {
      const newBrochures = Array.from(files).map((file, index) => ({
        id: brochures.length + index + 1,
        name: file.name.replace(/\.[^/.]+$/, ""),
        type: file.type.includes('pdf') ? 'PDF' : 'Document',
        uploadDate: 'Just now',
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`
      }))
      setBrochures([...brochures, ...newBrochures])
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          E-Brochure Management
        </h2>
        <label className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 cursor-pointer shadow-lg hover:shadow-xl`}>
          <Upload className="h-4 w-4" />
          <span>Upload Brochure</span>
          <input 
            type="file" 
            multiple 
            accept=".pdf,.doc,.docx" 
            onChange={handleFileUpload}
            className="hidden" 
          />
        </label>
      </div>
      
      <div className={`rounded-xl border p-6 ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brochures.map((brochure) => (
            <div key={brochure.id} className={`rounded-lg p-4 border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className={`h-40 rounded-lg mb-3 flex items-center justify-center ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-100'
              }`}>
                <FileText className={`h-12 w-12 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
              </div>
              <h4 className={`font-medium truncate ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{brochure.name}</h4>
              <p className={`text-sm mb-1 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>{brochure.type} Document</p>
              <p className={`text-xs mb-1 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-500'
              }`}>Size: {brochure.size}</p>
              <p className={`text-xs mb-3 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-500'
              }`}>Uploaded {brochure.uploadDate}</p>
              <div className="flex space-x-2">
                <button className={`text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1 transition-colors ${
                  isDarkMode ? 'hover:text-blue-200' : 'hover:text-blue-600'
                }`}>
                  <Eye className="h-3 w-3" />
                  <span>View</span>
                </button>
                <button className={`text-green-400 hover:text-green-300 text-sm flex items-center space-x-1 transition-colors ${
                  isDarkMode ? 'hover:text-green-200' : 'hover:text-green-600'
                }`}>
                  <Download className="h-3 w-3" />
                  <span>Download</span>
                </button>
                <button 
                  onClick={() => deleteBrochure(brochure.id)}
                  className={`text-red-400 hover:text-red-300 text-sm flex items-center space-x-1 transition-colors ${
                    isDarkMode ? 'hover:text-red-200' : 'hover:text-red-600'
                  }`}
                >
                  <Trash2 className="h-3 w-3" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}