const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const barberSchema = require('../models/barbers.model');
const userSchema = require('../models/user.model');
const barbers = mongoose.model('barbers', barberSchema);
const user = mongoose.model('user', userSchema);



const ordersSchema = new Schema({
    barberId: { type: Schema.Types.ObjectId, ref: 'barbers' },
    date: Date,
    hours: [{
        type: String
    }],
    userId: { type: Schema.Types.ObjectId, ref: 'user' }
});

module.exports = ordersSchema;