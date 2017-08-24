const express = require('express')
const router = express.Router()
const models = require('../models')
const bodyParser = require('body-parser')
// const cors = require('cors')

router.use(bodyParser.urlencoded({ extended: false }))
// app.use(cors())
// app.use((req, res, next) => {
//   res.setHeader('content-type', 'application/json')
//   next()
// })

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
      id: req.params.id
    }
  }).then(user => {
    res.json(user)
  })
})
//Get to see all storymaps for single user
router.get('/api/users/:id/storymaps', (req, res) => {
  models.users.findOne({
    where: {
      id: req.params.id
    }
  }).then(user => {
    models.storymaps.findAll({
      where: {
        userId: user.id
      }
    }).then(maps => {
      res.json(maps)
    })
  })
})


// Post to create new user
router.post('/api/registration', (req, res, next) => {
  console.log('New User')
  models.users.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    img: req.body.img
  })
  res.status(201)
})
// Post to create new storymap
router.post('/api/users/:user/newmap', (req, res) => {
  models.users.findOne({
    where: {
      id: req.params.user
    }
  }).then(user => {
    models.storymaps.create({
      name: req.body.name,
      description: req.body.description,
      userId: user.id
    })
  })
  res.status(201)
})
// Post to create new storyline
router.post('/api/storymaps/:map/newline', (req, res) => {
  models.storymaps.findOne({
    where: {
      id: req.params.map
    }
  }).then(map => {
      models.storylines.create({
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        type: req.body.type,
        mapId: map.id
      })
    })
  res.status(201)
})
// Post to create new plotpoint
router.post('/api/storyline/:', (req, res) => {
  models.storylines.findOne({
    where: {
      id: req.params.line
    }
  })
})
// Post to delete storymap
// Post to delete storyline
// Post to delete plotpoint
// Post to delete user
// Post to edit user
// Post to edit plotpoint
// Post to edit storyline
// Post to edit storymap

module.exports = router
