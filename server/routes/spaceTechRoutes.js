const express = require('express');
const router = express.Router();
const SpaceTech = require('../models/SpaceTech');

// Get all space tech items
router.get('/spacetech', async (req, res) => {
  try {
    const spaceTech = await SpaceTech.find();
    res.json(spaceTech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific space tech item
router.get('/spacetech/:id', async (req, res) => {
  try {
    const spaceTech = await SpaceTech.findById(req.params.id);
    if (!spaceTech) {
      return res.status(404).json({ message: 'Space tech item not found' });
    }
    res.json(spaceTech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new space tech item
router.post('/spacetech', async (req, res) => {
  const { name, description, category, launchDate, status, image } = req.body;
  
  try {
    const newSpaceTech = new SpaceTech({
      name,
      description,
      category,
      launchDate,
      status,
      image
    });
    
    const savedSpaceTech = await newSpaceTech.save();
    res.status(201).json(savedSpaceTech);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a space tech item
router.put('/spacetech/:id', async (req, res) => {
  try {
    const updatedSpaceTech = await SpaceTech.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSpaceTech) {
      return res.status(404).json({ message: 'Space tech item not found' });
    }
    res.json(updatedSpaceTech);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a space tech item
router.delete('/spacetech/:id', async (req, res) => {
  try {
    const deletedSpaceTech = await SpaceTech.findByIdAndDelete(req.params.id);
    if (!deletedSpaceTech) {
      return res.status(404).json({ message: 'Space tech item not found' });
    }
    res.json({ message: 'Space tech item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;