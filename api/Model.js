const db = require("../data/dbConfig.js");

module.exports = {
    findProjects,
    findTasks,
    // findResources,
    addProjects,
    addTasks,
    // addResource
};

function findProjects() {
    return db('projects')
}

function findTasks() {
    return db('tasks')
    .join('project', 'project_name', 'project_description')
}

function addProjects(projectBody) {
    return db('projects')
    .insert(projectBody);
  };

// function findResources() {
//     return db('resources');
// }

// function addResource(resourceBody)
// return db('resources')
//     .insert(resourceBody)
   


function addTasks(projectId, taskBody) {
    return db('tasks')
        .join('project', 'project.project_id', 'tasks.project_id')
        .insert(taskBody)
        .where('tasks.project_id', projectId)
}





