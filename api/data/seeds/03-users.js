exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "SwoleMeathead",
      password: "gains",
      role_id: 1,
    },
    {
      username: "WiiFitTrainer",
      password: "yoga",
      role_id: 1,
    },
    {
      username: "CalLories",
      password: "cardio",
      role_id: 1,
    },
    {
      username: "MaxTreme",
      password: "crossfit",
      role_id: 1,
    },
    {
      username: "SaulLazy",
      password: "couch",
      role_id: 2,
    },
    {
      username: "JanFirst",
      password: "newme",
      role_id: 2,
    },
    {
      username: "BenTold",
      password: "torun",
      role_id: 2,
    },
    {
      username: "IvannaPuke",
      password: "letsgo",
      role_id: 2,
    },
  ]);
};
