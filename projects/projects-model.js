const db = require('../data/db.config');

function getProjects(){
    return db.select('*')
    .from('projects')
};


module.exports = {
    getProjects,
}