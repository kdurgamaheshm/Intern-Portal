const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/intern-portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  referralCode: String,
  donationsRaised: Number,
  rewards: [String]
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/api/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/leaderboard', async (req, res) => {
  try {
    const users = await User.find().sort({ donationsRaised: -1 }).limit(10);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Seed data
app.post('/api/seed', async (req, res) => {
  try {
    await User.deleteMany({});
    
    const users = [
      {
        name: 'K Durga Mahesh',
        email: 'mahesh@gmail.com',
        referralCode: 'mahesh2023',
        donationsRaised: 1500,
        rewards: ['Bronze Badge', 'Silver Badge']
      },
      {
        name: 'Siva Sankar',
        email: 'Sankar@gmail.com',
        referralCode: 'sankar123',
        donationsRaised: 2200,
        rewards: ['Bronze Badge', 'Silver Badge', 'Gold Badge']
      },
      {
        name: 'Danush',
        email: 'danush@gmail.com',
        referralCode: 'danush2022',
        donationsRaised: 800,
        rewards: ['Bronze Badge']
      }
    ];
    
    const createdUsers = await User.insertMany(users);
    res.json(createdUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
