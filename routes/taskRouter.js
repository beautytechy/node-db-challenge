
const express = require("express");
const router = express.Router();
const Model = require("../api/Model.js")


router.get("/:id", (req, res) => {
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

router.post("/tasks", (req, res) => {
  const taskBody = req.body
    Model.addTasks(projectID, taskBody)
         .then(tasks => {
             res.status(200).json(tasks);
         })
         .catch(err => res.status(500).json({ message: 'Error: POST task' }))
 });



    

module.exports = router;

