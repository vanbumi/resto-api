import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let restoSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Resto', restoSchema);