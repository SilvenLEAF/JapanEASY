const mongoose = require('mongoose');
const shortId = require('shortid');






/* ------------------------------------
.           ShortURL Schema
------------------------------------ */
const ShortURLSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  }
})






/* ------------------------------------
.           ShortURL MODEL
------------------------------------ */
module.exports = ShortURL = mongoose.model('ShortURL', ShortURLSchema);