const mongoose = require('mongoose');
const connectDB = async() => {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`Mongoose Connected...`.cyan.bold);
};

module.exports = connectDB;