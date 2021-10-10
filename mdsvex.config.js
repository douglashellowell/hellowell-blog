import relativeImages from 'mdsvex-relative-images';

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [relativeImages],
	rehypePlugins: []
};

export default config;
