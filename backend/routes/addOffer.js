const router = require('express').Router();
const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/', async (req, res) => {
  try {
    const { token, offer } = req.body;

    if (!token || !offer) {
      return res.status(400).send({ message: 'Token and Card are required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).send({ message: 'Invalid token' });
    }

    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    user.offers.push(offer);
    await user.save();

    res.status(200).json({ message: 'Card added successfully', user });
  } catch (error) {
    console.error('Error adding offer:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
