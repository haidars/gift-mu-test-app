import { writable } from 'svelte/store';


export const socketStore = writable({ connecting: true, username: null });

export default socketStore;
