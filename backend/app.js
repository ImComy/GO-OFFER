const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const addOfferRoutes = require('./routes/addOffer');
const addCouponRoutes = require('./routes/addCoupon');
require('dotenv').config();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

// Database connection
connectDB();

// Routes and other middleware
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users/add-offer', addOfferRoutes);
app.use('/api/users/add-coupon', addCouponRoutes);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
