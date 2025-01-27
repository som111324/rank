const express = require('express');
const router = express.Router();
const rankController = require('../controllers/rankController');

router.get('/', rankController.getLeaderboard); // Fetch leaderboard

module.exports = router;
