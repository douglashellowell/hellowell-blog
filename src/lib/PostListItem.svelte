<script lang="ts">
	export let postItem: PostMetaData;
</script>

<a href="/blog/{postItem.slug}">
	<li>
		<div class="side-bar"><span>{postItem.topic}</span></div>
		<div class="post-content">
			{#if postItem.heroImg}
				<img src="/images/{postItem.heroImg}" alt={postItem.title} />
			{/if}
			<p class="post-title">{postItem.title}</p>
			<p class="post-date">{postItem.date}</p>
			<p class="post-desc">{postItem.description}</p>
		</div>
	</li>
</a>

<style lang="scss">
	li {
		@include list-item;
		background-color: $primary-colour;
		/* padding: 1rem; */
		display: flex;
		flex-direction: row;
	}

	.post-content {
		padding: 1rem;
	}

	.side-bar {
		width: 65px;
		background-color: black;
		padding-top: 1rem;

		span {
			writing-mode: sideways-lr;
			font-size: 3rem;
			text-align: center;
		}
	}

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.post-title {
		font-size: 2rem;
		padding: 0;
		margin: 0;
		text-transform: uppercase;
	}

	.post-date,
	.post-desc {
		color: grey;
		padding: 0;
		margin: 0;
	}
</style>
