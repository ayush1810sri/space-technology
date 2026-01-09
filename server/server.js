const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const spaceTechRoutes = require('./routes/spaceTechRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', spaceTechRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Space Tech API is running!' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/spacetech', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});