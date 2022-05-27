const createUserService = require("../services/user.service");
const bcrypt = require("bcryptjs");

const userService = createUserService();

const createUserController = () => {
  const getAll = async (request, response) => {
    const usersList = await userService.list();

    return response.json(usersList);
  };

  const get = async (request, response) => {
    const user = await userService.get(request.params.userId);

    if (user) {
      return response.json(user);
    }

    return response.status(404).json({ message: "User not found" });
  };

  const create = async (request, response) => {
    try {
      const { password, ...user } = request.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      user.password = hashedPassword;

      const newUser = await userService.insert(user);

      return response.status(201).json(newUser);
    } catch (error) {
      if (error.code === "23505") {
        return response.status(400).json({ message: "User already exists" });
      }

      return response.status(500).json({ message: "Error creating user" });
    }
  };

  const update = async (request, response) => {
    const userId = request.params.userId;

    const { password, ...user } = request.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    const updatedUser = await userService.update(userId, user);

    if (updatedUser) {
      return response.json(updatedUser);
    }

    return response.status(404).json({ message: "User not found" });
  };

  const deleteAll = async (request, response) => {
    const deletedUsers = await userService.deleteAll();

    console.log("> deletedUsers", deletedUsers);

    return response.status(204).send();
  };

  const deleteOne = async (request, response) => {
    const isDeleted = await userService.deleteOne(request.params.userId);

    if (isDeleted) {
      return response.status(204).send();
    }

    return response.status(404).json({ message: "User not found" });
  };

  return {
    getAll,
    get,
    create,
    update,
    deleteOne,
    deleteAll,
  };
};

module.exports = createUserController;
