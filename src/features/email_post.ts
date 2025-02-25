import { db } from "@/db";
import { emails } from "@/db/schema";

export const insertEmail = async (email: string) => {
  await db.insert(emails).values({ email: email });
};
