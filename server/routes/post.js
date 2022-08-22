const router = require('express').Router();
const Post = require('../models/Post')
const User = require('../models/User')

//create a post
router.post('/create',async (req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savePost = await newPost.save()
        res.status(200).send(savePost)
    }catch(error){
        res.status(404).send(error)
    }
})
//update a post
router.put('/update/:id', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if (post.userid===req.body.userid){
            await post.updateOne({$set:req.body})
            res.status(200).json("The post has been updated")
        }else{
            res.status(403).json("You can update your posts only!")
        }
    }catch(error){
        res.status(403).json(error)
    }
})
//delete a post 
router.delete('/delete/:id', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if (post.userid===req.body.userid){
            await post.deleteOne()
            res.status(200).json("The post has been deleted")
        }else{
            res.status(403).json("You can delete your posts only!")
        }
    }catch(error){
        res.status(403).json(error)
    }
})
//like a post
router.put('/:id/like',(req,res)=>{
    Post.findById(req.params.id).then(async (post)=>{
        //console.log(post)
        if (!post.likes.includes(req.body.userid)){
            await post.updateOne({$push: {likes: req.body.userid}})
            res.status(200).send("User liked the post!")
        }else{
            await post.updateOne({$pull: {likes: req.body.userid}})
            res.status(200).send("User disliked the post!")
        }
    }).catch((error)=>{
        res.status(403).send(error)
    })
})
//get a post
router.get('/get/:id',(req,res)=>{
    Post.findById(req.params.id).then((post)=>{
        res.status(200).json(post)
    }).catch((error)=>{
        res.status(403).send(error)
    })
})

//get timeline posts
router.get('/timeline', (req,res)=>{
    User.findById(req.body.userid).then(async (currentUser)=>{
        const userPosts = await Post.find({userid:currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.following.map((friendid)=>{
                Post.find({userid:friendid})
            })
        )

        res.json(userPosts.concat(...friendPosts));
    }).catch((error)=>{
        //res.status(403).send(error)
    })
})
module.exports = router