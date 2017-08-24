const express = require('express')
const app = express()
const router = express.Router()
const models = require('../models')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
// Get to see all users info
router.get('/api/users', (req, res) => {
  models.users.findAll()
  .then(user => {
    res.json(user)
  })
})
// Get to see all infor for single user
router.get('/api/users/:id', (req, res) => {
  models.users.findOne({
    where: {
      id: req.params.users
    }
  }).then(user => {
    res.json(user)
  })
})
//Get to see all storymaps for single user
router.get('/api/users/:id/storymaps', (req, res) => {
  models.users.findOne({
    where: {
      id: req.params.users
    }
  }).then(user => {
    models.storymaps.findOne({
      where: {

      }
    })
  })

    // where user id = :id

    // and give me all the maps for that use
})
// Post to create new user
app.post('/api/registration', (req, res) => {
  models.users.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    img: req.body.img
  })
  res.status(201)
})
// Post to create new storymap
app.post('/api/user/:id/new_map', (req, res) => {
  models.users.findOne({
    where: {
      id: req.params.users
    }
  }).then(user => {
    models.storymaps.create({
      name: req.body.name,
      description: req.body.description
    })
  })

})
// Post to create new storyline
// Post to create new plotpoint
// Post to delete storymap
// Post to delete storyline
// Post to delete plotpoint
// Post to delete user
// Post to edit user
// Post to edit plotpoint
// Post to edit storyline
// Post to edit storymap

module.exports = router
