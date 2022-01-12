const express = require('express');
const router = express.Router();
const { getOrders, setOrder, getOrdersByBarberId, getOrdersByUserId } = require('../services/orderService');

router.get('/getOrders', async (req, res) => {
    try{
        const { userId } = res.user;
        //TODO check if user is barber and send to barber all orders releted to him
        let orders = await getOrders({userId});
        res.send(orders);
    }catch(err){
        res.sendStatus(400);
    }
});

router.get('/getOrdersByBarberId', async (req, res) => {
    try{
        const { barberId } = req.query;
        //TODO check if user is barber and send to barber all orders releted to him
        let orders = await getOrdersByBarberId({barberId});
        res.send(orders);
    }catch(err){
        res.sendStatus(400);
    }
});

router.get('/getOrdersByUserId', async (req, res)=>{
    try{
        const { userId } = res.user;
        let orders = await getOrdersByUserId({userId});
    
        res.send(orders);
    }catch(err){
        res.sendStatus(400);
    }
});

router.post('/setOrder', async (req, res) => {
    try{
        const { userId } = res.user;
        const { barberId, date, hours } = req.body;
        let orderSuceess = await setOrder({ barberId, date, hours, userId });

        //
        // TODO check if have <= 2 orders
        //

        if(orderSuceess){
            res.sendStatus(200);
        }else{
            res.sendStatus(400);
        }
    }catch(err){
        res.sendStatus(400);
    }
});





module.exports = router;
