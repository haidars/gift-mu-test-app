import { writable } from 'svelte/store';


export const socketStore = writable({ connecting: true, sid: null });

export default socketStore;
