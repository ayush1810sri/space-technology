import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import SpaceTechnologySection from './components/SpaceTechnologySection';
import TimelineSection from './components/TimelineSection';
import MissionSimulator from './components/MissionSimulator';
import InnovationShowcase from './components/InnovationShowcase';
import ResourcesSection from './components/ResourcesSection';
import AuthPage from './components/AuthPage';
import AdminDashboard from './components/AdminDashboard';
import SpaceHomePage from './components/SpaceHomePage';
import Footer from './components/Footer';

// Create a component that handles navigation and authentication
const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is authenticated (in a real app, this would check a token)
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const role = localStorage.getItem('userRole');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      setUserRole(role || 'user');
    }
  }, []);

  // Handle authentication
  const handleAuthentication = (status, role = 'user') => {
    setIsAuthenticated(status);
    setUserRole(role);
    localStorage.setItem('isAuthenticated', status);
    localStorage.setItem('userRole', role);
    if (status) {
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      navigate('/auth');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    navigate('/auth');
  };

  // Check URL hash to directly navigate to a section
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash === 'simulator') {
      setActiveSection('simulator');
    } else if (hash === 'innovation') {
      setActiveSection('innovation');
    } else if (hash === 'resources') {
      setActiveSection('resources');
    }
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'simulator':
        return <MissionSimulator />;
      case 'innovation':
        return <InnovationShowcase />;
      case 'resources':
        return <ResourcesSection />;
      default:
        return (
          <>
            <SpaceHomePage />
            <SpaceTechnologySection />
            <TimelineSection />
          </>
        );
    }
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    // Update URL hash for direct navigation
    window.location.hash = section;
  };

  // If not authenticated and not on auth page, redirect to auth
  if (!isAuthenticated && location.pathname !== '/auth' && !location.pathname.startsWith('/admin')) {
    return <AuthPage setIsAuthenticated={handleAuthentication} />;
  }

  // If authenticated and on auth page, redirect appropriately
  if (isAuthenticated && location.pathname === '/auth') {
    if (userRole === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  }

  // Admin routing
  if (userRole === 'admin' && location.pathname !== '/admin' && !location.pathname.startsWith('/admin/')) {
    navigate('/admin');
  }

  // User routing
  if (userRole === 'user' && location.pathname.startsWith('/admin')) {
    navigate('/');
  }

  // Render admin dashboard if admin
  if (userRole === 'admin') {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      {isAuthenticated && userRole === 'user' && (
        <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div 
                className="flex-shrink-0 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  SpaceTech Innovation
                </span>
              </motion.div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {['Home', 'Mission Simulator', 'Innovation', 'Resources'].map((item, index) => (
                    <motion.button
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        activeSection === ['home', 'simulator', 'innovation', 'resources'][index]
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                      onClick={() => handleNavClick(['home', 'simulator', 'innovation', 'resources'][index])}
                    >
                      {item}
                    </motion.button>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Dynamic Content Section */}
      {isAuthenticated && userRole === 'user' && (
        <section className="pt-16">
          {renderSection()}
        </section>
      )}

      {/* Footer */}
      {isAuthenticated && userRole === 'user' && <Footer />}
    </div>
  );
};

// Main App component with Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;