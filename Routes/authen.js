const router = require('express').Router(); 
const User = require('../Models/Users')




// Registration

router.get('/checking', (req,res) => {
    res.send('Route check')
})

router.get('/register', async (req,res) => {

    const user =  new User ({
        userName:'Anthony',
        userEmail:'amalary@gmail.com',
        password: "weirdo1234", 

    }); 

    await user.save(); 
    res.send('ok!')

})

module.exports = router; 