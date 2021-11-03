<script context="module" lang="ts">
	import { browser, dev } from '$app/env';
	import { onMount } from 'svelte';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Douglas Hellowell | About</title>
</svelte:head>

<div class="content">
	<h1>About me</h1>

	<img src="images/dougmoji.png" alt="dougs face" />

	<div class="boring-self-hype-wrapper" />
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.boring-self-hype-wrapper {
		margin-top: 1rem;
		width: 80%;
	}
	img {
		width: 100px;
	}
</style>
