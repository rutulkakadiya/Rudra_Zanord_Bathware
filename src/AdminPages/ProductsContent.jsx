import React, { useState } from 'react'
import { Package, Plus, Edit, Trash2, Image as ImageIcon, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export const ProductsContent = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Electronics', price: '$99.99', image: null },
    { id: 2, name: 'Product 2', category: 'Fashion', price: '$49.99', image: null },
    { id: 3, name: 'Product 3', category: 'Home & Garden', price: '$199.99', image: null }
  ])

  const [showModal, setShowModal] = useState(false)
  const [newProduct, setNewProduct] = useState({ name: '', category: 'Electronics', price: '' })
  const { isDarkMode } = useTheme()

  const categories = ['Electronics', 'Fashion', 'Home & Garden', 'Sports']

  const addProduct = () => {
    if (newProduct.name.trim() && newProduct.price.trim()) {
      setProducts([...products, { ...newProduct, id: products.length + 1, name: newProduct.name.trim(), price: newProduct.price.trim() }])
      setNewProduct({ name: '', category: 'Electronics', price: '' })
      setShowModal(false)
    }
  }

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const closeModal = () => {
    setShowModal(false)
    setNewProduct({ name: '', category: 'Electronics', price: '' })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Products Management
        </h2>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-[#155dfd] hover:bg-[#155dfd] text-white px-5 py-2 rounded-xl shadow-lg font-semibold flex items-center space-x-2 transition-all duration-200 focus:ring-2 focus:ring-[#155dfd]"
        >
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </button>
      </div>

      <div className={`rounded-xl border shadow-xl p-6 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}> 
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className={`flex items-center justify-between p-4 rounded-2xl border shadow-lg hover:shadow-2xl transition-shadow duration-200 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
              <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                <ImageIcon className="h-5 w-5 text-[#155dfd]" />
              </div>
              <div>
                <span className={`font-bold text-lg ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{product.name}</span>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{product.category} • {product.price}</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-[#155dfd] hover:bg-[#155dfd] text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1 shadow hover:shadow-md transition-all focus:ring-2 focus:ring-[#155dfd]">
                  <Edit className="h-3 w-3" />
                  <span>Edit</span>
                </button>
                <button 
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1 shadow hover:shadow-md transition-all focus:ring-2 focus:ring-red-400"
                >
                  <Trash2 className="h-3 w-3" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`rounded-2xl p-8 w-full max-w-lg shadow-2xl border ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#155dfd]' : 'text-[#155dfd]'}`}>
                Add New Product
              </h3>
              <button
                onClick={closeModal}
                className={`p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors`}
              >
                <X className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  placeholder="Enter product name"
                  className={`w-full px-3 py-2 rounded-lg border font-medium ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600 focus:border-[#155dfd]' : 'bg-white text-gray-800 border-gray-300 focus:border-[#155dfd]'} focus:outline-none focus:ring-2 focus:ring-[#155dfd] transition-colors`}
                  onKeyPress={(e) => e.key === 'Enter' && addProduct()}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Category</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border font-medium ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600 focus:border-[#155dfd]' : 'bg-white text-gray-800 border-gray-300 focus:border-[#155dfd]'} focus:outline-none focus:ring-2 focus:ring-[#155dfd] transition-colors`}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Price</label>
                <input
                  type="text"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                  placeholder="Enter price"
                  className={`w-full px-3 py-2 rounded-lg border font-medium ${isDarkMode ? 'bg-gray-700 text-gray-100 border-gray-600 focus:border-[#155dfd]' : 'bg-white text-gray-800 border-gray-300 focus:border-[#155dfd]'} focus:outline-none focus:ring-2 focus:ring-[#155dfd] transition-colors`}
                  onKeyPress={(e) => e.key === 'Enter' && addProduct()}
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={addProduct}
                className="flex-1 bg-[#155dfd] hover:bg-[#155dfd] text-white py-2 px-4 rounded-lg font-bold shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#155dfd]"
              >
                Add Product
              </button>
              <button
                onClick={closeModal}
                className={`flex-1 py-2 px-4 rounded-lg font-bold transition-all ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500 text-gray-100' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} focus:outline-none focus:ring-2 focus:ring-[#155dfd]`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
