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
  stars: { type: Number, required: true },
  number: { type: Number, required: true },
  name2: { type: String, required: true },
  beforeprice: { type: String, required: true },
  afterprice: { type: String, required: true },
  currency: { type: String, required: true },
});

// Coupon schema
const couponSchema = new mongoose.Schema({
  couponsimageheader: { type: String, required: true },
  discount: { type: Number, required: true },
  name: { type: String, required: true },
  text1: { type: String, required: true },
  text2: { type: String, required: true },
  people: { type: Number, required: true },
  img2: { type: String, required: true },
  link: { type: String, required: true },
  code: { type: String, required: true },
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
        offerImageHeader: Joi.string().required().label("Offer Image Header"),
        offerImageBackground: Joi.string().required().label("Offer Image Background"),
        discount: Joi.number().required().label("Discount"),
        ending: Joi.string().required().label("Ending"),
        name: Joi.string().required().label("Name"),
        stars: Joi.number().required().label("Stars"),
        number: Joi.number().required().label("Number"),
        name2: Joi.string().required().label("Name2"),
        beforeprice: Joi.string().required().label("Before Price"),
        afterprice: Joi.string().required().label("After Price"),
        currency: Joi.string().required().label("Currency"),
      })
    ).label("Offers"),
    coupons: Joi.array().items(
      Joi.object({
        couponsimageheader: Joi.string().required().label("Coupons Image Header"),
        discount: Joi.number().required().label("Discount"),
        name: Joi.string().required().label("Name"),
        text1: Joi.string().required().label("Text 1"),
        text2: Joi.string().required().label("Text 2"),
        people: Joi.number().required().label("People"),
        img2: Joi.string().required().label("Image 2"),
        link: Joi.string().required().label("Link"),
        code: Joi.string().required().label("Code"),
      })
    ).label("Coupons"),
  });
  return schema.validate(data);
};

const validateOffer = (offer) => {
  const schema = Joi.object({
    offerImageHeader: Joi.string().required().label("Offer Image Header"),
    offerImageBackground: Joi.string().required().label("Offer Image Background"),
    discount: Joi.number().required().label("Discount"),
    ending: Joi.string().required().label("Ending"),
    name: Joi.string().required().label("Name"),
    stars: Joi.number().required().label("Stars"),
    number: Joi.number().required().label("Number"),
    name2: Joi.string().required().label("Name2"),
    beforeprice: Joi.string().required().label("Before Price"),
    afterprice: Joi.string().required().label("After Price"),
    currency: Joi.string().required().label("Currency"),
  });
  return schema.validate(offer);
};

const validateCoupon = (coupon) => {
  const schema = Joi.object({
    couponsimageheader: Joi.string().required().label("Coupons Image Header"),
    discount: Joi.number().required().label("Discount"),
    name: Joi.string().required().label("Name"),
    text1: Joi.string().required().label("Text 1"),
    text2: Joi.string().required().label("Text 2"),
    people: Joi.number().required().label("People"),
    img2: Joi.string().required().label("Image 2"),
    link: Joi.string().required().label("Link"),
    code: Joi.string().required().label("Code"),
  });
  return schema.validate(coupon);
};

module.exports = { User, validate, validateOffer, validateCoupon };

