<script>
	export let title;
	export let description;
	export let heroImg;
</script>

<svelte:head>
	<title>Douglas Hellowell | {title}</title>
	<meta property="og:title" content={`Douglas Hellowell | ${title}`} />
</svelte:head>

<a href="/blog"> &lt; back to blogs</a>
<slot />
