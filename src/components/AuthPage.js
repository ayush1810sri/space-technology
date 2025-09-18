import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showSocialLogin, setShowSocialLogin] = useState(null); // null, 'google', 'facebook', 'github'
  const [socialId, setSocialId] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin && !isAdminLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Handle admin login separately
    if (isAdminLogin) {
      // In a real application, this would be an API call to verify admin credentials
      // For demo purposes, we'll use a predefined admin credential
      if (formData.email === 'admin2004@gmail.com' && formData.password === 'admin123') {
        // Simulate API call
        setTimeout(() => {
          if (setIsAuthenticated) {
            setIsAuthenticated(true, 'admin');
          } else {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userRole', 'admin');
            navigate('/admin');
          }
        }, 1000);
      } else {
        setErrors({ email: 'Invalid admin credentials' });
      }
      return;
    }
    
    // Simulate API call for regular user
    setTimeout(() => {
      if (setIsAuthenticated) {
        setIsAuthenticated(true, 'user');
      } else {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', 'user');
        navigate('/');
      }
    }, 1000);
  };

  // Handle social login
  const handleSocialLogin = (provider) => {
    setShowSocialLogin(provider);
    setSocialId('');
  };

  // Submit social login
  const submitSocialLogin = (e) => {
    e.preventDefault();
    if (socialId.trim()) {
      console.log(`Logging in with ${showSocialLogin} ID: ${socialId}`);
      // Simulate successful login
      setTimeout(() => {
        if (setIsAuthenticated) {
          setIsAuthenticated(true, 'user');
        } else {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userRole', 'user');
          navigate('/');
        }
        setShowSocialLogin(null);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      ))}
      
      {/* Planet-like elements */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-20 blur-xl"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: '15%',
          left: '10%',
        }}
      />
      
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-purple-900 to-pink-900 opacity-20 blur-xl"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: '75%',
          right: '10%',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl backdrop-blur-sm bg-opacity-90 relative z-10"
      >
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-3"
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </motion.div>
          <h2 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            SpaceTech Academy
          </h2>
          <p className="text-gray-400 text-sm">
            {isAdminLogin ? 'Administrator Portal' : isLogin ? 'Sign in to your account' : 'Create a new account'}
          </p>
        </div>
        
        {!showSocialLogin ? (
          <>
            {!isAdminLogin && (
              <div className="flex justify-center mb-4">
                <div className="bg-gray-800 rounded-lg p-1 flex">
                  <button
                    className={`px-3 py-1.5 text-xs rounded-md transition-all duration-300 ${
                      isLogin 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={() => setIsLogin(true)}
                  >
                    Sign In
                  </button>
                  <button
                    className={`px-3 py-1.5 text-xs rounded-md transition-all duration-300 ${
                      !isLogin 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && !isAdminLogin && (
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1 text-sm">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700 border text-sm ${
                        errors.name ? 'border-red-500' : 'border-gray-600'
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1 text-sm">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700 border text-sm ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                {isAdminLogin && (
                  <p className="text-gray-500 text-xs mt-1">Demo admin: admin@spacetech.com / admin123</p>
                )}
              </div>
              
              <div>
                <label htmlFor="password" className="block text-gray-300 mb-1 text-sm">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700 border text-sm ${
                      errors.password ? 'border-red-500' : 'border-gray-600'
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
              
              {!isLogin && !isAdminLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-300 mb-1 text-sm">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700 border text-sm ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-600'
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      placeholder="Confirm your password"
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>
              )}
              
              {isLogin && !isAdminLogin && (
                <div className="flex justify-between items-center">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded bg-gray-700 border-gray-600" />
                    <span className="ml-2 text-gray-400 text-sm">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Forgot password?</a>
                </div>
              )}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 rounded-lg transition-all duration-300 flex items-center justify-center text-sm"
              >
                {isAdminLogin ? 'Admin Login' : isLogin ? 'Sign In' : 'Sign Up'}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </form>
            
            {!isAdminLogin && (
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            )}
            
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsAdminLogin(!isAdminLogin)}
                className="text-gray-400 hover:text-gray-300 text-xs flex items-center justify-center"
              >
                {isAdminLogin ? (
                  <>
                    <svg className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to user login
                  </>
                ) : (
                  <>
                    Login as Administrator
                    <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </div>
            
            {!isAdminLogin && (
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSocialLogin('google')}
                    className="w-full flex items-center justify-center py-2 px-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                  >
                    <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.24 10.285v3.29h5.456c-.323 1.685-1.283 2.967-2.8 3.85-1.369.801-3.016 1.17-4.65 1.17-3.626 0-6.78-2.85-6.78-6.626 0-3.776 3.154-6.627 6.78-6.627 1.927 0 3.488.744 4.65 1.94l3.41-3.41c-2.13-1.987-4.95-3.17-8.05-3.17-6.52 0-11.82 5.302-11.82 11.82s5.3 11.82 11.82 11.82c6.16 0 10.82-4.416 11.62-10.22h-11.62v.01z"/>
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSocialLogin('facebook')}
                    className="w-full flex items-center justify-center py-2 px-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                  >
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSocialLogin('github')}
                    className="w-full flex items-center justify-center py-2 px-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                  >
                    <svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 20h-4v-9h4v9zm-2-11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm12 11.5h-4v-7c0-1.657-1.343-3-3-3s-3 1.343-3 3v7h-4v-9h4v1.5c.667-1 1.8-1.5 3-1.5s2.333.5 3 1.5v-1.5h4v9z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            )}
          </>
        ) : (
          // Social login ID input
          <div>
            <div className="flex items-center mb-4">
              <button 
                onClick={() => setShowSocialLogin(null)}
                className="mr-2 text-gray-400 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <h3 className="text-lg font-bold">
                {showSocialLogin === 'google' && 'Google'} 
                {showSocialLogin === 'facebook' && 'Facebook'} 
                {showSocialLogin === 'github' && 'GitHub'} Login
              </h3>
            </div>
            
            <p className="text-gray-400 text-sm mb-4">
              Please enter your {showSocialLogin} ID to continue
            </p>
            
            <form onSubmit={submitSocialLogin} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1 text-sm">
                  {showSocialLogin === 'google' && 'Google'} 
                  {showSocialLogin === 'facebook' && 'Facebook'} 
                  {showSocialLogin === 'github' && 'GitHub'} ID
                </label>
                <input
                  type="text"
                  value={socialId}
                  onChange={(e) => setSocialId(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
                  placeholder={`Enter your ${showSocialLogin} ID`}
                  required
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 rounded-lg transition-all duration-300 text-sm"
              >
                Continue with {showSocialLogin === 'google' && 'Google'} 
                {showSocialLogin === 'facebook' && 'Facebook'} 
                {showSocialLogin === 'github' && 'GitHub'}
              </motion.button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AuthPage;