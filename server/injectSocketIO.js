import { Server } from 'socket.io';
import { allowedOriginsSocketIOMiddleware } from './allowedOrigins.js';


export const injectSocketIO = server => {

    const io = new Server(server, {
        cookie: false,
        cors: {
            origin: allowedOriginsSocketIOMiddleware,
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }
    });

    io.on('connection', (socket) => {

        const sid = `${socket.id}`;

        socket.emit('name', sid);

        socket.on('ping', () => {

            io.emit('message', {
                from: sid,
                type: 'ping',
                time: new Date().toUTCString()
            });
        });
    });

    console.log('SocketIO injected');
};

export default injectSocketIO;
