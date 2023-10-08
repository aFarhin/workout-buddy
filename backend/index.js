
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const workoutRoutes = require('./routes/workout')
const cors = require('cors');

app.use(cors());

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// routes 
app.use('/api/workouts', workoutRoutes)


// connect to Database 
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Mongodb is connected')
}).catch((er)=>{
    console.log('can not connect to Mongodb', er)
})

// listen for requests
app.listen(process.env.PORT, ()=>{
    console.log("listining on PORT", process.env.PORT)
})