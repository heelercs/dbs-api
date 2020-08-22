const express = require('express')

const { getLogs } = require('../controllers/logs')

const Log = require('../models/Log')

const router = express.Router()

const advancedResults = require('../middleware/advancedResults')
const { protect, authorize } = require('../middleware/auth')

// prettier-ignore
router.route('/')
	.get(protect, authorize('admin', 'superadmin'), advancedResults(Log, {
		path: 'user',
		select: 'firstName lastName email store district'
	}), getLogs)

module.exports = router
