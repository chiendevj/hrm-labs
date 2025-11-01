# 🧑‍💼 HRM Labs – Junior Fullstack Developer Technical Assessment

A simple **HR Management System** built with **Node.js (Express)** for the backend and **Vanilla JavaScript + HTML/CSS** for the frontend.
The project allows managing **employees** and **leave requests** with basic CRUD operations and simple validation.

---

## 📁 Project Structure

```
├── backend
│   ├── src
│   │   ├── configs
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   └── app.js
│   ├── package.json
│   ├── .env
│   └── server.js
├── frontend
│   ├── assets
│   ├── js
│   │   ├── employees.js
│   │   └── leaves.js
│   ├── index.html
│   ├── leaves.html
│   └── style.css
├── .gitignore
└── README.md
```

---

## How to Run the Project

### Backend Setup

```bash
cd backend
npm install
npm run start
```

By default, the backend runs at:
**[http://localhost:8000](http://localhost:8000)**

---

### Frontend Setup

Simply open the file below directly in your browser:

```
frontend/index.html
```

Make sure your backend server is running before interacting with the UI.

---

## Swagger API Documentation

Swagger is integrated to make testing endpoints easier.

Once the server is running, open:
**[http://localhost:8000/api-docs](http://localhost:8000/api-docs)**

You’ll see the full API specification including sample requests, parameters, and responses.

---

##  API Endpoints

### Employees

| Method | Endpoint         | Description           | Example Request Body                                                     |
| ------ | ---------------- | --------------------- | ------------------------------------------------------------------------ |
| GET    | `/employees`     | Get all employees     | —                                                                        |
| POST   | `/employees`     | Add new employee      | `{ "id": 1, "name": "John Doe", "department": "IT", "leaveBalance": 5 }` |
| GET    | `/employees/:id` | Get employee by ID    | —                                                                        |
| DELETE | `/employees/:id` | Delete employee by ID | —                                                                        |

---

### Leave Requests

| Method | Endpoint             | Description                                                 | Example Request Body                                                                            |
| ------ | -------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| POST   | `/leave`             | Create leave request (reduce employee’s leave balance by 1) | `{ "employeeId": 1, "startDate": "2025-11-01", "endDate": "2025-11-03", "reason": "Vacation" }` |
| GET    | `/leave`             | Get all leave requests                                      | —                                                                                               |
| PATCH  | `/leave/:id/approve` | (Bonus) Approve leave request                               | —                                                                                               |

---

##  Example Usage

###  Add a New Employee

```bash
POST /employees
{
  "id": 1,
  "name": "John Doe",
  "department": "IT",
  "leaveBalance": 5
}
```

### Create a Leave Request

```bash
POST /leave
{
  "employeeId": 1,
  "startDate": "2025-11-05",
  "endDate": "2025-11-06",
  "reason": "Family Trip"
}
```

➡ Automatically reduces the employee’s `leaveBalance` by 1.

### Approve Leave Request (Bonus)

```bash
PATCH /leave/1/approve
```

---

## Frontend Features

* Add new employee through a form input
* Display employee list in a clean, responsive table
* Create and view leave requests
* (Bonus) Show leave approval status (Pending / Approved)

###  Preview

#### Employee List

![Employee List Screenshot](https://github.com/chiendevj/hrm-labs/frontend/assets/employees.png)

#### 🌴 Leave Requests

![Leave Requests Screenshot](https://github.com/chiendevj/hrm-labs/frontend/assets/leaves.png)

---

## Technologies Used

**Backend:** Node.js, Express, Swagger UI
**Frontend:** HTML, CSS, Vanilla JavaScript (Fetch API)

---

## Notes

* All data is stored **in memory**, so it resets when the server restarts.
* The project is designed for **demonstration and technical assessment** purposes only.

---

## 👨‍💻 Author

**Trần Trung Chiến**
📧 Email: [chienttrants@gmail.com](mailto:chienttrants@gmail.com)
📅 Submission: November 1, 2025
