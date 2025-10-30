const express = require('express');
const router = express.Router();
const empController = require('../controllers/employeeController');

router.get('/', empController.getAllEmployees);
router.get('/:id', empController.getEmployeeById);
router.post('/', empController.addEmployee);
router.delete('/:id', empController.deleteEmployee);

module.exports = router;
