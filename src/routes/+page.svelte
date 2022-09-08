<script>
	import { IconHeart } from '$lib/IconHeart';
	import { socketStore } from '$lib/socket/store';
</script>

<section class="w-full flex flex-col pt-10">
	<h1 class="text-5xl w-full text-center">
		<b class="text-blue-600">I'm alive</b>
	</h1>
	<div class="w-full flex justify-center h-40 py-2 px-3">
		<div class="heart-container h-full aspect-square">
			<IconHeart solid class="h-full w-full text-red-700" />
		</div>
	</div>

	<p class="text-center">And my name is</p>
	<p class="text-center font-bold">#{$socketStore.username}</p>

	<a href="/todos">Try my To do list here</a>
</section>

<style lang="scss">
	.heart-container {
		animation: animateHeart 1.2s infinite;
	}

	@keyframes animateHeart {
		// scale down and scale up faster in irregular intervals to get the throbbing effect
		0% {
			transform: scale(0.8);
		}
		5% {
			transform: scale(0.9);
		}
		10% {
			transform: scale(0.8);
		}
		15% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.8);
		}
		100% {
			transform: scale(0.8);
		}
	}
</style>
