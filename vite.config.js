import { sveltekit } from '@sveltejs/kit/vite';
import { webSocketServer } from './server/webSocketServer.js';

const config = {
	server: {
		port: 50001
	},
	preview: {
		port: 50001
	},
	plugins: [sveltekit(), webSocketServer]
};

export default config;
