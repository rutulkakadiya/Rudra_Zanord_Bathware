import React, { useState } from 'react'
import { Image, Upload, Eye, Trash2 } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export const GalleryContent = () => {
  const [images, setImages] = useState(
    Array.from({length: 12}, (_, i) => ({
      id: i + 1,
      name: `Image ${i + 1}`,
      uploadDate: `${i + 1} days ago`,
      size: `${(Math.random() * 2 + 0.5).toFixed(1)} MB`
    }))
  )
  
  const { isDarkMode } = useTheme()

  const deleteImage = (id) => {
    setImages(images.filter(image => image.id !== id))
  }

  const handleImageUpload = (event) => {
    const files = event.target.files
    if (files.length > 0) {
      const newImages = Array.from(files).map((file, index) => ({
        id: images.length + index + 1,
        name: file.name.replace(/\.[^/.]+$/, ""),
        uploadDate: 'Just now',
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`
      }))
      setImages([...images, ...newImages])
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Gallery Management
        </h2>
        <label className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 cursor-pointer shadow-lg hover:shadow-xl`}>
          <Upload className="h-4 w-4" />
          <span>Upload Images</span>
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            onChange={handleImageUpload}
            className="hidden" 
          />
        </label>
      </div>
      
      <div className={`rounded-xl border p-6 ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className={`rounded-lg p-2 border ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className={`h-32 rounded-lg mb-2 flex items-center justify-center ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-100'
              }`}>
                <Image className={`h-8 w-8 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
              </div>
              <div className={`text-xs mb-2 truncate ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{image.name}</div>
              <div className="flex justify-between text-xs">
                <button className={`text-blue-400 hover:text-blue-300 flex items-center space-x-1 transition-colors ${
                  isDarkMode ? 'hover:text-blue-200' : 'hover:text-blue-600'
                }`}>
                  <Eye className="h-3 w-3" />
                  <span>View</span>
                </button>
                <button 
                  onClick={() => deleteImage(image.id)}
                  className={`text-red-400 hover:text-red-300 flex items-center space-x-1 transition-colors ${
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