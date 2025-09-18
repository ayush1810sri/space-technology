import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  {
    id: 1,
    title: "Satellite Technology",
    description: "Advanced satellites for communication, Earth observation, and navigation systems that enable global connectivity and environmental monitoring.",
    icon: "🛰️",
    applications: ["GPS Navigation", "Weather Forecasting", "Global Communications", "Earth Monitoring"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Rocket Propulsion",
    description: "Next-generation propulsion systems including reusable rockets and ion drives for efficient space travel and cargo transportation.",
    icon: "🚀",
    applications: ["Space Launches", "Satellite Deployment", "Interplanetary Travel", "Cargo Transport"],
    color: "from-red-500 to-orange-500"
  },
  {
    id: 3,
    title: "Spacecraft Engineering",
    description: "Innovative spacecraft design for deep space missions, planetary exploration, and human spaceflight with advanced life support systems.",
    icon: "🛸",
    applications: ["Planetary Rovers", "Space Stations", "Manned Missions", "Scientific Probes"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Space Telescopes",
    description: "Cutting-edge telescopes that observe the universe across the electromagnetic spectrum, revealing cosmic phenomena and exoplanets.",
    icon: "🔭",
    applications: ["Deep Space Observation", "Exoplanet Discovery", "Cosmic Radiation Study", "Galaxy Formation"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 5,
    title: "Space Habitats",
    description: "Modular living and working environments for long-duration missions, including space stations and lunar/Mars habitats.",
    icon: "🏠",
    applications: ["ISS Modules", "Lunar Bases", "Mars Colonies", "Deep Space Habitats"],
    color: "from-green-500 to-teal-500"
  },
  {
    id: 6,
    title: "Astrobiology Tools",
    description: "Specialized instruments for detecting signs of life beyond Earth and studying the potential for life in extreme environments.",
    icon: "🧬",
    applications: ["Life Detection", "Sample Analysis", "Extremophile Study", "Biosignature Identification"],
    color: "from-yellow-500 to-amber-500"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SpaceTechnologySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Space Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary innovations driving humanity's journey to the stars through engineering excellence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.id}
              variants={item}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-xl hover:border-blue-500 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tech.color}`}></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Applications:</h4>
                  <ul className="space-y-1">
                    {tech.applications.map((application, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 border border-blue-700 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Space Technology in Everyday Life</h3>
              <p className="text-gray-200">
                Space technology isn't just for astronauts and scientists. Innovations developed for space exploration 
                have transformed our daily lives through GPS navigation, satellite communications, weather forecasting, 
                and medical technologies originally designed for space missions.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-gray-800 rounded-full p-4">
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpaceTechnologySection;