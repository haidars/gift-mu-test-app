import { Server } from 'socket.io';
import { allowedOriginsSocketIOMiddleware } from './allowedOrigins.js';


export const injectSocketIO = server => {

    const io = new Server(server, {
        cookie: false,
        cors: {
            // origin: (_, callback) => {

            //     callback(null, true);
            //     return;
            // },
            origin: allowedOriginsSocketIOMiddleware,
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }
    });

    io.on('connection', (socket) => {

        const username = `User ${Math.round(Math.random() * 999999)}`;

        socket.emit('name', username);

        socket.on('message', message => {

            io.emit('message', {
                from: username,
                message: message,
                time: new Date().toLocaleString()
            });
        });
    });

    console.log('SocketIO injected');
};

export default injectSocketIO;
