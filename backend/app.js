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
const addOfferRoutes = require('./routes/addOffer');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users/add-offer', addOfferRoutes);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

