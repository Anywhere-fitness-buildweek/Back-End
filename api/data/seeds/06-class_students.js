exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("class_students").insert([
    { class_id: "1", user_id: "5" },
    { class_id: "2", user_id: "6" },
    { class_id: "3", user_id: "7" },
  ]);
};
