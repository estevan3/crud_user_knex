const express = require("express");
const userRouters = require("./routes/user.routes");

const app = express();

app.use(express.json());

userRouters(app);

module.exports = app;
