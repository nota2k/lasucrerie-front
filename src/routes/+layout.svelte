<script>
	import Header from './Header.svelte';
	import '../app.css';
	import '../main.scss';
	import '../aos.css';
	export const prerender = true;
	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
	
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: black;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: var(--bg-dark);
	}

</style>
