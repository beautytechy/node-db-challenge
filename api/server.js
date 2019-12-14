const express = require('express');
require('dotenv').config();
const server = express();

server.use(express.json());

const projectRouter = require('../routes/projectRouter.js');
const taskRouter = require('../routes/taskRouter.js');
const resourceRouter = require('../routes/resourceRouter.js');


server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Its working' })
});
module.exports = server;