<script lang="ts">
	import { page } from '$app/stores';

	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
	import '../code.css';
</script>

<div id="main-column">
	<Header />

	<main>
		<div class="main-wrapper">
			{#if $page.path.startsWith('/blog/')}
				<a href="/blog"> &lt; back to blogs</a>
			{/if}
			<slot />
		</div>
	</main>

	<footer>
		<p>Douglas Hellowell</p>
	</footer>
</div>

<style lang="scss">
	#main-column {
		width: 80vw;
		max-width: 950px;
		margin: 0 auto;
		box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.425);
	}

	.main-wrapper {
		width: 90%;
		max-width: 650px;
		margin: 0 auto;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
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
		/* padding: 20px; */
		color: white;
		background-color: $themeRed;
	}

	@media (max-width: 600px) {
		#main-column {
			width: 100%;
		}
	}
</style>
