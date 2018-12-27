const { validationResult } = require('express-validator/check')
const { exec } = require('child_process')
const mjml = require('mjml')

const mjmlVersion = new Promise((resolve, reject) => {
  exec('npm view mjml version', (err, version) => {
    if (!!err) {
      reject(err)
    } else {
      resolve(version.trim())
    }
  })
})

const render = (template) => mjml(template, {
  minify: false,
  keepComments: false,
  validationLevel: 'soft'
})

const formatValidationError = errors => {
  const [{ msg, location, param }] = errors.array()
  return `${msg} [${location} > ${param}]`
}

const createError = (startedAt, errorMessage) => ({
  request_id: null,
  started_at: startedAt.toISOString(),
  message: errorMessage
})

module.exports = (debug) => async (req, res) => {
  debug('[render] incoming request')

  const errors = validationResult(req)
  const startedAt = new Date()

  if (!errors.isEmpty()) {
    debug('[render] invalid request')

    return res.status(400)
      .json(createError(startedAt, formatValidationError(errors)))
  }

  try {
    const result = render(req.body.mjml)

    res.status(200)
      .json({
        ...result,
        mjml: req.body.mjml,
        mjml_version: await mjmlVersion
      })
  } catch (e) {
    debug(`[render] error: ${e.message}`)

    res.status(500)
      .json(createError(startedAt, e.message))
  }
}
