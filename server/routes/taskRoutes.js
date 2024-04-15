const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.post('/', taskController.create)
router.get('/', taskController.read)
router.put('/:id', taskController.update)


module.exports = router