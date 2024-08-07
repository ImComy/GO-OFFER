const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  offerImageHeader: { type: String, required: true },
  offerImageBackground: { type: String, required: true },
  discount: { type: Number, required: true },
  ending: { type: String, required: true },
  name: { type: String, required: true },
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
