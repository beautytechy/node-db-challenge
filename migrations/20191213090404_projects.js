
exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    //ID  
    tbl.increments();

      tbl.string("name").notNullable().unique();
      tbl.string("description").notNullable()
  })
};

exports.down = function(knex) {
  
};
