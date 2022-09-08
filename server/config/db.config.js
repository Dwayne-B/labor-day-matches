const mongoose = require('mongoose');

const uri = "mongodb+srv://Admin:password123456789@cluster0.reiucbs.mongodb.net/?retryWrites=true&w=majority";



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    // process.exit(1)
  }
}

module.exports = connectDB