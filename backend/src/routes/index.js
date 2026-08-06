const express = require('express')

const enquiryRoutes = require('./enquiryRoutes')
const quoteRoutes = require('./quoteRoutes')

const router = express.Router()

router.get('/health', (req, res) => res.json({ success: true, message: 'API is healthy' }))

router.use('/enquiries', enquiryRoutes)
router.use('/quotes', quoteRoutes)

module.exports = router
