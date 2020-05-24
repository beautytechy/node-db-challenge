exports.seed = function(knex) {

    return knex('resources').truncate()
      .then(function () {
        return knex('resources').insert([
          {id: 1, name: 'NicoleMe', description: 'My seed1'},
          {id: 2, name: 'NicoleLe', description: 'My seed2'},
          {id: 3, name: 'NicoleTree', description: 'My seed3'}
        ]);
      });
  };