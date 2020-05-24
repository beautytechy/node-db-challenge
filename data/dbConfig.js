const knex = require('knex');
const config = require('../knexfile.js');
const env = process.env.CONNECT || 'development';

module.exports = knex(config[ env ]);