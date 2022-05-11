const router = require('express').Router(); 
const User = require('../Models/Users')
const Bcrypt = require('bcrypt')




// Registration

router.post('/register', async (req,res) => {

    try{

        // new password generation 
        const salt = await Bcrypt.genSalt(12)
        const hashedPassword = await Bcrypt.hash(req.body.password,salt) 

        // new User created 
        const newUser = new User({
        
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            password: hashedPassword,
        });

         // save user and response 
        const user = await newUser.save();
        res.status(200).json(user); 
    }catch(err){

        console.log(err)

    }
}); 

// Login 

router.post('/login', async(req,res) => {

    try{
        const user = await User.findOne({userEmail:req.body.userEmail}); 
        !user && res.status(404).json('user cannot be found'); 

    }
    catch(err){

        console.log(err)
    }
})


module.exports = router; 


