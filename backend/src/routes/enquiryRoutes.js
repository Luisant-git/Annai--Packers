const express = require('express')
const { createEnquiry } = require('../controllers/enquiryController')
const { validateEnquiry } = require('../middleware/validateRequest')
const { formRateLimiter } = require('../middleware/rateLimiter')

const router = express.Router()

router.post('/', formRateLimiter, validateEnquiry, createEnquiry)

module.exports = router
