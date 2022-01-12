const express = require('express');
const router = express.Router();
const { getServices, setService, getServicesByBarberId } = require('../services/servicesService');


router.get('/getServices', async (req, res) => {
    try{

        let services = await getServices();
        res.send(services);

    }catch(err){
        res.sendStatus(400);
    }
});


router.get('/getServicesByBarberId', async (req, res) => {
    try{
        let { barberId } = req.query
        let services = await getServicesByBarberId(barberId);
        res.send(services);
    }catch(err){
        res.sendStatus(400);
    }
});

router.post('/setService', async (req, res) => {
    try{
        let { barberId, serviceName } = req.body;
        let status = await setService({barberId, serviceName});
        if(status){
            res.sendStatus(200);
        }else{
            res.sendStatus(400);
        }
    }catch(err){
        res.sendStatus(400);
    }
})



module.exports = router;