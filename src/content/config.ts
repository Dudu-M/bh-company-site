import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    image: z.string(),
    category: z.string().optional(),
    spotlight: z.boolean().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    image: z.string(),
    status: z.enum(['ongoing', 'completed', 'planned']).optional(),
    location: z.string().optional(),
    year: z.string().optional(),
  }),
});

const documentsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    fileUrl: z.string(),
    fileType: z.enum(['pdf', 'doc', 'xls', 'ppt']),
    fileSize: z.string().optional(),
    date: z.coerce.date(),
    description: z.string().optional(),
    password: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
  projects: projectsCollection,
  documents: documentsCollection,
};