ALTER TABLE "emails" ALTER COLUMN "email" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "emails" ADD CONSTRAINT "emails_email_unique" UNIQUE("email");