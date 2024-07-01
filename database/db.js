const mongoose = require('mongoose');

// Database connection URL
const dbUrl = 'mongodb+srv://dharmijaviya:WkQJusU4AM4qPRBX@webappdb.eqlwoam.mongodb.net/';

// Connect to MongoDB
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Export the mongoose object to use in other parts of the application
module.exports = mongoose;
