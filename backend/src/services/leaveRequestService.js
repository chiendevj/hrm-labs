const { leaveRequests, LeaveStatus } = require('../models/leaveRequestModel');
const EmployeeService = require('./employeeService');
const { v4: uuidv4 } = require('uuid');
class LeaveService {
    static create({ employeeId, startDate, endDate, reason }) {
        const emp = EmployeeService.getById(employeeId);
        if (!emp) throw new Error('Employee not found');
        if (emp.leaveBalance <= 0) throw new Error('Insufficient leave balance');

        EmployeeService.reduceLeaveBalance(employeeId, 1);

        const leave = {
            id: uuidv4(),
            employeeId,
            startDate,
            endDate,
            reason,
            status: LeaveStatus.PENDING,
        };

        leaveRequests.push(leave);
        return leave;
    }

    static approveLeave(id) {
        const leave = leaveRequests.find(l => l.id == id);
        if (!leave) throw new Error('Leave request not found');

        leave.status = LeaveStatus.APPROVED;
        return leave;
    }

    static getAll() {
        return leaveRequests;
    }

    static getById(id) {
        return leaveRequests.find(l => l.id == id);
    }
}

module.exports = LeaveService;
