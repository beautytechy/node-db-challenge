const db = require("../data/dbConfig.js");

module.exports = {
    findProjects,
    findTasks,
    findResources,
    addProjects,
    // addTasks,
    // addResource
};

function findProjects() {
    return db('projects')

}

function findResources() {
    return db('resources');

}
// function addResource(resourceBody)
// return db('resources')
//     .insert(resourceBody, "id")
   


function addProjects(body) {
    return db('project')
        .insert(body)
}



function addTasks(projectId, body) {
    return db('tasks')
        .join('project', 'project.project_id', 'tasks.project_id')
        .insert(body)
        .where('tasks.project_id', projectId)
}

function findTasks() {
    return db('tasks')
        

}



