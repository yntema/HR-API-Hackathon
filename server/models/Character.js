var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  house: String,
  imageUrl: String
});

module.exports = mongoose.model('Character', characterSchema);
