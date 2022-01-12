const mongoose = require('mongoose');
const ordersSchema = require('../models/orders.model');

const order = mongoose.model('order', ordersSchema);


const getOrders = async ({userId}) => {
    try{
        let data = await order.find({userId});
        return data;
    }catch(error){
        console.log(error);
    }
}

const getOrdersByBarberId = async ({barberId}) => {
    try{
        let data = await order.find({barberId})
        return data;
    }catch(err){
        console.log(err)
    }
}

const getOrdersByUserId = async ({userId}) => {
    try{
        let data = await order.find({userId})
        return data;
    }catch(err){
        console.log(err)
    }
}

const setOrder = async ({barberId, date, hours, userId}) => {
    try{
        let newOrder = new order({barberId, date, hours, userId})
        await newOrder.save();
        return true
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    setOrder,
    getOrders,
    getOrdersByBarberId,
    getOrdersByUserId
}