const express = require('express')

const mongoose = require('mongoose')

const rout = require('./router/userRou')

const app = express();

app.use(express.json())

app.use('/datas', rout)

mongoose.connect('mongodb+srv://Admin:MKoJ4XuYxQ2nHm6t@cluster0.ynghjuo.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('DB Connected Successfully')
})
.then(()=>{
    app.listen(3500)
})

//MKoJ4XuYxQ2nHm6t