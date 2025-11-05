import { prisma } from '@/lib/prisma'
import RandomConfessionClient from './RandomConfessionClient'

// Server Component - fetches initial data and passes to client
export default async function RandomConfessionServer() {
  const count = await prisma.confession.count()
  
  if (count === 0) {
    return (
      <RandomConfessionClient 
        initialConfession={null} 
        hasConfessions={false} 
      />
    )
  }

  // Get random confession using database randomization
  const confessionResult = await prisma.$queryRaw<Array<{id: number, text: string, createdAt: Date}>>`
    SELECT * FROM "Confession" ORDER BY RANDOM() LIMIT 1
  `
  const confession = confessionResult[0] || null

  // Convert Date to string for serialization
  const serializedConfession = confession ? {
    ...confession,
    createdAt: confession.createdAt.toISOString()
  } : null

  return (
    <RandomConfessionClient 
      initialConfession={serializedConfession} 
      hasConfessions={count > 0} 
    />
  )
}