<script lang="ts">
	import { page } from '$app/stores';

	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
	import '../code.css';
</script>

<div id="main-column">
	<Header />

	<main>
		{#if $page.path.startsWith('/blog/')}
			<a href="/blog"> &lt; back to blogs</a>
		{/if}
		<slot />
	</main>

	<footer>
		<p>Douglas Hellowell</p>
	</footer>
</div>

<style>
	#main-column {
		width: 80vw;
		max-width: 950px;
		margin: 0 auto;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: 10px solid black;
		min-height: 80vh;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}

	@media (max-width: 600px) {
		#main-column {
			width: 100%;
		}
	}
</style>
