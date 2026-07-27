import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    order: z.number(),
    category: z.string(),
    status: z.enum(["Complete", "Research", "In Development"]),
    summary: z.string(),
    problem: z.string(),
    approach: z.string(),
    contribution: z.string(),
    result: z.string().optional(),
    resultLabel: z.string().optional(),
    evidenceUrl: z.url().optional(),
    evidenceLabel: z.string().default("View repository"),
    role: z.string(),
    team: z.string(),
    period: z.string(),
    researchQuestion: z.string(),
    metrics: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
          note: z.string().optional(),
        }),
      )
      .default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.url(),
        }),
      )
      .default([]),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string(),
          width: z.number(),
          height: z.number(),
        }),
      )
      .default([]),
    technologies: z.array(z.string()),
    visual: z.enum(["maas", "clarity", "eqe", "minerva"]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
