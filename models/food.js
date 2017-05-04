const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let foodSchema = new Schema({
  name: String,
  price: Number,
  exp_date: Date
});

let Food = mongoose.model('Food', foodSchema);

module.exports = Food;
