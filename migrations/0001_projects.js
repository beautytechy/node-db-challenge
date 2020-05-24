
exports.up = function (knex) {
  return knex.schema.createTable("projects", tbl => {
    //ID  
    tbl.increments();

    tbl.string("name").notNullable().unique();
    tbl.string("description").notNullable();
    tbl.boolean("completed").defaultTo(false);;
  })


    .createTable("tasks", tbl => {
      //ID  
      tbl.increments();

      tbl.string("description").notNullable()
      tbl.string("notes")
      tbl.boolean("completed").defaultTo(false)
      tbl.integer("project_id").unsigned().notNullable().references("id").inTable("projects").onDelete("CASCADE")

    })

    .createTable("resources", tbl => {
      //ID  
      tbl.increments();

      tbl.string("name").notNullable().unique()
      tbl.string("description")

    })

    .createTable("resource_projects", tbl => {
      tbl.increments()

      tbl.integer("resource_id").unsigned().notNullable().references("id").inTable("resources").onDelete("CASCADE")
      tbl.integer("project_id").unsigned().notNullable().references("id").inTable("projects").onDelete("CASCADE");
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");

};
