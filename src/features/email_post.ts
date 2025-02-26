import { db } from "@/db";
import { emails } from "@/db/schema";
import { redirect } from "next/navigation";

export const insertEmail = async (email: string) => {
  await db.insert(emails).values({ email });
};
