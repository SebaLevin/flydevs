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

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    await User.remove({ _id: id }, 
    function(err) { 
            if (!err) { 
                console.log('ando'); 
            } 
            else { 
                console.log('no ando'); 
            } 
        }); 
}