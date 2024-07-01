// app.js

const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// Set up Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set up body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set up static files middleware
app.use(express.static('public'));

// Set up database connection
mongoose.connect('mongodb+srv://dharmijaviya:WkQJusU4AM4qPRBX@webappdb.eqlwoam.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Define routes
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

// Use the authRoutes router for authentication routes
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

// Define route handler for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
