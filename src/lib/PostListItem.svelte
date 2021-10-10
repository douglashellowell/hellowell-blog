<script lang="ts">
	export let postItem: PostMetaData;
</script>

<a href="/blog/{postItem.slug}">
	<li>
		<img src="/images/{postItem.heroImg}" alt={postItem.title} />
		<p class="post-title">{postItem.title}</p>
		<p class="post-date">{postItem.date}</p>
		<p class="post-desc">{postItem.description}</p>
	</li>
</a>

<style lang="scss">
	li {
		@include list-item;
		background-color: $primary-colour;
		padding: 1rem;
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
