exports.seed = function (knex) {
  return knex("locations").insert([
    {
      location: "Weight City Beach",
    },
    {
      location: "Calm Minds Studio",
    },
    {
      location: "9 Mile Park",
    },
    {
      location: "Death Mountain Trail",
    },
  ]);
};
