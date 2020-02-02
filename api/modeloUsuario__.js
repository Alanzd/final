const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Usuario = new Schema({
  nombre: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'usuario'
});

module.exports = mongoose.model('Usuario', Usuario);