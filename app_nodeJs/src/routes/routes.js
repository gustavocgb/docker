const { Router } = require('express');
const routes = Router();
const path = require('path')

const controller = require('../controllers/Controller');

// default
routes.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve()), 'public/frontEnd/index.html')
})

// routes
routes.post('/save', controller.store);

module.exports = routes;