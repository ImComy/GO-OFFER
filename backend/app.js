const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
require('dotenv').config();


// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173', // The origin of your frontend
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

// Database connection
 connectDB();

// Your routes and other middleware
app.use(express.json());

// Example route
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

