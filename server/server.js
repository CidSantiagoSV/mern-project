// required stuff to run the server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exerciseRouter = require('./routes/exercises.js');
const usersRouter = require('./routes/users.js');


//hide enviromental variables
require('dotenv').config();

//create express server
const app = express();
const port = process.env.PORT || 5000;


//cors middleware || parse json
app.use(cors());
app.use(express.json());

//connect to mongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

//wait server start then connect to MongoDB
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

//starts the servers
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});