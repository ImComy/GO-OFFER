const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  couponsimageheader: { type: String, required: true },
  discount: { type: Number, required: true },
  name: { type: String, required: true },
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
