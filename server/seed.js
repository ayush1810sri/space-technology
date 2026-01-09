const mongoose = require('mongoose');
require('dotenv').config();

// Import the SpaceTech model
const SpaceTech = require('./models/SpaceTech');

// Sample data to seed the database
const sampleSpaceTechData = [
  {
    name: "CubeSat Atmospheric Analyzer",
    description: "A miniature satellite for real-time atmospheric composition analysis using advanced spectrometry",
    category: "Satellite Technology",
    launchDate: new Date("2023-06-15"),
    status: "Prototype",
    image: "🛰️",
    team: "IIT Bombay",
    access: {
      github: "https://github.com/iitb-cubesat",
      details: "This project focuses on developing a compact satellite capable of analyzing atmospheric composition in real-time. The system uses advanced spectrometry techniques to measure various gases and particles in the atmosphere.",
      teamMembers: ["Amit Sharma", "Priya Patel", "Rohan Gupta"],
      university: "Indian Institute of Technology, Bombay"
    }
  },
  {
    name: "Mars Oxygen Generation System",
    description: "In-situ resource utilization system to produce oxygen from Martian atmosphere",
    category: "Life Support Systems",
    launchDate: new Date("2023-08-22"),
    status: "Testing",
    image: "🌱",
    team: "IISc Bangalore",
    access: {
      github: "https://github.com/iisc-mars-oxygen",
      details: "This innovative system extracts oxygen from the Martian atmosphere, which is primarily composed of carbon dioxide. The technology is crucial for future manned missions to Mars.",
      teamMembers: ["Sneha Reddy", "Vikram Singh", "Anjali Mehta"],
      university: "Indian Institute of Science, Bangalore"
    }
  },
  {
    name: "Space Debris Tracking Network",
    description: "AI-powered ground-based telescope network for tracking and predicting space debris trajectories",
    category: "Space Safety",
    launchDate: new Date("2023-09-10"),
    status: "Development",
    image: "📡",
    team: "IIT Madras",
    access: {
      github: "https://github.com/iitmadras-debris-tracker",
      details: "Our AI-powered system uses a network of ground-based telescopes to track and predict the movement of space debris. This helps in preventing collisions with operational satellites.",
      teamMembers: ["Karan Kapoor", "Neha Verma", "Rajesh Iyer"],
      university: "Indian Institute of Technology, Madras"
    }
  },
  {
    name: "Lunar Regolith 3D Printer",
    description: "Construction system using lunar soil to build habitats and infrastructure",
    category: "Additive Manufacturing",
    launchDate: new Date("2023-07-05"),
    status: "Prototype",
    image: "🖨️",
    team: "IIT Kharagpur",
    access: {
      github: "https://github.com/iitkgp-lunar-printer",
      details: "This 3D printing system uses lunar regolith (moon soil) as raw material to construct habitats and infrastructure on the lunar surface, reducing the need to transport building materials from Earth.",
      teamMembers: ["Dev Roy", "Sunita Rao", "Aditya Kumar"],
      university: "Indian Institute of Technology, Kharagpur"
    }
  },
  {
    name: "Bio-Reactor for Long-Duration Flights",
    description: "Closed-loop biological system for food production during interplanetary missions",
    category: "Life Sciences",
    launchDate: new Date("2023-10-18"),
    status: "Research",
    image: "🧫",
    team: "BITS Pilani",
    access: {
      github: "https://github.com/bits-bioreactor",
      details: "Our bio-reactor system enables sustainable food production during long-duration space missions by creating a closed-loop ecosystem that recycles waste and produces nutritious food.",
      teamMembers: ["Rahul Jain", "Pooja Desai", "Manish Agarwal"],
      university: "Birla Institute of Technology and Science, Pilani"
    }
  },
  {
    name: "Plasma Thruster for Small Satellites",
    description: "Miniaturized electric propulsion system for precise satellite positioning",
    category: "Propulsion",
    launchDate: new Date("2023-05-30"),
    status: "Prototype",
    image: "⚡",
    team: "IIIT Hyderabad",
    access: {
      github: "https://github.com/iiith-plasma-thruster",
      details: "This miniaturized plasma thruster provides precise positioning control for small satellites. The system is highly efficient and extends the operational life of satellites in orbit.",
      teamMembers: ["Arjun Nair", "Shreya Krishnan", "Tushar Bhatia"],
      university: "International Institute of Information Technology, Hyderabad"
    }
  },
  {
    name: "Introduction to Rocket Propulsion",
    description: "Fundamentals of chemical and electric propulsion systems used in space vehicles",
    category: "Propulsion",
    launchDate: new Date("2023-01-15"),
    status: "Active",
    image: "🚀",
    team: "Course",
    access: {
      author: "Dr. Satish Dhawan",
      institution: "Indian Institute of Space Science and Technology",
      duration: "4 weeks",
      level: "Beginner",
      price: 2999,
      lessons: 12,
      certificate: "Yes"
    }
  },
  {
    name: "Satellite Design Principles",
    description: "Comprehensive guide to designing and building satellites for various missions",
    category: "Satellites",
    launchDate: new Date("2023-02-20"),
    status: "Active",
    image: "🛰️",
    team: "Course",
    access: {
      author: "ISRO Educational Team",
      institution: "Indian Space Research Organisation",
      duration: "6 weeks",
      level: "Intermediate",
      price: 4999,
      lessons: 18,
      certificate: "Yes"
    }
  }
];

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/spacetech');
    console.log('Connected to MongoDB');

    // Clear existing data
    await SpaceTech.deleteMany();
    console.log('Cleared existing data');

    // Insert sample data
    await SpaceTech.insertMany(sampleSpaceTechData);
    console.log('Sample data inserted successfully');

    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();