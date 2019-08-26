const router = require('express').Router()
const {Event} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    await Event.create(req.body)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll(req.body)
    res.send(events)
  } catch (err) {
    next(err)
  }
})
