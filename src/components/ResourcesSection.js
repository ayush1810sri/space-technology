import React, { useState } from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    id: 1,
    title: "Introduction to Rocket Propulsion",
    type: "Course",
    description: "Fundamentals of chemical and electric propulsion systems used in space vehicles",
    link: "#",
    category: "Propulsion",
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
    id: 2,
    title: "Satellite Design Principles",
    type: "Course",
    description: "Comprehensive guide to designing and building satellites for various missions",
    link: "#",
    category: "Satellites",
    access: {
      author: "ISRO Educational Team",
      institution: "Indian Space Research Organisation",
      duration: "6 weeks",
      level: "Intermediate",
      price: 4999,
      lessons: 18,
      certificate: "Yes"
    }
  },
  {
    id: 3,
    title: "Space Mission Planning",
    type: "Course",
    description: "End-to-end process of planning and executing space missions from concept to completion",
    link: "#",
    category: "Mission Design",
    access: {
      author: "Prof. K. Radhakrishnan",
      institution: "IIT Bombay",
      duration: "8 weeks",
      level: "Advanced",
      price: 7999,
      lessons: 24,
      certificate: "Yes"
    }
  },
  {
    id: 4,
    title: "Materials for Space Applications",
    type: "Course",
    description: "Advanced materials that can withstand the harsh conditions of space",
    link: "#",
    category: "Materials",
    access: {
      author: "Dr. A.P.J. Abdul Kalam",
      institution: "Defence Research and Development Organisation",
      duration: "5 weeks",
      level: "Intermediate",
      price: 5499,
      lessons: 15,
      certificate: "Yes"
    }
  },
  {
    id: 5,
    title: "Spacecraft Systems Engineering",
    type: "Course",
    description: "Comprehensive overview of systems engineering principles applied to spacecraft",
    link: "#",
    category: "Engineering",
    access: {
      author: "Dr. Ravi Prakash",
      institution: "ISRO",
      duration: "10 weeks",
      level: "Advanced",
      price: 9999,
      lessons: 30,
      certificate: "Yes"
    }
  },
  {
    id: 6,
    title: "Human Factors in Space",
    type: "Course",
    description: "Psychological and physiological considerations for human spaceflight",
    link: "#",
    category: "Life Sciences",
    access: {
      author: "Dr. Sunita Williams",
      institution: "NASA",
      duration: "3 weeks",
      level: "Beginner",
      price: 2499,
      lessons: 9,
      certificate: "Yes"
    }
  }
];

const categories = ["All", "Propulsion", "Satellites", "Mission Design", "Materials", "Engineering", "Life Sciences"];

const faqs = [
  {
    question: "What is the difference between chemical and electric propulsion?",
    answer: "Chemical propulsion produces high thrust for short durations using combustion, while electric propulsion provides low thrust but high efficiency over long periods using electrical energy."
  },
  {
    question: "How do satellites maintain their orbit?",
    answer: "Satellites use small thrusters for orbital corrections and maintain attitude through reaction wheels or thrusters. Gravity and orbital mechanics keep them in their path."
  },
  {
    question: "What materials can withstand space conditions?",
    answer: "Spacecraft use materials like titanium, carbon composites, and specialized alloys that resist radiation, extreme temperatures, and micrometeorite impacts."
  },
  {
    question: "How is power generated in space?",
    answer: "Most spacecraft use solar panels for power generation. Deep space missions may use radioisotope thermoelectric generators (RTGs) that convert heat from radioactive decay."
  }
];

const ResourcesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1); // 1: Select method, 2: Enter UPI, 3: Payment success
  const [upiId, setUpiId] = useState("");
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  const filteredResources = activeCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const openPaymentGateway = (resource) => {
    setSelectedResource(resource);
    setShowPayment(true);
    setPaymentStep(1);
    setUpiId("");
  };

  const closePaymentGateway = () => {
    setShowPayment(false);
    setSelectedResource(null);
    setPaymentStep(1);
    setUpiId("");
  };

  const handleUpiSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setPaymentStep(3); // Payment success
    // Add course to purchased courses
    setPurchasedCourses(prev => [...prev, selectedResource.id]);
    // Reset after 3 seconds
    setTimeout(() => {
      closePaymentGateway();
    }, 3000);
  };

  const isCoursePurchased = (courseId) => {
    return purchasedCourses.includes(courseId);
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
          Space Technology Courses
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Enroll in our specialized courses to advance your knowledge of space technology
        </p>
      </motion.div>

      {/* Resource Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full transition-all ${
              activeCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Resources Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {filteredResources.map((resource) => (
          <motion.div
            key={resource.id}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs font-semibold">
                {resource.type}
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                {resource.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
            <p className="text-gray-300 mb-4">{resource.description}</p>
            
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-bold text-blue-400">
                ₹{resource.access.price}
              </div>
              <div className="text-sm text-gray-400">
                {resource.access.lessons} lessons
              </div>
            </div>
            
            {isCoursePurchased(resource.id) ? (
              <button 
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Access Course
              </button>
            ) : (
              <button 
                onClick={() => openPaymentGateway(resource)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                Enroll Now
              </button>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Payment Gateway Modal */}
      {showPayment && selectedResource && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 max-w-md w-full"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Payment Gateway</h3>
              <button 
                onClick={closePaymentGateway}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {paymentStep === 1 && (
              <>
                <div className="mb-6">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold">{selectedResource.title}</h4>
                        <p className="text-gray-400 text-sm">{selectedResource.access.author}</p>
                      </div>
                      <div className="text-xl font-bold text-blue-400">
                        ₹{selectedResource.access.price}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-4">Select Payment Method</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setPaymentStep(2)}
                      className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="text-3xl mb-2">💰</div>
                      <span>Paytm</span>
                    </button>
                    <button 
                      onClick={() => setPaymentStep(2)}
                      className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="text-3xl mb-2">💳</div>
                      <span>Google Pay</span>
                    </button>
                    <button 
                      onClick={() => setPaymentStep(2)}
                      className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="text-3xl mb-2">📱</div>
                      <span>PhonePe</span>
                    </button>
                    <button 
                      onClick={() => setPaymentStep(2)}
                      className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="text-3xl mb-2">🔗</div>
                      <span>UPI</span>
                    </button>
                  </div>
                </div>
              </>
            )}
            
            {paymentStep === 2 && (
              <>
                <div className="mb-6">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold">{selectedResource.title}</h4>
                        <p className="text-gray-400 text-sm">{selectedResource.access.author}</p>
                      </div>
                      <div className="text-xl font-bold text-blue-400">
                        ₹{selectedResource.access.price}
                      </div>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleUpiSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2">Enter UPI ID</label>
                    <input 
                      type="text" 
                      placeholder="yourname@upi" 
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
                      required
                    />
                    <p className="text-gray-500 text-sm mt-2">Example: username@paytm, username@ybl, etc.</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      type="button"
                      onClick={() => setPaymentStep(1)}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
                    >
                      Pay Now
                    </button>
                  </div>
                </form>
              </>
            )}
            
            {paymentStep === 3 && (
              <div className="text-center py-8">
                <div className="text-5xl text-green-500 mb-4">✓</div>
                <h4 className="text-xl font-bold mb-2">Payment Successful!</h4>
                <p className="text-gray-300 mb-4">
                  You've successfully enrolled in {selectedResource.title}
                </p>
                <p className="text-gray-400">
                  You can now access the course content
                </p>
              </div>
            )}
            
            <div className="text-center text-gray-400 text-sm mt-6">
              <p>By proceeding, you agree to our Terms and Conditions</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left"
                onClick={() => toggleFaq(index)}
              >
                <h4 className="text-lg font-semibold">{faq.question}</h4>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {openFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center"
      >
        <h3 className="text-2xl font-bold mb-3">Stay Updated on Space Innovation</h3>
        <p className="text-gray-300 mb-6">
          Subscribe to our newsletter for the latest resources, student projects, and industry insights
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResourcesSection;