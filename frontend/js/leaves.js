const API_BASE = 'http://localhost:8000/api';

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
        const res = await fetch(`${API_BASE}/leaves`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const json = await res.json();
        alert(json.message);
        leaveForm.reset();
    } catch (err) {
        alert('Error creating leave request');
    }
});

document.getElementById('loadLeaves').addEventListener('click', async () => {
    try {
        const res = await fetch(`${API_BASE}/leaves`);
        const json = await res.json();
        const tbody = document.querySelector('#leaveTable tbody');
        tbody.innerHTML = '';
        json.data.forEach(leave => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
        <td>${leave.id}</td>
        <td>${leave.employeeName}</td>
        <td>${leave.startDate}</td>
        <td>${leave.endDate}</td>
        <td>${leave.reason}</td>
        <td class="status-${leave.status}">${leave.status}</td>
      `;
            tbody.appendChild(tr);
        });
    } catch (err) {
        alert('Error loading leave requests');
    }
});