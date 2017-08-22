const express = require('express')
const app = express()
const sequelize = require('sequelize')

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, function () {
  console.log('I\'m listening')
})
