
const express = require("express");

const router = express.Router();
const Model = require("../api/Model.js")


router.get("/", (req, res) => {
   Model.findResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => res.status(500).json({ message: 'Error: GET resources' }))
});

router.post("/", (req, res) => {
    const resourceBody = req.body
    Model.addResources(resourceBody)
         .then(resources => {
             res.status(200).json(resources);
         })
         .catch(err => res.status(500).json({ message: 'Error: POST resources' }))
 });

 

module.exports = router;

