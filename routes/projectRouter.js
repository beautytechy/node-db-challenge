
const express = require("express");

const router = express.Router();
const Model = require("../api/Model.js")


router.get("/", (req, res) => {
    Model.findProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => res.status(500).json({ message: 'Error: GET projects' }))
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

