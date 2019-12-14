
const express = require("express");

const router = express.Router();
const Model = require("../api/Model.js")


router.get("/:id/tasks", (req, res) => {
    const { id } = req.params;
    Model.findTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.status(200).json(tasks);
      } else {
        res.status(404).json({ message: "GET task error" })
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
  });
// router.post("/resources", (req, res) => {
//     Projects.addResource()
//          .then(resources => {
//              res.status(200).json(resources);
//          })
//          .catch(err => res.status(500).json({ message: 'Error: GET resources' }))
//  });

router.get("/projects", (req, res) => {
    Projects.findProjects()
         .then(projects => {
             res.status(200).json(projects);
         })
         .catch(err => res.status(500).json({ message: 'Error: GET projects' }))
 });

 router.get("/tasks", (req, res) => {
    Projects.findTasks()
         .then(tasks => {
             res.status(200).json(resources);
         })
         .catch(err => res.status(500).json({ message: 'Error: GET tasks' }))
 });

    

module.exports = router;

