const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

exports.signup = async (req, res, next) => {
  const { email } = req.body;
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    return next(new ErrorResponse("Email is already registered", 400));
  }
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return next(new ErrorResponse("Please add an email", 403));
    }
    if (!password) {
      return next(new ErrorResponse("Please add a password", 403));
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 403));
    }

    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return next(new ErrorResponse("Invalid credentials", 403));
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getJwtToken();
  res.status(statusCode)
    .cookie('token', token, { maxAge: 3600 * 1000, httpOnly: true })
    .json({ success: true, token, user });
};

exports.logout = (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({
    success: true,
    message: "Logged out"
  });
};
