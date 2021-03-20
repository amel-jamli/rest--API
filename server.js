const express = require('express') 
const connectDBS = require ('./config/connectDB')
const User = require ('./models/User')
const app = express() 
const Port = process.env.PORT || 7000




app.use(express.json)


//connect 
connectDBS()

app.use('/api/exemple', require('./routes/route'));



app.listen (Port , err => 
    err? console.log ('error'):console.log(`server is runing on ${Port}` ))
