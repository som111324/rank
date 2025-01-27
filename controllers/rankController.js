const User = require('../models/user');

// Get ranked leaderboard
exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching leaderboard' });
  }
};
