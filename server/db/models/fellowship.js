// const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Fellowship = db.define('fellowship', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Fellowship
