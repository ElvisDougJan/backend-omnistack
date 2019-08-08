const express = require('express')
const server = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const porta = process.env.PORT || 3333

server.use(express.json())
server.use(routes)
server.use(cors())

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-6tvwh.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true })

server.listen(porta, () => console.log(`App rodando em http://localhost:${porta}`))
