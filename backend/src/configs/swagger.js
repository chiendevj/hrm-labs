const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HRM Labs API',
      version: '1.0.0',
      description: 'API documentation for HRM Labs Backend',
    },
    servers: [
      {
        url: `http://localhost:${process.env.API_PORT || 8000}/api`,
      },
    ],
  },
  apis: [
    path.join(__dirname, '../controllers/*.js'),
    path.join(__dirname, '../routes/*.js'),
  ],
};

const specs = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
