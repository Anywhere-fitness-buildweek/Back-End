//exports.up = async (knex) => {
// await knex.schema
//  .createTable('users', (users) => {
//     users.increments('user_id')
//     users.string('user_username', 200).notNullable()
//     users.string('user_password', 200).notNullable()
//     users.string('user_email', 320).notNullable()
//     users.timestamps(false, true)
//   })
// }

// exports.down = async (knex) => {
//    await knex.schema.dropTableIfExists('users')
// }
exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("locations", (tbl) => {
      tbl.increments();
      tbl.string("class_name", 128).notNullable();
    })
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
      tbl
        .integer("role")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("roles")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("classes", (tbl) => {
      tbl.increments();
      tbl.string("class_name", 128).notNullable();
      tbl
        .integer("class_instructor")
        .notNullable()
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("class_location", (tbl) => {
      tbl.increments();
      tbl.string("class_location").notNullable();
      tbl.string("date").notNullable();
      tbl.string("start_time").notNullable();
      tbl
        .integer("location_id")
        .notNullable()
        .unsigned()
        .references("location_id")
        .inTable("locations")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("class_id")
        .notNullable()
        .unsigned()
        .references("class_id")
        .inTable("classes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("instructor_id")
        .notNullable()
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("class_students", (tbl) => {
      tbl.increments();
      tbl
        .integer("class_id")
        .notNullable()
        .unsigned()
        .references("class_id")
        .inTable("classes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("class_students")
    .dropTableIfExists("class_location")
    .dropTableIfExists("classes")
    .dropTableIfExists("users")
    .dropTableIfExists("locations")
    .dropTableIfExists("roles");
};
