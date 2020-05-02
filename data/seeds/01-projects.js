
exports.seed = function(knex, Promise) {
      return knex('projects').insert([
        { project_name: 'Homework project', project_description:'Do homework on computer' project_completed: false},
        { project_name: 'Bookshelf', project_description:'Make bookshelf'},
      ]);
};
