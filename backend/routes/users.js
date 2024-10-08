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

    res.status(200).json(user.offers);
  } catch (error) {
    console.error('Error fetching user offers:', error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.delete('/offers/:offerId', async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).send({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).send({ message: 'Invalid token' });
    }

    const userId = decoded._id;
    const offerId = req.params.offerId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    console.log('User offers before removal:', user.offers);
    console.log('Offer ID to remove:', offerId);

    // Filter out the offer to remove
    const initialOfferCount = user.offers.length;
    user.offers = user.offers.filter((offer) => offer._id.toString() !== offerId);
    const finalOfferCount = user.offers.length;



    await user.save();

    console.log('User offers after removal:', user.offers);
    res.status(200).json({ message: 'Offer removed successfully' });
  } catch (error) {
    console.error('Error removing offer:', error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.post('/coupons', async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    const { coupon } = req.body;

    if (!token || !coupon) {
      return res.status(400).send({ message: 'Token and Coupon are required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).send({ message: 'Invalid token' });
    }

    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    user.coupons.push(coupon);
    await user.save();

    res.status(200).json({ message: 'Coupon added successfully', user });
  } catch (error) {
    console.error('Error adding coupon:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/coupons', async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).send({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).send({ message: 'Invalid token' });
    }

    const user = await User.findById(decoded._id).select('coupons');
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    res.status(200).json(user.coupons);
  } catch (error) {
    console.error('Error fetching user coupons:', error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.delete('/coupons/:couponId', async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).send({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).send({ message: 'Invalid token' });
    }

    const userId = decoded._id;
    const couponId = req.params.couponId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    console.log('User coupons before removal:', user.coupons);
    console.log('Coupon ID to remove:', couponId);

    // Filter out the coupon to remove
    const initialCouponCount = user.coupons.length;
    user.coupons = user.coupons.filter((coupon) => coupon._id.toString() !== couponId);
    const finalCouponCount = user.coupons.length;

    // Check if any coupons were removed
    if (initialCouponCount === finalCouponCount) {
      return res.status(404).send({ message: 'Coupon not found or already removed.' });
    }

    await user.save();

    console.log('User coupons after removal:', user.coupons);
    res.status(200).json({ message: 'Coupon removed successfully' });
  } catch (error) {
    console.error('Error removing coupon:', error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});



module.exports = router;
