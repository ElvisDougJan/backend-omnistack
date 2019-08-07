const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.send('API de teste')
})

server.listen(3000, () => console.log('App rodando em http://localhost:3000'))