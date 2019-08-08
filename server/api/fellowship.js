const router = require('express').Router()
const {Fellowship, User} = require('../db/models')
module.exports = router
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const fellowships = await Fellowship.findAll()
      res.json(fellowships)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    if (req.user) {
      const fellowship = await Fellowship.findByPk(req.params.id)
      const users = await fellowship.getUsers()
      res.json({fellowship, users})
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    if (req.user) {
      const fellowship = await Fellowship.findByPk(req.params.id)
      const child = await User.findByPk(req.user.id)
      await fellowship.addUser(child)
      res.sendStatus(200)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})
