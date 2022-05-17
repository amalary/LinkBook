const router = require('express').Router(); 
const { userInfo } = require('os');
const Post = require("../Models/Post")



// Post Creation 

router.post("/", async (req,res) => {
    const newPost = new Post(req.body)

    try{

        const savedPost = await newPost.save(); 
        res.status(200).json(savedPost); 

    }
    catch(err){
        res.status(500).json(err)

    }
})

// Updating Posts 
router.put("/:id", async (req,res) =>{
    try{

        const post = await Post.findById(req.params.id); 
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body})
            res.status(200).json('Your post has been published')
    
        }
        else{
            res.status(403).json("You can only update your posts")
        }
    }
    catch(err){
        res.status(500).json(err)

    }
});

// Deleting a Post 

router.delete("/:id", async (req,res) =>{
    try{

        const post = await Post.findById(req.params.id); 
        if(post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json('Your post has been deleted')
    
        }
        else{
            res.status(403).json("You can only delete your own posts")
        }
    }
    catch(err){
        res.status(500).json(err)

    }
});



// Liking a Post 

// Get a Post

// Getting Posts from the Timeline 



module.exports = router;