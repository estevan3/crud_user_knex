const express = require("express");
const userRouters = require("./routes/user.routes");
const swaggerUiExpress = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(express.json());
app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));

userRouters(app);

module.exports = app;
