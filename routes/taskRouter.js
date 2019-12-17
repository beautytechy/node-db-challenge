
const express = require("express");
const router = express.Router();
const Model = require("../api/Model.js")


router.get("/:id", (req, res) => {
  const { id } = req.params;
  Model.findTasks(id)
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("", (req, res) => {
  const taskBody = req.body
  Model.addTasks(taskBody)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => res.status(500).json({ message: 'Error: POST task' }))
});





module.exports = router;

