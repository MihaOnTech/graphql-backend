const mongoose = require('mongoose');
const { mongo } = require('../config/environment')

let isConnected;
let db;

const connectDB = async () => {
    if (isConnected) return db;

    try {
        db = await mongoose.connect((mongo.url));
        isConnected = db.connections[0].readyState;
        console.log(`MongoDB Connected: ${db.connection.host}`.cyan.underline.bold);
        return db;
    } catch (error) {
        console.log('Not able to connect to database');
        throw new Error(error);
    }
};

export default connectDB;