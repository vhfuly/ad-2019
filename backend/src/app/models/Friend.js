const mongoose = require('mongoose');

let FriendsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  friend: {
    type: String,
    required: false,
    
  }
});


module.exports = mongoose.model('Friends', FriendsSchema);