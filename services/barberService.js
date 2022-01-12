const mongoose = require('mongoose');
const barberSchema = require('../models/barbers.model');

const Barber = mongoose.model('Barber', barberSchema)

const getBarbers = async () => {
    try{
        let data = await Barber.find()
        return data;
    }catch(error){
        console.log(error);
    }
}

const setBarber = async ({name, avatar}) => {
    try{
        let barber = new Barber({name, avatar})
        return await barber.save();
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    getBarbers,
    setBarber
}