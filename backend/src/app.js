const express = require('express');
const cors = require('cors');
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');
const leaveRoutes = require('./routes/leaveRequestRoutes');
const setupSwagger = require('./configs/swagger');
const sendResponse = require('./middlewares/responseHandler');
app.use(cors()); 
app.use(express.json());
app.use(sendResponse);

app.use('/api/employees', employeeRoutes);
app.use('/api/leaves', leaveRoutes);

app.get('/', (req, res) => res.send('HRM API running'));
// Setup Swagger
setupSwagger(app);


module.exports = app;
