// Update with your config settings.

const envVars = require("./src/config/env");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  client: "postgresql",
  connection: {
    database: envVars.POSTGRES_DB,
    user: envVars.POSTGRES_USER,
    password: envVars.POSTGRES_PASSWORD,
    host: "db_crud_user_knex",
  },
  migrations: {
    tableName: "migrations",
    directory: "./src/migrations",
  },
};
