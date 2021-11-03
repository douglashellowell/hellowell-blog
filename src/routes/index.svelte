<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Douglas Hellowell | Home</title>
</svelte:head>

<section>
	<h1>Hey there!</h1>
	<img src="images/dougmoji.png" alt="dougs face" />
	<div class="boring-self-wrapper">
		<p>Oh heck, how do you talk about yourself?</p>
		<p>
			I'm a coder, guitar player, coffee drinker, city explorer, events organiser, bad joke maker,
			UX/UI eyeballer, a11y champion
		</p>
		<p>
			I'm currently a Software Dev, Tutor and Seminar Lead at the Northcoders Bootcamp in
			Manchester, UK
		</p>
		<p>This is a site for me to put down my ideas, music and fun code related content!</p>
		<p>Head over to <a href="blog">my blog</a> to read some things i've written!</p>
	</div>
</section>

<style>
	img {
		width: 100px;
		margin-bottom: 2rem;
	}

	.boring-self-wrapper {
		width: 80%;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
