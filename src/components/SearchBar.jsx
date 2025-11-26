import { useState } from 'react'
import { motion } from 'framer-motion'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchTerm)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-2xl shadow-xl p-4 sm:p-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Where to?
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search destinations..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-800"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check in
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-800"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check out
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-800"
              />
            </div>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-end bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Search
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}

export default SearchBar

