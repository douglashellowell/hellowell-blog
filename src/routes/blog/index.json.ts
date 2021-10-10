import type { Locals } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { slugFromPath } from '$lib/utils';

export const get: RequestHandler<Locals> = async (request) => {
	// https://vitejs.dev/guide/features.html#glob-import
	// get path & resolver func for all blog markdowns
	const modules = import.meta.glob('./*.svelte.md');
	const postPromises: PostMetaData[] = [];

	for (let [path, resolver] of Object.entries(modules)) {
		// for each one get the slug and metadata
		const slug = slugFromPath(path);
		const post = await resolver();
		postPromises.push({
			slug,
			...post.metadata
		});
	}

	/** posts below look like this
[
  {
    slug: 'hello',
    title: 'test-post',
    description: 'dougs first post',
    date: '10/10/21',
    published: true
  }
]
	 */
	const posts = await Promise.all(postPromises);

	// filter out ones that aren't published yet
	const publishedPosts = posts.filter((post) => post.published);

	return {
		body: publishedPosts
	};
};
