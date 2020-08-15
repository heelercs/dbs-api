const express = require('express')

const {
	getDevices,
	getDevice,
	createDevice,
	updateDevice,
} = require('../controllers/devices')

const router = express.Router()

const { protect, authorize } = require('../middleware/auth')

// prettier-ignore
router.route('/')
	.get(protect, getDevices)
	.post(protect, authorize('admin', 'superadmin'), createDevice)

// prettier-ignore
router.route('/:id')
	.get(protect, getDevice)
	.put(protect, authorize('admin', 'superadmin'), updateDevice)

module.exports = router