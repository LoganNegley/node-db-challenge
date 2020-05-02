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

router.get('/resources', (req,res) =>{
    db.getResources()
    .then(resources =>{
        res.status(200).json(resources)
    })
    .catch(error =>{
        res.status(500).json({
            errorMessage: 'Unable to get list of resources'
        })
    })
})

router.get('/tasks', (req,res) =>{
    db.getTasks()
    .then(tasks =>{
        res.status(200).json(tasks)
    })
    .catch(error =>{
         console.log(error)
        res.status(500).json({
           
            errorMessage: 'Unable to get tasks'
        })
    })
})

router.post('/', (req,res) =>{
    db.addProject(req.body)
    .then(project =>{
        res.status(201).json(project)
    })
    .catch(error =>{
        res.status(500).json({
            errorMessage:'Unable to add project'
        })
    })
})

module.exports = router;