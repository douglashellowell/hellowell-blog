<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg> -->
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path.startsWith('/blog')}>
				<a sveltekit:prefetch href="/blog">blog</a>
			</li>
		</ul>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg> -->
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0px;
		background: $doug-orange;
		z-index: 99;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
	$background: rgba(255, 255, 255, 0.7);
	$size: 6px;

	nav {
		display: flex;
		justify-content: center;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: $background;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: $background;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	/* li.active::before {
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - $size);
		border: $size solid transparent;
		border-top: $size solid $accent-color;
	} */

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: $heading-color;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: $accent-color;
	}

	li.active {
		background: black;

		& > a {
			color: white;
		}
	}
</style>
