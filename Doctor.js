const m = require('mongoose');
module.exports = m.model('Doctor', new m.Schema({
  name: String, specialty: String, experience: Number
}));