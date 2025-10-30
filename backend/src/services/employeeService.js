const employees = require('../models/employeeModel');
const { v4: uuidv4 } = require('uuid');
class EmployeeService {
  static getAll() {
    return employees;
  }

  static getById(id) {
    return employees.find(emp => emp.id === id);
  }

  static create(employeeData) {
    const id = uuidv4();
    const { name, department, leaveBalance } = employeeData;

    if ( !name || !department || leaveBalance === undefined) {
      throw new Error('Missing required fields');
    }
    const employee = { id, name, department, leaveBalance };
    employees.push(employee);
    return employee;
  }

  static deleteById(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index === -1) return false;
    employees.splice(index, 1);
    return true;
  }

  static reduceLeaveBalance(employeeId, amount = 1) {
    const employee = this.getById(employeeId);
    if (!employee) throw new Error('Employee not found');
    if (employee.leaveBalance < amount) throw new Error('Insufficient leave balance');
    employee.leaveBalance -= amount;
    return employee;
  }
}

module.exports = EmployeeService;
