const connection = require("../config/database");

const database = connection();

const createUserService = (tableName = "users") => {
  const list = async () => {
    return database(tableName).orderBy("id", "asc");
  };

  const get = async (userId) => {
    const user = await database(tableName).select("*").where("id", userId).first();

    return user;
  };

  const insert = async (user, tableName = "users") => {
    const newUser = database(tableName).insert(user).returning("*");

    return newUser;
  };

  const update = async (userId, user, tableName = "users") => {
    const updatedUser = await database(tableName).update(user).where("id", userId).returning("*");

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
