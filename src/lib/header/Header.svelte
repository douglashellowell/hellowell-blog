<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<!-- <li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li> -->
			<li class:active={$page.path.startsWith('/blog')}>
				<a sveltekit:prefetch href="/blog">blog</a>
			</li>
		</ul>

		<img src="images/dougmoji.png" alt="my face" />

		<ul>
			<li class="contact"><a href="/contact">Contact</a></li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
		<a href="https://github.com/douglashellowell">
			<svg
				height="32"
				aria-hidden="true"
				viewBox="0 0 16 16"
				version="1.1"
				width="32"
				data-view-component="true"
				class="octicon octicon-mark-github v-align-middle"
			>
				<path
					fill-rule="evenodd"
					d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
				/>
			</svg>
		</a>
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
		height: 50px;
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.411);
	}

	img {
		width: 50px;
		opacity: 0;

		&:hover {
			opacity: 1;
		}
	}

	$background: rgba(255, 255, 255, 0.7);
	$size: 6px;

	nav {
		display: flex;
		justify-content: space-between;
		width: 100%;
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
		width: 70px;
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

	.contact {
		background: $themeGold;
		width: unset;

		a {
			padding: 0 0.5rem;
		}

		color: white;
	}

	.corner {
		width: 3rem;
		background-color: black;
	}

	.corner a {
		color: rgb(255, 255, 255);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.octicon {
		fill: currentColor;
	}
</style>
