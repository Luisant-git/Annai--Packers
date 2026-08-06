const { nodeEnv } = require('../config/env')

function notFoundHandler(req, res) {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` })
}

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal server error'

  if (nodeEnv !== 'test') {
    console.error(`[error] ${req.method} ${req.originalUrl} ->`, err)
  }

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? 'Something went wrong. Please try again later.' : message,
    ...(err.errors ? { errors: err.errors } : {}),
    ...(nodeEnv === 'development' && statusCode === 500 ? { stack: err.stack } : {}),
  })
}

module.exports = { notFoundHandler, errorHandler }
