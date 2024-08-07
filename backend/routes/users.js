const router = require('express').Router();
const { User, validate } = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Create user
router.post('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(401).send({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      offers: req.body.offers,
      coupons: req.body.coupons,
    });

    await newUser.save();

    const token = newUser.generateAuthToken();
    res.status(201).send({ token, message: 'User created successfully' });
  } catch (error) {
    console.error('Error during user creation:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Get user
router.get('/', async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      console.error('No token provided');
      return res.status(401).send({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.error('Invalid token');
      return res.status(401).send({ message: 'Invalid token' });
    }

    const user = await User.findById(decoded._id);
    if (!user) {
      console.error('User not found');
      return res.status(404).send({ message: 'User not found.' });
    }

    res.send(user);
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Get user's offers details
router.get('/offers', async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).send({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).send({ message: 'Invalid token' });
    }

    const user = await User.findById(decoded._id).select('offers');
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    res.status(200).json(user.offers); // Send back only the offers
  } catch (error) {
    console.error('Error fetching user offers:', error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
