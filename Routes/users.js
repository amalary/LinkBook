const router = require('express').Router(); 



router.get('/', (req,res) => {

    res.send("Hello this is to make sure our user routes work")
})

module.exports = router; 