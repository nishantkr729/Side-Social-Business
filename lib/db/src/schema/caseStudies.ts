import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const caseStudiesTable = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  tag: text("tag").notNull(),
  color: text("color").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  outcome: text("outcome").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const insertCaseStudySchema = createInsertSchema(caseStudiesTable).omit({ id: true });
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type CaseStudy = typeof caseStudiesTable.$inferSelect;
