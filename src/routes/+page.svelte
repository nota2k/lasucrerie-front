<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import { on } from 'svelte/events';

	onMount(() => {
		AOS.init();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="home" />
</svelte:head>

<div id="pagepiling-home" style="overflow: hidden; touch-action: none;">
	<section>
	</section>
</div>

<style>
</style>
