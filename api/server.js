const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const classRouter = require('./classes/classes-router');

const server = express()



server.use(express.json())
server.use(helmet())
server.use(cors())
server.use((err,req,res,next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,stack: err.stack
    })
})

server.use("/api/classes", classRouter);

module.exports = server