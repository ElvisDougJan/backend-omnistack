const routes = require('express').Router()
const DevControler = require('./controllers/DevController')
const LikeControler = require('./controllers/LikeController')
const DislikeControler = require('./controllers/DislikesController')

routes.post('/devs', DevControler.store)
routes.get('/devs', DevControler.index)
routes.post('/devs/:devId/like', LikeControler.store)
routes.post('/devs/:devId/dislike', DislikeControler.store)

module.exports = routes
