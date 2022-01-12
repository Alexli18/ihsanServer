const mongoose = require('mongoose');
const userSchema = require('../models/user.model');

const user = mongoose.model('user', userSchema);


const getUsersData = async () => {
    try{
        let data = await user.find()
        return data;
    }catch(error){
        console.log(error);
    }
}

const setUser = async ({name, phoneNum}) => {
    try{
        let newUser = new user({name, phoneNum})
        await newUser.save();

    }catch(err){
        console.log(err)
    }
}

const getUserByPhone = async (phoneNum) => {
    try{
        let data = await user.find({phoneNum});
        return data;
    }catch(err){
        return false
    }
}

module.exports = {
    getUsersData,
    setUser,
    getUserByPhone
}