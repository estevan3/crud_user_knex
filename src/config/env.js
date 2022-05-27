const { config } = require("dotenv");

config();

const envVars = {
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
  SECRET_KEY: process.env.SECRET_KEY,
};

module.exports = envVars;
