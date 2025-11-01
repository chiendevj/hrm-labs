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
    console.log(err);
    
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

