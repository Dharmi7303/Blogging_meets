const User = require('../models/user');

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            throw new Error('Invalid email or password');
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
