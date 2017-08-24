const express = require('express')
const app = express()
const sequelize = require('sequelize')
const models = require('./models')
const apiRoute = require('./routes/api')

app.use(apiRoute)

app.get('/', function (req, res) {
  res.send('Timebandits')
})

app.listen(3005, function () {
  console.log('I\'m listening')
})
