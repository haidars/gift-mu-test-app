<script>
	import { dateFormater } from '$lib/dateFormater';
	import { IconHash } from '$lib/IconHash';
	import { emitPing } from '$lib/socket/connection';
	import { socketStore } from '$lib/socket/store';

	$: ({ messages } = $socketStore);

	$: console.log({ messages });
</script>

<section class="w-[52rem] flex flex-col gap-2 items-center pt-5 mx-auto">
	<button
		on:click={emitPing}
		class="bg-green-400 flex gap-1 items-center justify-center text-stone-800 rounded-xl px-8 py-2 shadow-md ring-green-200 transition-all duration-200 ease-in-out hover:bg-green-300 hover:text-stone-700 focus:ring focus:ring-offset-2 active:ring active:ring-offset-0"
		type="button"
	>
		<IconHash class="h-5 aspect-square" />
		<b>Ping</b>
	</button>
	<div
		class="w-full min-h-[5rem] flex flex-col gap-2 shadow-inner rounded bg-slate-200 px-4 py-2"
	>
		{#each messages as message}
			{#if message.type === 'ping'}
				<div
					class:justify-end={message.from === $socketStore.sid}
					class="w-full flex items-center"
				>
					<div
						class:bg-blue-300={message.from === $socketStore.sid}
						class:bg-white={message.from !== $socketStore.sid}
						class="flex flex-col py-2 px-3 rounded-xl shadow-md bg-blue-300"
					>
						<div class="text-xs text-stone-700 italic">
							{message.from === $socketStore.sid
								? 'You'
								: `#${message.from}`}
						</div>
						<div class="text-sm">
							Pinged @
							{dateFormater(message.time, {
								includeTime: true,
								showSeconds: true,
								noDayOfWeek: true,
								abvMonth: true,
							})}
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>
