// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/news' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    date: z.coerce.date(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/pages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/events' }),
  schema: z.object({
    title: z.string(),
    date_start: z.coerce.date(),
    date_end: z.coerce.date().optional(),
    time: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = { news, pages, events };
