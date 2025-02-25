import { pgTable, varchar } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const emails = pgTable("emails", {
	email: varchar().primaryKey().notNull(),
});
