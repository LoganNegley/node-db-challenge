
exports.seed = function(knex, Promise) {
      return knex('tasks').insert([
        {task_description: 'Buy wood', notes:'cedar wood', task_completed:false, project_id: 2},
        {task_description: 'Get tools', notes:'saw', task_completed:false, project_id: 2},
        {task_description: 'complete math work', notes:'its going to be hard', task_completed:false, project_id: 1},
        {task_description: 'get calculator', task_completed:false, project_id: 2},
      ]);
};
