import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const DestinationCard = ({ destination, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden card-shadow group"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <span className="text-yellow-500">⭐</span>
          <span className="text-sm font-semibold text-gray-800">{destination.rating}</span>
        </div>

        {/* Location Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-gray-800">{destination.location}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors duration-300">
          {destination.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{destination.duration}</span>
          </div>
          <div className="text-2xl font-bold text-sky-600">
            ${destination.price}
          </div>
        </div>

        <Link to={`/destinations/${destination.id}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default DestinationCard

