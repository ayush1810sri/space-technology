import React from 'react';
import { motion } from 'framer-motion';

const SpaceHomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      {/* Stars */}
      {[...Array(150)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          animate={{
            opacity: [0.2, Math.random() * 0.8 + 0.2, 0.2],
            scale: [1, Math.random() * 0.5 + 0.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}
        />
      ))}

      {/* Planets */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-20 blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: '15%',
          left: '5%',
        }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-purple-900 to-pink-900 opacity-20 blur-xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: '60%',
          right: '10%',
        }}
      />

      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-green-900 to-teal-900 opacity-20 blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: '70%',
          left: '15%',
        }}
      />

      {/* Orbiting satellites */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-yellow-500/50"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          top: '40%',
          left: '20%',
        }}
      />

      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 shadow-lg shadow-green-500/50"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          top: '30%',
          right: '25%',
        }}
      />

      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`shooting-star-${i}`}
          className="absolute w-40 h-0.5 bg-gradient-to-r from-white to-transparent"
          initial={{ 
            x: -100, 
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{ 
            x: window.innerWidth + 100, 
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatDelay: Math.random() * 10 + 5,
          }}
          style={{
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Nebula effect */}
      <motion.div
        className="absolute w-full h-full opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #4f46e5, transparent 20%), 
                            radial-gradient(circle at 80% 20%, #7c3aed, transparent 20%)`,
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-4xl mt-8"
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Space Technology
            </span>
            <span className="block text-2xl md:text-3xl font-normal mt-4 text-gray-300">
              Pioneering the Future of Space Exploration
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Empowering student innovators to advance the frontiers of space exploration through 
            cutting-edge engineering principles in the design, development, manufacture, and operation 
            of devices and systems for space travel and discovery.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.hash = 'simulator'}
            >
              Launch Mission Simulator
            </motion.button>
            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.hash = 'innovation'}
            >
              Explore Innovations
            </motion.button>
          </motion.div>
          
          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: "🚀", title: "Mission Planning", desc: "Design and simulate space missions" },
              { icon: "🧬", title: "Technology Hub", desc: "Explore cutting-edge space tech" },
              { icon: "🎓", title: "Student Projects", desc: "Showcase innovative solutions" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                whileHover={{ y: -10, borderColor: "#60a5fa" }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default SpaceHomePage;