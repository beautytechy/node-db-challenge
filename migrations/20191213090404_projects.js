
exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    //ID  
    tbl.increments();

      tbl.string("name").notNullable().unique();
      tbl.string("description").notNullable();
      tbl.boolean("completed").notNullable().defaultTo(false);;
  })
  
  
  .createTable("tasks", tbl => {
    //ID  
    tbl.increments();
  
    tbl.string("description").notNullable()
    tbl.string("notes")
    tbl.boolean("completed").notNullable().defaultTo(false);;
    
  })

 .createTable("resources", tbl => {
  //ID  
  tbl.increments();

  tbl.string("name").notNullable()
  tbl.string("description")
  
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
  
};
