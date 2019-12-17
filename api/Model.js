const db = require("../data/dbConfig.js");

module.exports = {
    findProjects,
    findTasks,
    findResources,
    addProjects,
    addTasks,
    addResource
};

function findProjects() {
    return db('projects')
}

function findTasks(id) {
    return db('projects')
        .join('tasks', 'projects.id', '=', 'tasks.project_id')
        .where('projects.id', id)
}


function addTasks(taskBody) {
    return db('tasks')
        .insert(taskBody)
}

function addProjects(projectBody) {
    return db('projects')
        .insert(projectBody);
};

function findResources() {
    return db('resources');
}

function addResource(resourceBody) {
    return db('resources')
        .insert(resourceBody)
}






