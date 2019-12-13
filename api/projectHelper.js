const db = require("../../data/dbConfig");

module.exports = {
   findProjects,
    findTasks,
    findResources,
    findByProjectById,
    addProjects,
    addTasks,
    addResources
  };

  function findProjects() {
    return db("resources")
    .join("project", "project.project_id", "resources.resources_id")
    .select(
      "project.project_name",
      "project.project_description",
      "resources.resource_name",
      "resources.resource_description",
    );
  };

  function findTasks() {};

  function findResources() {};

  function findByProjectById() {};

  function addProjects() {};

  function addTasks() {};
  
  function addResources() {};