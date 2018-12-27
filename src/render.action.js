const { validationResult } = require('express-validator/check')
const mjml = require('mjml')

const render = (template) => mjml(template, {
  minify: true,
  keepComments: false,
  validationLevel: 'strict'
})

const formatResponse = (res, result) => {
  res.format({
    html: _ => {
      res.send(result.html)
    },

    json: _ => {
      res.json({ html: result.html })
    },

    default: _ => {
      res.send(result.html)
    }
  })
}

const formatMjmlError = item => ({
  location: 'body.mjml',
  line: item.line,
  message: item.message,
  tagName: item.tagName
})

module.exports = (debug) => (req, res) => {
  debug('[render] incoming request')

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    debug('[render] invalid request')

    return res.status(422).json({ errors: errors.array() })
  }

  try {
    formatResponse(res, render(req.body.mjml))
  } catch (e) {
    debug(`[render] error: ${e.message}`)

    if (e.errors) {
      res.status(422).json({ errors: e.errors.map(formatMjmlError) })
    } else {
      res.status(500).json({ errors: [e.message] })
    }
  }
}
