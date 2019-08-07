const routes = require('express').Router()
const DevControler = require('./controllers/DevController')

routes.post('/devs', (req, res) => {
  DevControler.store(req, res)
})

module.exports = routes
