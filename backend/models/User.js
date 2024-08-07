const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

// Offer schema
const offerSchema = new mongoose.Schema({
  offerImageHeader: { type: String, required: true },
  offerImageBackground: { type: String, required: true },
  discount: { type: Number, required: true },
  ending: { type: String, required: true },
  name: { type: String, required: true },
});

// Coupon schema
const couponSchema = new mongoose.Schema({
  couponsimageheader: { type: String, required: true },
  discount: { type: Number, required: true },
  name: { type: String, required: true },
});

// Main user schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  offers: [offerSchema],
  coupons: [couponSchema],
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    phone: Joi.string().required().label("Phone"),
    offers: Joi.array().items(
      Joi.object({
        offerImageHeader: Joi.string().label("Offer Image Header"),
        offerImageBackground: Joi.string().label("Offer Image Background"),
        discount: Joi.number().label("Discount"),
        ending: Joi.string().label("Ending"),
        name: Joi.string().label("Name"),
      })
    ).label("Offers"),
    coupons: Joi.array().items(
      Joi.object({
        couponsimageheader: Joi.string().label("Coupons Image Header"),
        discount: Joi.number().label("Discount"),
        name: Joi.string().label("Name"),
      })
    ).label("Coupons"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
