//this file is used to connect to MongoDB
const mongoose = require('mongoose')

//all mongoose functions are async becuause they return a promise
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)//exit with failure
  }
}

module.exports = connectDB