const express = require('express');
const router = express.Router();
const { setBarber, getBarbers } = require('../services/barberService');
const { getServices } = require('../services/servicesService');


router.get('/getBarbers', async (req, res)=>{
    try{
        const barbers = await getBarbers();
        const services = await getServices();
        res.send({barbers, services});
    }catch(err){
        res.sendStatus(400);
    }
})

router.post('/setBarber', async (req, res)=> {
    try{
        await setBarber(req.body);
        res.sendStatus(200);
    }catch(err){
        res.sendStatus(400)
    }
});



module.exports = router;