import { getCollection } from 'astro:content'

export const getStaticPaths = async () => {
	const blogEntries = await getCollection('posts')

	return blogEntries.map((entry) => ({
		params: { slug: entry.slug },
		props: { entry },
		featured: entry.data.featured ?? false,
	}))
}
