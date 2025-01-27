const User = require('../models/user');
const ClaimHistory = require('../models/claimHistory');
const generateRandomPoints = require('../utils/randomPoints');

// Fetch all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

// Add a new user
exports.addUser = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = new User({ name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error adding user' });
  }
};


exports.claimPoints = async (req, res) => {
  try {
    const { userId } = req.params;
    const points = generateRandomPoints();

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user's points
    user.totalPoints += points;
    await user.save();

    // Record the claim in history
    const claimHistory = new ClaimHistory({ userId, points });
    await claimHistory.save();

    res.json({ message: 'Points claimed successfully', points });
  } catch (error) {
    res.status(500).json({ error: 'Error claiming points' });
  }
};
