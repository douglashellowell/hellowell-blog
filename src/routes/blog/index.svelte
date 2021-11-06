<script context="module" lang="ts">
	console.log('hello from blog page');
	import type { Load } from '@sveltejs/kit';

	export const prerender = true;

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/blog.json');

		if (res.ok) {
			const blogPosts: PostMetaData[] = await res.json();
			const topics = Array.from(new Set(blogPosts.map((post) => post.topic)));
			return {
				props: { blogPosts, topics }
			};
		} else {
			const { message } = await res.json();

			return {
				error: new Error(message)
			};
		}
	};
</script>

<script lang="ts">
	import PostListItem from '$lib/PostListItem.svelte';
	import { post } from '../todos/index.json';

	// export const prerender = true;

	export let blogPosts: PostMetaData[];
	export let topics: string[];

	let filter = '';

	$: postsToDisplay = blogPosts.filter((post) => post.topic === filter || filter === '');
</script>

<svelte:head>
	<title>Douglas Hellowell | Blog</title>
</svelte:head>

<label class:selected={filter === ''}>All<input type="radio" bind:group={filter} value="" /></label>
{#each topics as topic}
	<label class:selected={filter === topic}
		>{topic}<input type="radio" bind:group={filter} value={topic} /></label
	>
{/each}
<!-- <label class:selected={filter === 'personal'}
	>Personal<input type="radio" bind:group={filter} value="personal" /></label
> -->

<ul>
	{#each postsToDisplay as post}
		<PostListItem postItem={post} />
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	input[type='radio'] {
		appearance: none;

		/* &:focus {
			position: relative;
			top: 0;
			left: -10px;
			width: 100%;
			outline-color: $doug-orange;
			outline-style: solid;
			outline-width: 5px;
		} */
	}

	label {
		padding: 0.5rem;
		margin: 0;
		cursor: pointer;
	}

	.selected {
		/* content: '!';
		position: sticky;
		left: -1px;
		top: 0; */
		padding-left: 1rem;
		color: white;
		font-weight: 700;
		background: black;
	}
</style>
