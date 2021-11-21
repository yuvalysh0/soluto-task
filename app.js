const express = require('express')
const app = express()
var cors = require('cors')

const servicesRoutes = require('./api/services')

app.use(cors())
app.use('/services', servicesRoutes)


app.get('/', (req,res) => {
    res.status(200).json({
        message: 'Hello world'
    })
})


module.exports = app;