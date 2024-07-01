// postRoutes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const Post = require('../models/post');

// GET all posts
router.get('/', postController.getAllPosts);

// GET a single post by ID
router.get('/:id', postController.getPostById);

// POST route to create a new post
router.post('/create', async (req, res) => {
    try {
        // Create a new post object using data from the request body
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            // Do not set _id here
        });

        // Save the new post to the database
        await newPost.save();

        res.status(201).json({ success: true, message: 'Post created successfully', post: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating post', error: error.message });
    }
});

// Update a post by ID
router.put('/:id', postController.updatePost);

// Delete a post by ID  
router.delete('/:id', postController.deletePost);

module.exports = router;
