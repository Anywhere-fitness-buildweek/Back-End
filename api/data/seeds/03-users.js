exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "SwoleMeathead",
      password: "gains",
      role: 1,
    },
    {
      username: "WiiFitTrainer",
      password: "yoga",
      role: 1,
    },
    {
      username: "CalLories",
      password: "cardio",
      role: 1,
    },
    {
      username: "MaxTreme",
      password: "crossfit",
      role: 1,
    },
    {
      username: "SaulLazy",
      password: "couch",
      role: 2,
    },
    {
      username: "JanFirst",
      password: "newme",
      role: 2,
    },
    {
      username: "BenTold",
      password: "torun",
      role: 2,
    },
    {
      username: "IvannaPuke",
      password: "letsgo",
      role: 2,
    },
  ]);
};
