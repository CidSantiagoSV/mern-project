// required stuff to run the server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


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
const connection = mongoose.connection;
    console.log("MongoDB connection established successfully");

//starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});