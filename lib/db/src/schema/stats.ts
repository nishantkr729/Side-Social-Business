import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const statsTable = pgTable("stats", {
  id: serial("id").primaryKey(),
  number: text("number").notNull(),
  label: text("label").notNull(),
  sub: text("sub").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const insertStatSchema = createInsertSchema(statsTable).omit({ id: true });
export type InsertStat = z.infer<typeof insertStatSchema>;
export type Stat = typeof statsTable.$inferSelect;
