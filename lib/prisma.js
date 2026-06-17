import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

globalThis.prisma = db;

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development and across function invocations in production.
// Without this, each invocation could create a new instance, potentially leading to
// connection pool exhaustion and 500 errors in serverless environments like Vercel.
