const express = require('express');
const ProjectsRouter = require('../projects/projects-Router');

const server = express();
server.use(express.json());
server.use('/api/projects', ProjectsRouter);

server.get('/', (req,res) =>{
    res.json({
        api: 'running'
    })
});

module.exports = server