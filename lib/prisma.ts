import { PrismaClient } from '@prisma/client'

// COMMENTED OUT - Using JSON file storage instead
// Restore this if the site goes live again and you set up Supabase

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: process.env.NODE_ENV === 'development' ? ['query'] : [],
//   })
//
// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Placeholder export for type safety (if code still references prisma)
export const prisma = null as any