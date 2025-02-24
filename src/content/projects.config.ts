import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
	title: z.string(),
	description: z.string(),
	img: z.string().url(),
	type: z.string(),
	technologies: z.string(),
	link: z.string().url(),
	github: z.string().url(),
});
export interface ProjectInterface {
	title: string;
	description: string;
	img: string;
	type: string;
	github: string;
	link: string;
	technologies: string;
}

export const projects = defineCollection({
	schema: projectSchema,
});
