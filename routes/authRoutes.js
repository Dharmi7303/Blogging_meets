const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');



router.get('/login', (req, res) => {
    res.render('auth/login'); 
});

router.get('/register', (req, res) => {
    res.render('auth/register');    
});
// Register a new user
router.post('/register', authController.registerUser);

// Login user
router.post('/login', authController.loginUser);

module.exports = router;
