const db = require("../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users as u");
}

async function findBy(username) {
  const users = await db("users").where("username", username).first();
  return users;
}

async function add(user) {
  const userId = await db("users").insert(user);

  const { id, username, role_id } = await db("users")
    .where({ id: userId })
    .first();
  return { id, username, role_id };
}

function findById() {
  return db("users as u");
}
