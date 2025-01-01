import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  authors: z.array(z.string()),
  conference: z.string(),
  year: z.number(),
  type: z.enum(["published", "paused"]).optional(),
  link: z.string().optional(),
});

const hlSchema = z.object({
  month: z.string(),
  date: z.coerce.date(),
  badge: z.string().optional(),
});

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
});

const storeSchema = z.object({
  title: z.string(),
  description: z.string(),
  custom_link_label: z.string(),
  custom_link: z.string().optional(),
  updatedDate: z.coerce.date(),
  pricing: z.string().optional(),
  oldPricing: z.string().optional(),
  badge: z.string().optional(),
  checkoutUrl: z.string().optional(),
  heroImage: z.string().optional(),
});

export type HLSchema = z.infer<typeof hlSchema>;
export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const hlCollection = defineCollection({ schema: hlSchema });
const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
  hl: hlCollection,
  blog: blogCollection,
  store: storeCollection,
  projects: projectCollection,
};
