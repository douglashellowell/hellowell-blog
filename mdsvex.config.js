import relativeImages from 'mdsvex-relative-images';

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		blog: './src/routes/blog/layout.svelte'
	},

	remarkPlugins: [relativeImages],
	rehypePlugins: []
};

export default config;
