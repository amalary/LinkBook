const express = require('express'); 
const app = express(); 
const PORT = 4000; 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const helmet = require('helmet'); 
const morgan = require('morgan'); 
const UserRoutes = require("./Routes/users")
const AuthenRoutes = require("./Routes/authen")



dotenv.config(); 

mongoose.connect(process.env.MONGO_URL,() => {


    console.log('Connected to MONGODB')
});




// Middleware 

app.use(express.json());

app.use(helmet()); 

app.use(morgan('common')); 

app.use('/api/user', UserRoutes); 

app.use('/api/auth', AuthenRoutes); 



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);}); 