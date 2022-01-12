var express = require('express')
var router = express.Router();
const jwt = require('jsonwebtoken');

const { SECRET } = require('../config');


router.use(async (req, res, next) => {
    let { token } = req.query;
        try{
            if(req.query.barberId){
                token = JSON.parse(token);
                token = token.token
            }
            jwt.verify(token, SECRET, function(err, decoded) {
                console.log(decoded);
                res.user = decoded;
                //TODO add validation to user
                next()
              });
        }catch(err){
            console.log("NOT VALID");
            console.log(req.query);
            console.log(err)
        }
  })

module.exports = router