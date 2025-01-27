const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers); 
res.status(200).json({ message: 'User API working!' });
router.post('/', userController.addUser);   
router.post('/:userId/claim', userController.claimPoints); 

module.exports = router;
