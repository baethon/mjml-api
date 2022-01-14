const app = require('./src/app')
const port = process.env.NODE_PORT || process.env.PORT || 3000
const host = process.env.NODE_HOST || process.env.HOST || '0.0.0.0'

app.listen(port, host, () => {
  app.debug(`Listening on ${host}:${port}`)
})
