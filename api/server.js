const express = require('express');
const { OPEN_READWRITE } = require('sqlite3');
const server = express();

// Routers
const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')

// Communicating in JSON
server.use(express.json())

// Making sure we got a signal
server.get('/', (req, res) => {
    res.send('Server is sending messages back.')
})

// Connecting Router

server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

// Complete your server here!
// Do NOT `server.listen()` inside this file!

module.exports = server;
