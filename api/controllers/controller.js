const mongoose = require('mongoose');
const User = require('../models/User');

exports.getUsers = async (req, res) => {
    const users = await User.find({});
    res.json(users);
};

exports.newUser = async (req, res) => {
    const { name, lastName, age } = req.body;
    
    const user = new User({
        name,
        lastName,
        age
    });

    if(!name) {
        res.status(400).json({
            message: "The name field cannot be empty"
        })
    };
    if(!lastName) {
        res.status(400).json({
            message: "The lastname field cannot be empty"
        })
    }
        await user.save();
    
    res.json({
        message: "User created succesfully!",
    });
};

exports.updateUser =  async (req, res) => {
    const { id } = req.params;
    
    try{
        await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        res.send({ message: "User was updated successfully." });
    }catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}


exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try{
        await User.deleteOne({ _id: id })
        res.status(200).json({
            message: "User deleted succesfully"
        });
    }
    catch(error){
        res.status(404).json({
            message: error.message
        })
    };
}