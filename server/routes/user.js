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
        User.findByIdAndDelete(req.params.id).then((user)=>{
            res.status(200).json("Your account has been deleted");
        }).catch(error=>{
            res.status(500).json(error)
        })
    }
    else{
        res.status(200).json("User not found!")
    }
})
//fetch a user
router.get('/:id',(req,res)=>{
    User.findById(req.params.id).then((user)=>{
        const {password,isAdmin,...other} = user._doc
        res.status(200).json(other)
    }).catch((error)=>{
        res.json("User not found")
    })
})
//follow a user
router.put('/:id/follow', async (req,res)=>{
    if (req.params.id !== req.body.userid){
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userid);

        if (!user.followers.includes(req.body.userid)){
            await user.updateOne({$push:{followers:req.body.userid}}); 
            await currentUser.updateOne({$push:{following:req.params.id}}) ;
            res.status(200).json("You are following the user");
        }else{
            res.status(403).json("You are already following the user");
        }
    }else{
        res.status(200).json("You can't follow yourself!")
    }
})

//unfollow a user 
router.put('/:id/unfollow', async (req,res)=>{
    if (req.params.id !== req.body.userid){
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userid);

        if (user.followers.includes(req.body.userid)){
            await user.updateOne({$pull:{followers:req.body.userid}}); 
            await currentUser.updateOne({$pull:{following:req.params.id}}) ;
            res.status(200).json("User has been unfollowed");
        }else{
            res.status(403).json("You are not following the user");
        }
    }else{
        res.status(200).json("You can't ufollow yourself!")
    }
})

module.exports = router     