const { Router } = require("express");
const createUserController = require("../controllers/user.controller");
const validator = require("../middlewares/validator.middlewares");
const userModel = require("../models/user.models");

const router = Router();
const userController = createUserController();

const userRouters = (app) => {
  router.get("", userController.getAll);
  router.get("/:userId", userController.get);
  router.post("", validator(userModel), userController.create);
  router.put("/:userId", validator(userModel), userController.update);
  router.delete("", userController.deleteAll);
  router.delete("/:userId", userController.deleteOne);

  app.use("/api/v1/users", router);
};

module.exports = userRouters;
