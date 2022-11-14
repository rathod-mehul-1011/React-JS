const mongoose = require('mongoose');
const mongoURI = "mongoose://localhost:27017/"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;