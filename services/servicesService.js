const mongoose = require('mongoose');
const serviceSchema = require('../models/services.model');

const service = mongoose.model('service', serviceSchema);

const getServices = async () => {
    try{
        let data = await service.find();
        return data;
    }catch(err){
        console.log(err)
    }
}

const getServicesByBarberId = async (barberId) => {
    try{
        let data = await service.find({barberId});
        return data;
    }catch(err){
        console.log(err)
    }
}


const setService = async ({barberId, serviceName}) => {
    try{
        let newService = new service({barberId, serviceName});
        await newService.save();
        return true;
    }catch(err){
        console.log(err);
        return false;
    }
}



module.exports = {
    getServices,
    setService,
    getServicesByBarberId
}

