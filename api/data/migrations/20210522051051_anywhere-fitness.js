exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("locations", (tbl) => {
      tbl.increments();
      tbl.string("location", 128).notNullable();
    })
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
      tbl
        .integer("role_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("roles")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("classes", (tbl) => {
      tbl.increments("class_id");
      tbl.string("class_name", 128).notNullable();
      tbl.string("type", 128).notNullable();
      tbl.string("level", 128).notNullable();
      tbl.string("duration", 128).notNullable();
      tbl.string("classSize", 128).notNullable();

      tbl
        .integer("class_instructor")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("class_location", (tbl) => {
      tbl.increments();
      tbl.string("date");
      tbl.string("start_time");
      tbl
        .integer("location_id")
        .notNullable()
        .unsigned()
        .references("id")
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
        .references("id")
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
