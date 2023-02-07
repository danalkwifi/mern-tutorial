const express = require('express') //getting express 
const colors = require('colors')
const dotenv = require('dotenv').config() //getting dotenv for environment variables
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB  = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express() //initailize express

app.use(express.json()) //to add middleware, 
app.use(express.urlencoded({extended: false})) //

app.use('/api/goals', require('./routers/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))