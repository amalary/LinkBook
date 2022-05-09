const express = require('express'); 
const app = express(); 
const PORT = 4000; 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const helmet = require('helmet'); 
const morgan = require('morgan'); 

dotenv.config(); 

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connected to MONGODB')
});



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); 
})