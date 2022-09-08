import { injectSocketIO } from './injectSocketIO.js';


export const webSocketServer = {
    name: 'webSocketServer',
    configureServer: server => {

        injectSocketIO(server.httpServer);
    }
};

export default webSocketServer;
