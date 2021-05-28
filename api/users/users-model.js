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
  const [id] = await db("users").insert(user, "id");

  return db("users").where({ id }).first();
}

function findById() {
  return db("users as u");
}
