const express = require('express')
const { createQuoteRequest } = require('../controllers/quoteController')
const { validateQuoteRequest } = require('../middleware/validateRequest')
const { formRateLimiter } = require('../middleware/rateLimiter')

const router = express.Router()

router.post('/', formRateLimiter, validateQuoteRequest, createQuoteRequest)

module.exports = router
