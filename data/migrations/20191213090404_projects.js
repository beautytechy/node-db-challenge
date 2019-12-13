
exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    //ID  
    tbl.increments();

      tbl.string("name").notNullable().unique();
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl.boolean("completed").notNullable().defaultTo(false);;
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects");
  
};
