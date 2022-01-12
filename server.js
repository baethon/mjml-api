const app = require('./src/app')
const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => {
  app.debug(`Listening on ${host}:${port}`)
})
