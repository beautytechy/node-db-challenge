
exports.seed = function(knex) {

  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {id: 1, name: 'NicoleMe', description: 'My seed1', completed: "false"},
        {id: 2, name: 'NicoleLe', description: 'My seed2', completed: "false"},
        {id: 3, name: 'NicoleTree', description: 'My seed3', completed: "true"}
      ]);
    });
};
