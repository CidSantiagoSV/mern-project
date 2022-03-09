const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Data structure for new users
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

//Store in User the data from model userSchema ('User' can be anything)
const User = mongoose.model('User', userSchema);

module.exports = User;