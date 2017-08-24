const express = require('express')
const app = express()
const sequelize = require('sequelize')
const models = require('./models')
const apiRoute = require('./routes/api')
const cors = require('cors')

app.use(apiRoute)
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('content-type', 'application/json')
  next()
})

app.get('/', function (req, res) {
  res.send('Timebandits')
})

app.listen(3005, function () {
  console.log('I\'m listening')
})
