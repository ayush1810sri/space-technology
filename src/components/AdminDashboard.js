import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddCourse, setShowAddCourse] = useState(false);
  const navigate = useNavigate();

  // Check if user is admin (in a real app, this would be done server-side)
  const isAdmin = localStorage.getItem('userRole') === 'admin';

  // If not admin, redirect to login
  if (!isAdmin) {
    navigate('/auth');
    return null;
  }

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userRole');
      navigate('/auth');
    }
  };

  const handleAddCourseClick = () => {
    setShowAddCourse(true);
  };

  const closeAddCourse = () => {
    setShowAddCourse(false);
  };

  // Mock data
  const stats = [
    { title: 'Total Users', value: '1,242', change: '+12%' },
    { title: 'Active Courses', value: '24', change: '+3%' },
    { title: 'Student Projects', value: '68', change: '+8%' },
    { title: 'Revenue', value: '₹2.4L', change: '+15%' }
  ];

  const recentActivities = [
    { id: 1, user: 'Amit Sharma', action: 'Enrolled in Rocket Propulsion', time: '2 hours ago' },
    { id: 2, user: 'Priya Patel', action: 'Submitted Mars Mission Project', time: '4 hours ago' },
    { id: 3, user: 'Rohan Gupta', action: 'Completed Satellite Design Course', time: '1 day ago' },
    { id: 4, user: 'Sneha Reddy', action: 'Posted in Discussion Forum', time: '1 day ago' }
  ];

  const studentProjects = [
    { id: 1, title: 'CubeSat Atmospheric Analyzer', team: 'IIT Bombay', status: 'Under Review' },
    { id: 2, title: 'Mars Oxygen Generation System', team: 'IISc Bangalore', status: 'Approved' },
    { id: 3, title: 'Space Debris Tracking Network', team: 'IIT Madras', status: 'Pending' },
    { id: 4, title: 'Lunar Regolith 3D Printer', team: 'IIT Kharagpur', status: 'Under Review' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Admin Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                SpaceTech Admin
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Dashboard', 'Projects', 'Courses', 'Users'].map((item, index) => (
                  <button
                    key={item}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === ['overview', 'projects', 'courses', 'users'][index]
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={() => setActiveTab(['overview', 'projects', 'courses', 'users'][index])}
                  >
                    {item}
                  </button>
                ))}
                <button
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-300 mt-2">Manage your space technology platform</p>
          </motion.div>

          {activeTab === 'overview' && (
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
                  >
                    <h3 className="text-gray-400 text-sm font-medium mb-1">{stat.title}</h3>
                    <div className="flex items-baseline">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-green-400 text-sm ml-2">{stat.change}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activities and Projects */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
                >
                  <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start">
                        <div className="bg-gray-700 rounded-full p-2 mr-3">
                          <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">{activity.user}</p>
                          <p className="text-gray-400 text-sm">{activity.action}</p>
                          <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Student Projects */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
                >
                  <h2 className="text-xl font-bold mb-4">Student Projects</h2>
                  <div className="space-y-4">
                    {studentProjects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{project.title}</p>
                          <p className="text-gray-400 text-sm">{project.team}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          project.status === 'Approved' ? 'bg-green-900 text-green-300' :
                          project.status === 'Under Review' ? 'bg-yellow-900 text-yellow-300' :
                          'bg-gray-700 text-gray-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6">Student Projects Management</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Team</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Submitted</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {studentProjects.map((project) => (
                      <tr key={project.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium">{project.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">{project.team}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">2023-06-15</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            project.status === 'Approved' ? 'bg-green-900 text-green-300' :
                            project.status === 'Under Review' ? 'bg-yellow-900 text-yellow-300' :
                            'bg-gray-700 text-gray-300'
                          }`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            className="text-blue-400 hover:text-blue-300 mr-3"
                            onClick={() => console.log(`View project ${project.id}`)}
                          >
                            View
                          </button>
                          <button
                            className="text-yellow-400 hover:text-yellow-300 mr-3"
                            onClick={() => console.log(`Edit project ${project.id}`)}
                          >
                            Edit
                          </button>
                          <button
                            className="text-red-400 hover:text-red-300"
                            onClick={() => console.log(`Delete project ${project.id}`)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === 'courses' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6">Course Management</h2>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-400">Manage all courses available on the platform</p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg">
                  Add New Course
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                    <h3 className="font-bold text-lg mb-2">Space Mission Planning</h3>
                    <p className="text-gray-400 text-sm mb-4">End-to-end process of planning and executing space missions</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-400 font-bold">₹4,999</span>
                      <div className="flex space-x-2">
                        <button
                          className="text-yellow-400 hover:text-yellow-300"
                          onClick={() => console.log(`Edit course ${item}`)}
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button
                          className="text-red-400 hover:text-red-300"
                          onClick={() => console.log(`Delete course ${item}`)}
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6">User Management</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Joined</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {[
                      { id: 1, name: 'Amit Sharma', email: 'amit@iitb.ac.in', role: 'Student', joined: '2023-05-12', status: 'Active' },
                      { id: 2, name: 'Priya Patel', email: 'priya@iisc.ac.in', role: 'Student', joined: '2023-05-15', status: 'Active' },
                      { id: 3, name: 'Rohan Gupta', email: 'rohan@iitm.ac.in', role: 'Student', joined: '2023-05-18', status: 'Active' },
                      { id: 4, name: 'Sneha Reddy', email: 'sneha@isro.gov.in', role: 'Mentor', joined: '2023-04-22', status: 'Active' }
                    ].map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                <span className="font-medium">{user.name.charAt(0)}</span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium">{user.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">{user.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">{user.role}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">{user.joined}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            className="text-blue-400 hover:text-blue-300 mr-3"
                            onClick={() => console.log(`Edit user ${user.id}`)}
                          >
                            Edit
                          </button>
                          <button
                            className="text-red-400 hover:text-red-300"
                            onClick={() => console.log(`Delete user ${user.id}`)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;