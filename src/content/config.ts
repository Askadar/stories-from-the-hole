// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: z.object({
		title: z.string(),
		time: z.string(),
		date: z.date(),
		tags: z.array(z.string()),
		image: z
			.object({
				url: z.string(),
				alt: z.string().optional(),
			})
			.optional(),
		featured: z.boolean().optional(),
	}),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	posts: blogCollection,
}
