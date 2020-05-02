const db = require('../data/db.config');

function getProjects(){
    return db.select('*')
    .from('projects')
};

function getResources(){
    return db.select('*')
    .from('resources')
}

function getTasks() {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "tasks.project_id",
      "projects.project_name",
      "projects.project_description",
      "tasks.id",
      "tasks.task_description",
      "tasks.notes",
      "tasks.task_completed"
    );
}

function addProject(project){
    return db('projects')
    .insert(project)
}

function addResource(){

}

function addTask(){

}

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
}