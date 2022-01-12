const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');


const { getUserByPhone, setUser } = require('../services/userService');



router.post('/login', async (req, res)=> {
    try{
        let { name, phoneNum } = req.body;
        let userExist = await getUserByPhone(phoneNum);
        // console.log(userExist[0].id);
        
        if(userExist.length>0){
            const token = jwt.sign({ username: name, phone: phoneNum, userId: userExist[0].id }, SECRET);
            return res.json({ token });
        }else{
            await setUser(req.body);
            let userExist = await getUserByPhone(phoneNum);
            const token = jwt.sign({ username: name, phone: phoneNum, userId: userExist[0].id}, SECRET);
            return res.json({ token });
        }
    }catch(err){
        res.sendStatus(400);
    }
});



module.exports = router;