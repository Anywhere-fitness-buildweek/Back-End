exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("class_location").insert([
    {
      date: "3/4/2021",
      start_time: "10:00 a.m.",
      location_id: 1,
      class_id: 1,
      instructor_id: 4,
    },
    {
      location_id: 2,
      class_id: 2,
      date: "3/3/2021",
      start_time: "3:00 p.m.",
      intructor_id: 2,
    },
    {
      location_id: 3,
      class_id: 3,
      date: "3/8/2021",
      start_time: "5:00 a.m.",
      intructor_id: 2,
    },
    {
      location_id: 4,
      class_id: 4,
      date: "3/5/2021",
      start_time: "8:30 a.m.",
      intructor_id: 3,
    },
  ]);
};
