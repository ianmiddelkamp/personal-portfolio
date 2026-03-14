import { defineCollection, z } from "astro:content";

const caseStudies = defineCollection({
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        company: z.string(),
        date: z.number(),
        tech: z.array(z.string()),
    }),
});

export const collections = {
    "case-studies": caseStudies,
};