
exports.seed = function(knex, Promise) {
      return knex('resources').insert([
        {resource_name: 'computer', resource_description:'laptop'},
        {resource_name: 'paper', resource_description:'notebook'},
        {resource_name: 'saw', resource_description:'tableSaw'},
        {resource_name: 'wood'},
      ]);
};
