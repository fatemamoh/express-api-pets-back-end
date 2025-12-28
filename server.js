// dotenv
const dotenv = require('dotenv');
dotenv.config();

// mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// express
const express = require('express');
const app = express();

// controllers 
const morgan = require('morgan');
const petCtrl = require('./controllers/pets')

// middlewere
app.use(morgan('dev'));
app.use(express.json());

// routes 
app.use('/pets', petCtrl);



app.listen(3000, () => {
  console.log('The express app is ready!');
});