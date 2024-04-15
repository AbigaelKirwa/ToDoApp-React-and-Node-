const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.post('/', taskController.create)
router.get('/', taskController.read)


module.exports = router