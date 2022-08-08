const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')

//update a user
router.put('/update/:id',async (req,res)=>{
    if ( req.body.userid === req.params.id || req.body.isAdmin){
        try{
            if (req.body.password){
                const salt = bcrypt.generateSalt(10);
                req.body.password = bcrypt.hash(req.body.password,salt)
            }
        }catch(error){
                res.status(500).json(error)
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            })
            res.status(200).json("Your account has been updated");
        }catch(error){
            res.status(500).json(error)
        }
    }
    else{
        res.status(200).json("User not found!")
    }
})
//delete a user
router.delete('/delete/:id', async (req,res)=>{
    if ( req.body.userid === req.params.id || req.body.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Your account has been deleted");
        }catch(error){
            res.status(500).json(error)
        }
    }
    else{
        res.status(200).json("User not found!")
    }
})
//fetch a user
//follow a user
//unfollow a user

module.exports = router     