import React, { useState } from 'react';
import { Image, Plus, Edit, Trash2, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const SliderContent = () => {
  const [slides, setSlides] = useState([
    { id: 1, title: 'Slide 1', description: 'Sample slide description', image: null },
    { id: 2, title: 'Slide 2', description: 'Sample slide description', image: null },
    { id: 3, title: 'Slide 3', description: 'Sample slide description', image: null },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newSlide, setNewSlide] = useState({ title: '', description: '' });
  const { isDarkMode } = useTheme();

  const addSlide = () => {
    if (newSlide.title.trim() && newSlide.description.trim()) {
      const slide = {
        id: slides.length + 1,
        title: newSlide.title.trim(),
        description: newSlide.description.trim(),
        image: null,
      };
      setSlides([...slides, slide]);
      setNewSlide({ title: '', description: '' });
      setShowModal(false);
    }
  };

  const deleteSlide = (id) => {
    setSlides(slides.filter((slide) => slide.id !== id));
  };

  const closeModal = () => {
    setShowModal(false);
    setNewSlide({ title: '', description: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Slider Management
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className={`bg-[#155dfd] hover:bg-[#155dfd] text-white px-5 py-2 rounded-xl shadow-lg font-semibold flex items-center space-x-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#155dfd]`}
        >
          <Plus className="h-4 w-4" />
          <span>Add New Slide</span>
        </button>
      </div>

      <div className={`rounded-xl border p-6 shadow-xl ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`rounded-2xl p-4 border shadow-lg hover:shadow-2xl transition-shadow duration-200 group ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                }`}
            >
              <div
                className={`h-32 rounded-xl mb-3 flex items-center justify-center ${isDarkMode ? 'bg-gray-600' : 'bg-gray-100'
                  }`}
              >
                <Image className={`h-8 w-8 ${isDarkMode ? 'text-[#155dfd]' : 'text-[#155dfd]'} group-hover:scale-110 transition-transform`} />
              </div>
              <h4 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                {slide.title}
              </h4>
              <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {slide.description}
              </p>
              <div className="flex space-x-2">
                <button
                  className={`bg-[#155dfd] hover:bg-[#155dfd] text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1 shadow hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#155dfd]`}
                >
                  <Edit className="h-3 w-3" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => deleteSlide(slide.id)}
                  className={`bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1 shadow hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-400`}
                >
                  <Trash2 className="h-3 w-3" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Slide Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className={`rounded-2xl p-8 w-full max-w-md shadow-2xl border ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'
              }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#155dfd]' : 'text-[#155dfd]'}`}>
                Add New Slide
              </h3>
              <button
                onClick={closeModal}
                className={`p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#155dfd]`}
              >
                <X className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Slide Title
                </label>
                <input
                  type="text"
                  value={newSlide.title}
                  onChange={(e) => setNewSlide({ ...newSlide, title: e.target.value })}
                  placeholder="Enter slide title"
                  className={`w-full px-3 py-2 rounded-lg border font-medium ${isDarkMode
                      ? 'bg-gray-700 text-gray-100 border-gray-600 focus:border-[#155dfd]'
                      : 'bg-white text-gray-800 border-gray-300 focus:border-[#155dfd]'
                    } focus:outline-none focus:ring-2 focus:ring-[#155dfd] transition-colors`}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Description
                </label>
                <textarea
                  value={newSlide.description}
                  onChange={(e) => setNewSlide({ ...newSlide, description: e.target.value })}
                  placeholder="Enter slide description"
                  rows={3}
                  className={`w-full px-3 py-2 rounded-lg border font-medium ${isDarkMode
                      ? 'bg-gray-700 text-gray-100 border-gray-600 focus:border-[#155dfd]'
                      : 'bg-white text-gray-800 border-gray-300 focus:border-[#155dfd]'
                    } focus:outline-none focus:ring-2 focus:ring-[#155dfd] transition-colors`}
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={addSlide}
                className={`flex-1 bg-[#155dfd] hover:bg-[#155dfd] text-white py-2 px-4 rounded-lg font-bold shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#155dfd]`}
              >
                Add Slide
              </button>
              <button
                onClick={closeModal}
                className={`flex-1 py-2 px-4 rounded-lg font-bold transition-all ${isDarkMode
                    ? 'bg-gray-600 hover:bg-gray-500 text-gray-100'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-[#155dfd]`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};