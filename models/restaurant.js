const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let restaurantSchema = new Schema({
  name: String,
  owner: String,
  address: String,
  open_status: Boolean
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
