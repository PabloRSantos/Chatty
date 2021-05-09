import './database'

import express from 'express'
import { routes } from './routes';
import { Server, Socket } from 'socket.io'
import { createServer } from 'http'
const app = express()

const http = createServer(app)
const io = new Server(http)

io.on('connection', (socket: Socket) => {

})

app.use(express.json());
app.use(routes)

export { http, io }