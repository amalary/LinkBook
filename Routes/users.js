const User = require('../Models/Users'); 
const router = require('express').Router(); 
const Bcrypt = require('bcrypt')



// Update Functionality

router.put("/:id", async(req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){


    
        if(req.body.password){
            try{
                const salt = await Bcrypt.genSalt(12)
                req.body.password = await Bcrypt.hash(req.body.password, salt); 
                
            }catch(err) {
                return res.status(500).json(err)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body,
            });
            res.status(200).json('Account has been successfully updated')

        }catch(err){

            return res.status(500).json(err); 

        }



    }
    else{
        return res.status(403).json("You can only update your account")
    }
});

// Delete Functionality

router.delete("/:id", async(req,res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json('Account has been deleted')

        }catch(err){

            return res.status(500).json(err); 

        }



    }
    else{
        return res.status(403).json("You can only delete your account")
    }
});

// Grab a user

router.get("/:id", async (req,res) =>{
    try{
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc
        res.status(200).json(other)

    }catch(err){
        res.status(500).json(err)
    }

})

// Follow a user

// Unfollow User

module.exports = router; 