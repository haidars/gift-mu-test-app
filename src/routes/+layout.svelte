<script>
	import '../tailwind.css';
	import '../app.scss';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { ioClient } from '$lib/socket/connection';
	import { socketStore } from '$lib/socket/store';

	export let data = {};

	const layoutData = writable(data);
	setContext('LAYOUT_DATA', layoutData);

	let messages = [];

	$: if (data !== $layoutData) {
		$layoutData = data;
	}

	onMount(() => {
		ioClient.on('name', (name) => {
			debugger
			$socketStore.connecting = false;
			$socketStore.sid = name;
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

<main class="min-h-[calc(100vh-4rem)]">
	<slot />
</main>

<footer
	class="fixed bottom-0 left-0 right-0 h-16 w-full flex items-center px-5 text-slate-100 bg-stone-700"
>
	<div class="flex-1 flex flex-col h-full justify-center min-w-fit">
		<p class="text-xs">
			Server environment: <i>{$layoutData.env}</i>
		</p>
		<p class="text-xs">
			Server hosted: <i>{$layoutData.host}:{$layoutData.port}</i>
		</p>
	</div>
	<p class="text-xs">
		Client environment: <i>{import.meta.env.VITE_ENV}</i>
	</p>
</footer>
