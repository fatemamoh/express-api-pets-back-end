// require mongoose 
const mongoose = require('mongoose');

// mongoose schema 

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
        required: true,
    },
    breed: String,
});

// initialize mongoose model

const Pet = mongoose.model('Pet', petSchema);

// export the model
module.exports = Pet;