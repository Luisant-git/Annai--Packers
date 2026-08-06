const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const { clientUrl, nodeEnv } = require('./config/env')
const routes = require('./routes')
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler')

const app = express()

app.use(helmet())
app.use(
  cors({
    origin: clientUrl,
    credentials: true,
  })
)
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

if (nodeEnv !== 'test') {
  app.use(morgan(nodeEnv === 'production' ? 'combined' : 'dev'))
}

app.use('/api', routes)

app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app
