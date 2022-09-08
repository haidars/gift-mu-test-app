<script>
	import '../tailwind.css';
	import '../app.scss';
	import { onMount } from 'svelte';
	import { ioClient } from '$lib/socket/connection';
	import { socketStore } from '$lib/socket/store';

	let messages = [];

	onMount(() => {
		ioClient.on('name', (name) => {
			$socketStore.connecting = false;
			$socketStore.username = name;
		});

		ioClient.on('message', (message) => {
			messages = [...messages, message];
		});

		return () => {
			ioClient.off('message');
			ioClient.off('name');
		};
	});
</script>

<main class="min-h-[calc(100vh-2.5rem)]">
	<slot />
</main>

<footer
	class="h-10 w-full flex items-center justify-end px-5 bg-slate-100 border border-slate-200">
	<p class="text-sm">
		Client environment: <i class="text-xs">{import.meta.env.VITE_ENV}</i>
	</p>
</footer>
