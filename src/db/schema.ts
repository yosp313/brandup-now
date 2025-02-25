import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const emails = pgTable("emails", {
  id: integer().primaryKey().generatedAlwaysAsIdentity().notNull().unique(),
  email: text("email").unique().notNull(),
});
