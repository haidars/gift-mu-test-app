import { browser } from '$app/environment';
import ioClientConnection from 'socket.io-client';
import { socketStore } from './store';


let io;

if (browser) {

    io = ioClientConnection(import.meta.env.VITE_IO_ENDPOINT ?? undefined);

    io.on('name', sid => {

        socketStore.update(state => ({ ...state, connecting: false, sid }));
        console.log({ sid });
    });

    io.on('message', (message) => {
        socketStore.update(({ messages, ...state }) => ({ ...state, messages: [...messages, { ...message, time: new Date(message.time) }] }));
    });
}

export const destroyIoClient = () => {

    io?.off('message');
    io?.off('name');
};

export const emitPing = () => {

    io?.emit('ping');
};

export const ioClient = io;

export default ioClient;
