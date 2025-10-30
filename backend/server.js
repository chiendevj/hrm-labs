'use strict';
const server = require('./src/app');
const PORT = process.env.API_PORT || 8000;

server.listen(PORT, () => {
    console.log((`Server is running on port ${PORT}`));
});
