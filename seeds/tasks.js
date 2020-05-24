exports.seed = function(knex) {

    return knex('tasks').truncate()
      .then(function () {
        return knex('tasks').insert([
          {id: 1, description: 'Most important', notes: "My notes", completed: "true"},
          {id: 2, description: 'Next important', notes: "Get it done", completed: "false"},
          {id: 3, description: 'Least important', notes: "Just do it", completed: "true"}
        ]);
      });
  };
  