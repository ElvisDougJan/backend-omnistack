const express = require('express')
const server = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const porta = process.env.PORT || 3000
const cors = require('cors')

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-6tvwh.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true })

server.use(express.json())
server.use(routes)
server.use(cors())

server.listen(porta, () => console.log(`App rodando em http://localhost:${porta}`))
