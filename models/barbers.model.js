const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barberSchema = new Schema({
    name: String,
    avatar: String,
});

module.exports = barberSchema;