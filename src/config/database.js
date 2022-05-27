const knex = require("knex");
const development = require("../../knexfile.js");

const connection = () => knex(development);

module.exports = connection;
