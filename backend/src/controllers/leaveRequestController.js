const LeaveService = require('../services/leaveRequestService');
/**
 * @swagger
 * tags:
 *   name: Leave Requests
 *   description: Leave request management
 */

/**
 * @swagger
 * /leave:
 *   get:
 *     summary: Get all leave requests
 *     tags: [Leave Requests]
 *     responses:
 *       200:
 *         description: List of leave requests
 */
exports.getAllLeaves = (req, res) => {
  try {
    const leaves = LeaveService.getAll();
    res.success(leaves, 'Leave requests fetched successfully');
  } catch (err) {
    res.internalError(err.message);
  }
};

/**
 * @swagger
 * /leave:
 *   post:
 *     summary: Create a new leave request
 *     tags: [Leave Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeId:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *               reason:
 *                 type: string
 *     responses:
 *       201:
 *         description: Leave request created
 *       400:
 *         description: Missing fields or insufficient leave balance
 *       404:
 *         description: Employee not found
 */
exports.createLeave = (req, res) => {
  try {
    const leave = LeaveService.create(req.body);
    res.created(leave, 'Leave request created successfully');
  } catch (err) {
    if (err.message.includes('not found')) return res.notFound(err.message);
    return res.badRequest(err.message);
  }
};

/**
 * @swagger
 * /leave/{id}/approve:
 *   patch:
 *     summary: Approve a leave request
 *     tags: [Leave Requests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Leave request approved
 *       404:
 *         description: Leave request not found
 */
exports.approveLeave = (req, res) => {
  try {
    const leave = LeaveService.approveLeave(req.params.id);
    res.success(leave, 'Leave request approved successfully');
  } catch (err) {
    if (err.message.includes('not found')) return res.notFound(err.message);
    return res.internalError(err.message);
  }
};
