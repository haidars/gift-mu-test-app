import ioClientConnection from 'socket.io-client';


export const ioClient = ioClientConnection(import.meta.env.VITE_IO_ENDPOINT ?? undefined);

export default ioClient;
