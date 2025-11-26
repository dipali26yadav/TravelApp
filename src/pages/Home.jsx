import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import DestinationGrid from '../components/DestinationGrid'
import { destinations } from '../data/destinations'

const Home = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations.slice(0, 4))

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredDestinations(destinations.slice(0, 4))
      return
    }
    const filtered = destinations.filter(
      (dest) =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredDestinations(filtered)
  }

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Search Section */}
      <section className="py-12 md:py-16 -mt-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Popular Destinations */}
      <DestinationGrid destinations={filteredDestinations} />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose TravelApp?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We make travel planning simple, affordable, and unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌍',
                title: 'Worldwide Destinations',
                description: 'Explore thousands of destinations across the globe with our curated selection.',
              },
              {
                icon: '💰',
                title: 'Best Prices',
                description: 'Get the best deals and prices guaranteed. No hidden fees, ever.',
              },
              {
                icon: '⭐',
                title: '24/7 Support',
                description: 'Our travel experts are available around the clock to assist you.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl card-shadow text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who trust us for their adventures
            </p>
            <motion.a
              href="/destinations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Explore All Destinations
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

