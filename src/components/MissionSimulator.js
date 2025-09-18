import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MissionSimulator = () => {
  const [missionType, setMissionType] = useState('moon');
  const [payloadType, setPayloadType] = useState('satellite');
  const [propulsionType, setPropulsionType] = useState('chemical');
  const [result, setResult] = useState(null);

  const missionData = {
    moon: {
      name: "Lunar Mission",
      description: "A journey to Earth's natural satellite",
      duration: "3 days",
      distance: "384,400 km",
      difficulty: "Medium"
    },
    mars: {
      name: "Mars Mission",
      description: "An expedition to the Red Planet",
      duration: "6-9 months",
      distance: "54.6 million km",
      difficulty: "Hard"
    },
    asteroid: {
      name: "Asteroid Belt Mission",
      description: "Exploring the rocky remnants of the early solar system",
      duration: "2-3 years",
      distance: "2.2-4.2 AU",
      difficulty: "Expert"
    }
  };

  const payloadData = {
    satellite: {
      name: "Communications Satellite",
      mass: "5,000 kg",
      purpose: "Global communications and internet"
    },
    rover: {
      name: "Planetary Rover",
      mass: "1,000 kg",
      purpose: "Surface exploration and sample collection"
    },
    habitat: {
      name: "Habitat Module",
      mass: "15,000 kg",
      purpose: "Human habitation in space"
    }
  };

  const propulsionData = {
    chemical: {
      name: "Chemical Rockets",
      efficiency: "High thrust, low efficiency",
      fuel: "Liquid hydrogen/oxygen"
    },
    ion: {
      name: "Ion Drives",
      efficiency: "Low thrust, high efficiency",
      fuel: "Xenon gas"
    },
    nuclear: {
      name: "Nuclear Thermal",
      efficiency: "Very high efficiency",
      fuel: "Uranium-235"
    }
  };

  const simulateMission = () => {
    const selectedMission = missionData[missionType];
    const selectedPayload = payloadData[payloadType];
    const selectedPropulsion = propulsionData[propulsionType];
    
    const successRate = Math.floor(Math.random() * 40) + 60; // 60-99% success rate
    
    setResult({
      mission: selectedMission,
      payload: selectedPayload,
      propulsion: selectedPropulsion,
      successRate,
      recommendation: successRate > 80 
        ? "Mission is highly likely to succeed with current configuration" 
        : successRate > 60 
          ? "Mission has moderate chance of success - consider adjustments" 
          : "Mission is risky - significant modifications recommended"
    });
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
          Space Mission Simulator
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Design your own space mission and see how likely it is to succeed
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Mission Configuration</h3>
          
          <div className="space-y-6">
            {/* Mission Type */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Destination</h4>
              <div className="grid grid-cols-3 gap-3">
                {Object.keys(missionData).map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-3 rounded-lg transition-all ${
                      missionType === type
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    onClick={() => setMissionType(type)}
                  >
                    {missionData[type].name}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Payload */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Payload</h4>
              <div className="grid grid-cols-3 gap-3">
                {Object.keys(payloadData).map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-3 rounded-lg transition-all ${
                      payloadType === type
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    onClick={() => setPayloadType(type)}
                  >
                    {payloadData[type].name}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Propulsion */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Propulsion System</h4>
              <div className="grid grid-cols-3 gap-3">
                {Object.keys(propulsionData).map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-3 rounded-lg transition-all ${
                      propulsionType === type
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    onClick={() => setPropulsionType(type)}
                  >
                    {propulsionData[type].name}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-lg"
              onClick={simulateMission}
            >
              Launch Simulation
            </motion.button>
          </div>
        </motion.div>
        
        {/* Results Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Mission Analysis</h3>
          
          {result ? (
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-5">
                <h4 className="text-xl font-bold mb-3 text-center">{result.mission.name}</h4>
                <p className="text-gray-300 text-center mb-4">{result.mission.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="text-gray-400">Distance</p>
                    <p className="font-semibold">{result.mission.distance}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="text-gray-400">Duration</p>
                    <p className="font-semibold">{result.mission.duration}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="text-gray-400">Difficulty</p>
                    <p className="font-semibold">{result.mission.difficulty}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="text-gray-400">Success Rate</p>
                    <p className={`font-bold text-xl ${
                      result.successRate > 80 ? 'text-green-400' : 
                      result.successRate > 60 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {result.successRate}%
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-5">
                <h4 className="text-xl font-bold mb-3">Configuration</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400">Payload: {result.payload.name}</p>
                    <p className="text-sm text-gray-300">Mass: {result.payload.mass} | Purpose: {result.payload.purpose}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Propulsion: {result.propulsion.name}</p>
                    <p className="text-sm text-gray-300">Efficiency: {result.propulsion.efficiency} | Fuel: {result.propulsion.fuel}</p>
                  </div>
                </div>
              </div>
              
              <div className={`rounded-xl p-5 ${
                result.successRate > 80 ? 'bg-green-900 bg-opacity-30 border border-green-700' : 
                result.successRate > 60 ? 'bg-yellow-900 bg-opacity-30 border border-yellow-700' : 
                'bg-red-900 bg-opacity-30 border border-red-700'
              }`}>
                <h4 className="text-xl font-bold mb-2">Mission Advisor</h4>
                <p>{result.recommendation}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <p className="text-gray-400">Configure your mission parameters and launch the simulation</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MissionSimulator;