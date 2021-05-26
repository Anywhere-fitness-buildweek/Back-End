const db = require("../data/db-config");

module.exports = {
  add,
  find,
  //   findBy,
  findById,
};

function find() {
  return db("users as u");
}

// function findBy() {
//   return db();
// }

async function add(user) {
  const [id] = await db("users").insert(user);

  return db("users").where({ id }).first();
}

function findById(id) {
  return db("users as u");
}
