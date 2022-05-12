const User = require('../Models/Users'); 
const router = require('express').Router(); 
const Bcrypt = require('bcrypt')



// Update Functionality

router.put("/:id", async(req,res) => {
    if(req.body.userId === req.params.id || req.user.isAdmin){
        if(req.body.password){
            try{
                const salt = await Bcrypt.genSalt(12)
                req.body.password = Bcrypt.hash(req.body.password, salt); 
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
})

// Delete Functionality

// Grab a user

// Follow a user

// Unfollow User

module.exports = router; 