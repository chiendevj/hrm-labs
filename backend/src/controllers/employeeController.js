const sendResponse = require('../middlewares/responseHandler');
const EmployeeService = require('../services/employeeService');

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: Employee management
 */

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: List of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Employees fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "1"
 *                       name:
 *                         type: string
 *                         example: John Doe
 *                       department:
 *                         type: string
 *                         example: HR
 *                       leaveBalance:
 *                         type: integer
 *                         example: 10
 */
exports.getAllEmployees = (req, res) => {
  try {
    const employees = EmployeeService.getAll();
    res.success(employees, 'Employees fetched successfully');
  } catch (err) {
    res.internalError(err.message);
  }
};

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee found
 *       404:
 *         description: Employee not found
 */
exports.getEmployeeById = (req, res) => {
  try {
    const emp = EmployeeService.getById(req.params.id);
    if (!emp) return res.notFound('Employee not found');
    res.success(emp, 'Employee fetched successfully');
  } catch (err) {
    res.internalError(err.message);
  }
};

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Add a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "1"
 *               name:
 *                 type: string
 *                 example: John Doe
 *               department:
 *                 type: string
 *                 example: HR
 *               leaveBalance:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       201:
 *         description: Employee added
 *       400:
 *         description: Missing fields or duplicate ID
 */
exports.addEmployee = (req, res) => {
  try {
    const employee = EmployeeService.create(req.body);
    res.created(employee, 'Employee added successfully');
  } catch (err) {
    res.badRequest(err.message);
  }
};

/**
 * @swagger
 * /employees/{id}:
 *   delete:
 *     summary: Delete employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee deleted
 *       404:
 *         description: Employee not found
 */
exports.deleteEmployee = (req, res) => {
  try {
    const deleted = EmployeeService.deleteById(req.params.id);
    if (!deleted) return res.notFound('Employee not found');
    res.success(null, 'Employee deleted successfully');
  } catch (err) {
    res.internalError(err.message);
  }
};
