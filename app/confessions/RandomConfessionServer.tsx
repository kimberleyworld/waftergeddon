import { prisma } from '@/lib/prisma'
import RandomConfessionClient from './RandomConfessionClient'

// Disable caching to ensure fresh data
export const revalidate = 0

// Server Component - fetches all confessions and passes to client
export default async function RandomConfessionServer() {
  const count = await prisma.confession.count()
  
  if (count === 0) {
    return (
      <RandomConfessionClient 
        initialConfession={null} 
        hasConfessions={false}
        allConfessions={[]}
      />
    )
  }

  // Get all confessions
  const confessions = await prisma.confession.findMany({
    orderBy: { id: 'asc' }
  })

  // Convert Dates to strings for serialization
  const serializedConfessions = confessions.map((confession: {id: number, text: string, createdAt: Date}) => ({
    id: confession.id,
    text: confession.text,
    createdAt: confession.createdAt.toISOString()
  }))

  return (
    <RandomConfessionClient 
      initialConfession={serializedConfessions[0] || null} 
      hasConfessions={count > 0}
      allConfessions={serializedConfessions}
    />
  )
}