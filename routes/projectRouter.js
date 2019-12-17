
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

router.post("/", (req, res) => {
    const projectBody = req.body
    Model.addProjects(projectBody)
        .then(project => {
            console.log(project)
            res.status(200).json(project);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error: POST projects' })
        })

})



module.exports = router;

