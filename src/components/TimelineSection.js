import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: "1957",
    title: "First Artificial Satellite",
    description: "Sputnik 1 launched by the Soviet Union, beginning the space age",
    significance: "Marked the beginning of the space race and demonstrated that space exploration was possible"
  },
  {
    year: "1961",
    title: "First Human in Space",
    description: "Yuri Gagarin becomes the first human to orbit Earth",
    significance: "Proved that humans could survive in space and opened the door for manned space exploration"
  },
  {
    year: "1969",
    title: "First Moon Landing",
    description: "Apollo 11 lands on the Moon with humans for the first time",
    significance: "Achieved humanity's greatest technological feat, demonstrating advanced engineering capabilities"
  },
  {
    year: "1990",
    title: "Hubble Space Telescope",
    description: "Launched to provide unprecedented views of the universe",
    significance: "Revolutionized our understanding of the cosmos and demonstrated the value of space-based observation"
  },
  {
    year: "1998",
    title: "International Space Station",
    description: "Assembly begins on the largest spacecraft ever built",
    significance: "Created a permanent human presence in space and enabled international cooperation in space"
  },
  {
    year: "2021",
    title: "Mars Helicopter Flight",
    description: "Ingenuity becomes the first aircraft to fly on another planet",
    significance: "Demonstrated powered flight in an alien atmosphere, opening new possibilities for planetary exploration"
  }
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Space Exploration Milestones
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Key achievements that have shaped our journey beyond Earth through engineering innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-1 px-4 rounded-full mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-200 mb-3">{milestone.description}</p>
                <p className="text-blue-300 italic">{milestone.significance}</p>
              </div>
              
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10">
                <div className="w-6 h-6 rounded-full bg-gray-900"></div>
              </div>
              
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">The Future of Space Technology</h3>
          <p className="text-gray-100 max-w-3xl mx-auto">
            As we look to the future, emerging technologies like reusable rockets, space-based solar power, 
            asteroid mining, and interplanetary travel are becoming realities. The next generation of engineers 
            and innovators will play a crucial role in shaping humanity's expansion into the cosmos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;