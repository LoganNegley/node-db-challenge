
exports.up = function(knex) {
  return(
      knex.schema
      .createTable('projects', tbl =>{
          tbl.increments();
          tbl.string('project_name')
          .notNullable()
          tbl.string('project_description');
          tbl.boolean('project_completed')
          .notNullable()
          .defaultTo(false);
      })
      createTable('resources', tbl =>{
          tbl.increments();
          tbl.string('resource_name')
          .unique()
          .notNullable();
          tbl.string('resource_description');
      })
      createTable('tasks', tbl =>{
          tbl.increments();
          tbl.string('task_description')
          .notNullable();
          tbl.string('notes');
          tbl.boolean('task_completed')
          .notNullable()
          .defaultTo(false);
          tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      })
      createTable('resourceList', tbl =>{
          tble.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
          tbl.integer('resource_id')
          .unsigned()
          .references('id')
          .inTable('resources')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
          tbl.primary(['project_id', 'resource_id']);
      })
  )
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('resourceList')
    .dropTableIfExists('resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
