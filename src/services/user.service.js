const connection = require("../config/database");

const database = connection();

const createUserService = (tableName = "users") => {
  const list = async () => {
    return database(tableName).select("id", "email").orderBy("id", "asc");
  };

  const get = async (userId) => {
    const user = await database(tableName).select("id", "email").where("id", userId).first();

    return user;
  };

  const insert = async (user, tableName = "users") => {
    const newUser = await database(tableName).insert(user).returning(["id", "email"]);

    return newUser[0];
  };

  const update = async (userId, user, tableName = "users") => {
    const updatedUser = await database(tableName).update(user).where("id", userId).returning(["id", "email"]);

    return updatedUser[0];
  };

  const deleteAll = async (tableName = "users") => {
    const deletedUsers = await database(tableName).del();

    return deletedUsers;
  };

  const deleteOne = async (userId, tableName = "users") => {
    const isDeleted = await database(tableName).delete().where("id", userId);

    return !!isDeleted;
  };

  return {
    list,
    get,
    insert,
    update,
    deleteAll,
    deleteOne,
  };
};

module.exports = createUserService;
