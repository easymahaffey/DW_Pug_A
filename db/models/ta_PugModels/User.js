const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
        trim: true
    },
    email : {
        type: String,
        require: true,
        unique : true,
        trim: true
    },
    phone : {
        type: String,
        trim: true
    },
    password : {
        type: String,
        require: true,
        trim: true
    },
    date : {
        type : Date,
        required: true,
        default: Date.now()
    },
    loggedIn: {
        type: Boolean,
        required: true,
        default: false,
    },
    city: {
        type: String,
        required: true,
        trim: true        
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    zipcode: {
        type: String,
        required: true,
        trim: true
    },
    privacy: {
        type: String,
        require: true
    },
    userLevel: {
        type: String,
    },
    member_id: {
        type: String,
        trim: true
    },
    user_id: {
        type: String,
        trim: true
    },
    info: {
        type: String,
        trim: true
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;