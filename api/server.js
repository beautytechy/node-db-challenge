const express = require('express');
require('dotenv').config();
const server = express();

server.use(express.json());

const dbRouter = require('../data/dbRouter.js');

server.use('/api/projects', dbRouter);

module.exports = server;