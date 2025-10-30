const API_BASE = 'http://localhost:8000/api';

const employeeForm = document.getElementById('employeeForm');
employeeForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById('empName').value,
    department: document.getElementById('empDept').value,
    leaveBalance: Number(document.getElementById('empLeave').value),
  };
  try {
    const res = await fetch(`${API_BASE}/employees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    alert(json.message);
    employeeForm.reset();
  } catch(err) {
    alert('Error adding employee');
  }
});

document.getElementById('loadEmployees').addEventListener('click', async () => {
  try {
    const res = await fetch(`${API_BASE}/employees`);
    const json = await res.json();
    const tbody = document.querySelector('#employeeTable tbody');
    tbody.innerHTML = '';
    json.data.forEach(emp => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.department}</td>
        <td>${emp.leaveBalance}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch(err) {
    alert('Error loading employees');
  }
});

// --- Leave Requests ---
const leaveForm = document.getElementById('leaveForm');
leaveForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    employeeId: document.getElementById('leaveEmpId').value,
    startDate: document.getElementById('leaveStart').value,
    endDate: document.getElementById('leaveEnd').value,
    reason: document.getElementById('leaveReason').value,
  };
  try {
    const res = await fetch(`${API_BASE}/leave`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    alert(json.message);
    leaveForm.reset();
  } catch(err) {
    alert('Error creating leave request');
  }
});

document.getElementById('loadLeaves').addEventListener('click', async () => {
  try {
    const res = await fetch(`${API_BASE}/leave`);
    const json = await res.json();
    const tbody = document.querySelector('#leaveTable tbody');
    tbody.innerHTML = '';
    json.data.forEach(leave => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${leave.id}</td>
        <td>${leave.employeeId}</td>
        <td>${leave.startDate}</td>
        <td>${leave.endDate}</td>
        <td>${leave.reason}</td>
        <td class="status-${leave.status}">${leave.status}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch(err) {
    alert('Error loading leave requests');
  }
});
