import type { GetStaticPaths } from 'astro'
import { CollectionEntry, getCollection } from 'astro:content'

export type SluggedPost = {
	params: { slug: string }
	props: { entry: CollectionEntry<'posts'> }
	featured: boolean
}

export const getPosts = async () => {
	const blogEntries = await getCollection('posts')

	const posts = blogEntries.map((entry) => ({
		params: { slug: entry.slug },
		props: { entry },
		featured: entry.data.featured ?? false,
	}))
	posts.sort(
		(a, b) =>
			a.props.entry.data.date.getUTCMilliseconds() - b.props.entry.data.date.getUTCMilliseconds()
	)
	return posts
}

export const getFeatured = (posts: SluggedPost[]) => {
	return posts.filter((post) => post.featured)
}

export const getTags: GetStaticPaths = async ({ paginate }) => {
	const blogEntries = await getCollection('posts')

	let tags: { [key: string]: CollectionEntry<'posts'>[] } = {}
	for (let post of blogEntries) {
		for (let tag of post.data.tags) {
			if (Object.prototype.hasOwnProperty.call(tags, tag)) {
				tags[tag]?.push(post)
			} else {
				tags[tag] = [post]
			}
		}
	}

	return Object.entries(tags).map(([tag, posts]) =>
		paginate(posts, { params: { tag }, pageSize: 1 })
	)
}
