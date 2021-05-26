exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "SwoleMeathead",
      password: "$2a$08$qJOFDOnjbg53t3DT3Mbz8udTaR92FHLg/CpYYa1JJI2mlDnhwKT.C",
      role_id: 1,
    },
    {
      username: "WiiFitTrainer",
      password: "$2a$08$exJW3H3vZNac8EXUpDqHcuwbVHbKE8FuQqoqBjnHPJLazioX33kru",
      role_id: 1,
    },
    {
      username: "CaLory",
      password: "$2a$08$UDukm1Y8WLyklYquKZEjPesJctcthDLcUzn/dSL/GOBh7ADXqv31i",
      role_id: 1,
    },
    {
      username: "MaxTreme",
      password: "$2a$08$jCw6GFsTYT4jUkwptZ.U9ufidrehd2JyZUVpiiCfJrgqvBBlp5/Eu",
      role_id: 1,
    },
    {
      username: "SaulLazy",
      password: "$2a$08$cTI7GnuvfKmb8ayc6bjLJ.ZSbu4B9aJqzcCdSD4idX19ksFQJhQV2",
      role_id: 2,
    },
    {
      username: "JanFirst",
      password: "$2a$08$/z04VhxXAZEmDXylch0/MOdEYRV4wYoq5rWd.r7Fyx77.fbpXSjRu",
      role_id: 2,
    },
    {
      username: "BenTold",
      password: "$2a$08$.vi5lv.iHPbySTjDp0QFXOQEB8JxWbOqnQ/reilD0b/vvqpwwpWWi",
      role_id: 2,
    },
    {
      username: "IvannaPuke",
      password: "$2a$08$qcD5VTKd/bZ1mrQkFVz3dOSbzGqNaLoTFrvAryYuB1/fFzbeYfJ1e",
      role_id: 2,
    },
  ]);
};
