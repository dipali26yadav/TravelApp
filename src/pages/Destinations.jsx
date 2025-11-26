import { useState } from 'react'
import { motion } from 'framer-motion'
import DestinationGrid from '../components/DestinationGrid'
import SearchBar from '../components/SearchBar'
import { destinations } from '../data/destinations'

const Destinations = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)
  const [selectedFilter, setSelectedFilter] = useState('all')

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredDestinations(destinations)
      return
    }
    const filtered = destinations.filter(
      (dest) =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredDestinations(filtered)
  }

  const handleFilter = (filter) => {
    setSelectedFilter(filter)
    if (filter === 'all') {
      setFilteredDestinations(destinations)
    } else if (filter === 'budget') {
      setFilteredDestinations(destinations.filter((d) => d.price < 1200))
    } else if (filter === 'luxury') {
      setFilteredDestinations(destinations.filter((d) => d.price >= 1500))
    } else if (filter === 'popular') {
      setFilteredDestinations(destinations.filter((d) => d.rating >= 4.8))
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="gradient-bg py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Explore Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Discover amazing places around the world and find your perfect travel destination
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 -mt-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar onSearch={handleSearch} />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'popular', label: 'Popular' },
              { id: 'budget', label: 'Budget Friendly' },
              { id: 'luxury', label: 'Luxury' },
            ].map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => handleFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-sky-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      {filteredDestinations.length > 0 ? (
        <DestinationGrid destinations={filteredDestinations} title="All Destinations" />
      ) : (
        <section className="py-24 text-center">
          <p className="text-gray-600 text-xl">No destinations found. Try a different search.</p>
        </section>
      )}
    </div>
  )
}

export default Destinations

