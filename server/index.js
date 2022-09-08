import http from 'http';
import express from 'express';
import { injectSocketIO } from './injectSocketIO.js';
import { env } from '../build/env.js';
import { handler } from '../build/handler.js';
import { allowedOriginsExpressMiddleware } from './allowedOrigins.js';


const app = express();
const server = http.createServer(app);

// Inject SocketIO
injectSocketIO(server);

app.use(allowedOriginsExpressMiddleware);

// SvelteKit handlers
app.use(handler);

const path = env('SOCKET_PATH', false);
const host = env('HOST', '0.0.0.0');
const port = env('PORT', !path && '3000');

console.log('Attempting Server connection on PORT: ', port);

server.listen({ path, host, port }, () => {
    console.log(`Listening on ${path ? path : host + ':' + port}`);
});