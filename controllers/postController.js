const Post = require('../models/post');

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.status(200).json({ success: true, posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username');
        if (!post) {
            throw new Error('Post not found');
        }
        res.status(200).json({ success: true, post });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = await Post.create({ title, content, author: req.user._id });
        res.status(201).json({ success: true, post: newPost });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedPost) {
            throw new Error('Post not found');
        }
        res.status(200).json({ success: true, post: updatedPost });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            throw new Error('Post not found');
        }
        res.status(200).json({ success: true, message: 'Post deleted successfully' });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};
