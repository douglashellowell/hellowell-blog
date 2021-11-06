<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
	import '../code.css';
</script>

<div id="main-column">
	<Header />

	<main>
		<div class="main-wrapper">
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
		min-height: calc(100vh - 100px);
	}

	footer {
		height: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $themeRed;
		p {
			color: white;
		}
	}

	@media (max-width: $mob-breakpoint) {
		#main-column {
			width: 100%;
		}
	}
</style>
