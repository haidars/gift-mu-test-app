import { injectSocketIO } from "./injectSocketIO";


export const webSocketServer = {
    name: 'webSocketServer',
    configureServer: server => {

        injectSocketIO(server.httpServer);
    }
};

export default webSocketServer;
