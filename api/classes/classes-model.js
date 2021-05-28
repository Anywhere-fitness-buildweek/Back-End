const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  count,
  addClient,
  deleteClient,
};

function find() {
  return db("classes as c")
    .leftJoin("class_students as cs", "c.class_id", "cs.class_id")
    .count("cs.user_id as attendees")
    .select("c.*")
    .groupBy("c.class_id");
  //   const fitness_class = await db("classes");
  //   return cla;
  //   return attendees;

  //   return fitness_class;
  //   return cla
  //   });
  //   console.log(mapper);

  // const classCount = await db("class_students")
  // .where("class_id", class_id)
  // .count("user_id")
  // .first();
  // const fitness_class = await db("classes");

  // const mapper = fitness_class.map(async (cla) => {
  //   const attendees = await count(cla.class_id);
  //   console.log(attendees);
  //   console.log(cla);
  //   return {
  //     ...cla,
  //     attendees: attendees,
  //   };
  // });
  // return await mapper;
}

function findById(class_id) {
  return db("classes as c")
    .leftJoin("class_students as cs", "c.class_id", "cs.class_id")
    .count("cs.user_id as attendees")
    .select("c.*")
    .groupBy("c.class_id")
    .where("c.class_id", class_id)
    .first();
}

async function add(newClass, location_id) {
  const [class_id] = await db("classes").insert(newClass, "class_id");
  await db("class_location").insert({
    class_id: class_id,
    location_id: location_id,
  });
  return db("classes").where({ class_id }).first();
}

async function update(class_id, classes) {
  await db("classes").where("class_id", class_id).update(classes);
  return db("classes").where({ class_id }).first();
}
function remove(class_id) {
  return db("classes").where("class_id", class_id).del();
}
async function count(class_id) {
  const classCount = await db("class_students")
    .where("class_id", class_id)
    .count("user_id")
    .first();
  return classCount["count(`user_id`)"];
}
async function addClient(class_id, user_id) {
  await db("class_students").insert({ class_id: class_id, user_id: user_id });
  return db("class_students").where({ class_id });
}
function deleteClient(user_id) {
  return db("class_students").where(user_id).del();
}
