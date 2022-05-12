const { timeStamp } = require('console');
const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema ({

    userName: {
        type:String,
        required: true,
        min: 3,
        max: 25,
        unique: true,
    },

    userEmail: {

        type:String,
        required: true,
        max: 30,
        unique: true,

    },

    password: {
        type:String,
        required:true,
        min: 8,
    },
    profilePicture: {
        type:String,
        default: "", 
    },
    coverPicture: {
        type:String,
        default: "", 
    },
    followers: {
        type:Array,
        default: [],

    },
    following: {
        type:Array,
        default: [],
    },
    isAdmin: {
        type:Boolean,
        default:false,

    },
    city: {
        type:String,
        max:50,
    },
    desc: {
        type:String,
        max:100,
    },
    Hometown: {
        type:String,
        max:50,
    },
    Relationship: {
        type:Number,
        enum:[1,2,3],
        
    },
},

{timeStamp:true}

);

module.exports = mongoose.model('Users', UserSchema); 


