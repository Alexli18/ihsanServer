const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const barberSchema = require('../models/barbers.model');
const barbers = mongoose.model('barbers', barberSchema);


const serviceSchema = new Schema({
    barberId: { type: Schema.Types.ObjectId, ref: 'barbers' },
    serviceName: String
});

module.exports = serviceSchema;