import React, { useState } from 'react';
import { motion } from 'framer-motion';

const studentProjects = [
  {
    id: 1,
    title: "CubeSat Atmospheric Analyzer",
    team: "IIT Bombay",
    description: "A miniature satellite for real-time atmospheric composition analysis using advanced spectrometry",
    category: "Satellite Technology",
    status: "Prototype",
    image: "🛰️",
    access: {
      github: "https://github.com/iitb-cubesat",
      details: "This project focuses on developing a compact satellite capable of analyzing atmospheric composition in real-time. The system uses advanced spectrometry techniques to measure various gases and particles in the atmosphere.",
      teamMembers: ["Amit Sharma", "Priya Patel", "Rohan Gupta"],
      university: "Indian Institute of Technology, Bombay"
    }
  },
  {
    id: 2,
    title: "Mars Oxygen Generation System",
    team: "IISc Bangalore",
    description: "In-situ resource utilization system to produce oxygen from Martian atmosphere",
    category: "Life Support Systems",
    status: "Testing",
    image: "🌱",
    access: {
      github: "https://github.com/iisc-mars-oxygen",
      details: "This innovative system extracts oxygen from the Martian atmosphere, which is primarily composed of carbon dioxide. The technology is crucial for future manned missions to Mars.",
      teamMembers: ["Sneha Reddy", "Vikram Singh", "Anjali Mehta"],
      university: "Indian Institute of Science, Bangalore"
    }
  },
  {
    id: 3,
    title: "Space Debris Tracking Network",
    team: "IIT Madras",
    description: "AI-powered ground-based telescope network for tracking and predicting space debris trajectories",
    category: "Space Safety",
    status: "Development",
    image: "📡",
    access: {
      github: "https://github.com/iitmadras-debris-tracker",
      details: "Our AI-powered system uses a network of ground-based telescopes to track and predict the movement of space debris. This helps in preventing collisions with operational satellites.",
      teamMembers: ["Karan Kapoor", "Neha Verma", "Rajesh Iyer"],
      university: "Indian Institute of Technology, Madras"
    }
  },
  {
    id: 4,
    title: "Lunar Regolith 3D Printer",
    team: "IIT Kharagpur",
    description: "Construction system using lunar soil to build habitats and infrastructure",
    category: "Additive Manufacturing",
    status: "Prototype",
    image: "🖨️",
    access: {
      github: "https://github.com/iitkgp-lunar-printer",
      details: "This 3D printing system uses lunar regolith (moon soil) as raw material to construct habitats and infrastructure on the lunar surface, reducing the need to transport building materials from Earth.",
      teamMembers: ["Dev Roy", "Sunita Rao", "Aditya Kumar"],
      university: "Indian Institute of Technology, Kharagpur"
    }
  },
  {
    id: 5,
    title: "Bio-Reactor for Long-Duration Flights",
    team: "BITS Pilani",
    description: "Closed-loop biological system for food production during interplanetary missions",
    category: "Life Sciences",
    status: "Research",
    image: "🧫",
    access: {
      github: "https://github.com/bits-bioreactor",
      details: "Our bio-reactor system enables sustainable food production during long-duration space missions by creating a closed-loop ecosystem that recycles waste and produces nutritious food.",
      teamMembers: ["Rahul Jain", "Pooja Desai", "Manish Agarwal"],
      university: "Birla Institute of Technology and Science, Pilani"
    }
  },
  {
    id: 6,
    title: "Plasma Thruster for Small Satellites",
    team: "IIIT Hyderabad",
    description: "Miniaturized electric propulsion system for precise satellite positioning",
    category: "Propulsion",
    status: "Prototype",
    image: "⚡",
    access: {
      github: "https://github.com/iiith-plasma-thruster",
      details: "This miniaturized plasma thruster provides precise positioning control for small satellites. The system is highly efficient and extends the operational life of satellites in orbit.",
      teamMembers: ["Arjun Nair", "Shreya Krishnan", "Tushar Bhatia"],
      university: "International Institute of Information Technology, Hyderabad"
    }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const InnovationShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const openDetails = (project) => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectedProject(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Student Innovation Showcase
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Groundbreaking projects from students across India pushing the boundaries of space technology
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {studentProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-4xl">{project.image}</div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Prototype' ? 'bg-blue-900 text-blue-300' :
                project.status === 'Testing' ? 'bg-yellow-900 text-yellow-300' :
                project.status === 'Development' ? 'bg-purple-900 text-purple-300' :
                'bg-green-900 text-green-300'
              }`}>
                {project.status}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-1">{project.team}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {project.category}
              </span>
              <button 
                className="text-blue-400 hover:text-blue-300 font-medium"
                onClick={() => openDetails(project)}
              >
                View Details →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Details Modal */}
      {showDetails && selectedProject && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-4xl">{selectedProject.image}</div>
              <button 
                onClick={closeDetails}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-blue-400 mb-1">{selectedProject.team}</p>
            <p className="text-gray-300 mb-6">{selectedProject.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3">Project Details</h4>
              <p className="text-gray-300 mb-4">{selectedProject.access.details}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="font-bold text-gray-400 mb-2">University</h5>
                  <p className="text-gray-300">{selectedProject.access.university}</p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-400 mb-2">Category</h5>
                  <p className="text-gray-300">{selectedProject.category}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="font-bold text-gray-400 mb-2">Team Members</h5>
                <ul className="list-disc pl-5 text-gray-300">
                  {selectedProject.access.teamMembers.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a 
                href={selectedProject.access.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              <button 
                onClick={closeDetails}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold mb-6">Submit Your Innovation</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Are you working on a groundbreaking space technology project? Share it with the community and get feedback from experts.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
          Submit Project
        </button>
      </motion.div>
    </div>
  );
};

export default InnovationShowcase;