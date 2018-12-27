const express = require('express')
const debug = require('debug')('app')
const bodyParser = require('body-parser')
const mjml = require('mjml')

const app = express()

app.use(bodyParser.json())

app.debug = debug

app.post('/v1/render', (req, res) => {
  debug('[render] incoming request')

  const result = mjml(req.body.mjml, {
    minify: true,
    keepComments: false
  })

  res.format({
    html: _ => {
      res.send(result.html)
    },

    json: _ => {
      res.type('application/json')
        .send({ html: result.html })
    }
  })
})

module.exports = app
