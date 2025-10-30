const express = require('express');
const router = express.Router();
const leaveRequestController = require('../controllers/leaveRequestController');

router.get('/', leaveRequestController.getAllLeaves);
router.post('/', leaveRequestController.createLeave);
router.patch('/:id/approve', leaveRequestController.approveLeave);

module.exports = router;
