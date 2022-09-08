<script>
	import '../tailwind.css';
	import '../app.scss';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import { destroyIoClient } from '$lib/socket/connection';
	import { Navbar } from '$lib/Navbar';
	import { NavProgress } from '$lib/NavProgress';

	export let data = {};

	const layoutData = writable(data);
	setContext('LAYOUT_DATA', layoutData);

	$: if (data !== $layoutData) {
		$layoutData = data;
	}

	onMount(() => {
		return destroyIoClient;
	});
</script>

{#if browser}
	<NavProgress />
{/if}

<Navbar />
<main class="min-h-[calc(100vh-5.25rem)] pt-16">
	<slot />
</main>

<footer
	class="h-16 w-full flex items-center px-5 text-slate-100 bg-stone-700 mt-5"
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
