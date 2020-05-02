const express = require('express');
const router = express.Router();

const db = require('./projects-model');

router.get('/', (req,res) =>{
    db.getProjects()
    .then(projects =>{
        res.status(200).json(projects)
    })
    .catch(error =>{
        res.status(500).json({
            errorMessage: 'Unable to get projects'
        })
    })
})

module.exports = router;