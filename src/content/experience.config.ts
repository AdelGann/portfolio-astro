import { defineCollection, z } from "astro:content";

const experienceSchema = z.object({
	title: z.string(),
	description: z.string(),
	img: z.string().url(),
	technologies: z.array(z.string()),
	type: z.string(),
	duration: z.string(),
});
export interface ExperienceInterface {
	title: string;
	description: string[];
	img: string;
	technologies: string;
	duration: string;
	type: string;
}

export const experience = defineCollection({
	schema: experienceSchema,
});
