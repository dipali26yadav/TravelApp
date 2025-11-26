import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'

const DestinationDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const destination = destinations.find((d) => d.id === parseInt(id))

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Destination Not Found</h2>
          <Link to="/destinations" className="text-sky-600 hover:underline">
            Back to Destinations
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-6 flex items-center gap-2 text-white hover:text-sky-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </motion.button>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              {destination.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              {destination.location}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About This Destination</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {destination.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Experience the magic of {destination.name} with our carefully curated travel package. 
                  This destination offers a perfect blend of natural beauty, cultural richness, and 
                  unforgettable experiences that will create memories to last a lifetime.
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-sky-50 to-white rounded-lg"
                    >
                      <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-sky-50 to-white rounded-2xl shadow-lg p-8 sticky top-24"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-sky-600">${destination.price}</span>
                    <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                      <span className="text-yellow-600">⭐</span>
                      <span className="text-sm font-semibold text-yellow-800">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">per person</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Duration: {destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Location: {destination.location}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
                >
                  Book Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white border-2 border-sky-600 text-sky-600 py-4 rounded-lg font-semibold text-lg hover:bg-sky-50 transition-all duration-300"
                >
                  Add to Wishlist
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DestinationDetails

