const express = require('express');
require('dotenv').config();
const server = express();

server.use(express.json());

const dbRouter = require('../data/dbRouter.js');

server.use('/api', dbRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: 'Its working'})
});
module.exports = server;