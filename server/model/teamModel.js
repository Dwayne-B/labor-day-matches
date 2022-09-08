// define schema
const mongoose = require('mongoose');
const teamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },




});

module.exports = mongoose.model("Team", teamSchema)