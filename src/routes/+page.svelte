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
		<video>
			<source src="https://res.cloudinary.com/lasucrerie/video/upload/v1695225600/La_Sucrerie_-_Teaser_2023_-_V2.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</section>
</div>

<style>

</style>
