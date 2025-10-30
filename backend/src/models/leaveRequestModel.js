let leaveRequests = [];
let leaveRequestId = 1;

const LeaveStatus = {
  PENDING: 'pending',
  APPROVED: 'approved',
};
module.exports = { leaveRequests, leaveRequestId, LeaveStatus };