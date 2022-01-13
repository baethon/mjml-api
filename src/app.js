const express = require('express')
const { check } = require('express-validator/check')
const cors = require('cors')
const debug = require('debug')('app')
const bodyParser = require('body-parser')
const renderAction = require('./render.action')

const app = express()

app.use(bodyParser.json())
app.use(cors({
  origin: process.env.CORS || '*'
}))

app.debug = debug

app.post(
  '/v1/render',
  [
    check('mjml').exists({
      checkNull: true,
      checkFalsy: true
    })
  ],
  renderAction(debug)
)

module.exports = app
