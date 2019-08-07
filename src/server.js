const express = require('express')
const server = express()

server.get('/', (req, res) => {
  return res.json({ message: `Ola ${req.query.name}` })
})

server.listen(3000, () => console.log('App rodando em http://localhost:3000'))