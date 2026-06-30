// PRISMA/SUPABASE VERSION (Commented out - Restore this if the site goes live again):
// import { prisma } from '@/lib/prisma'
// import RandomConfessionClient from './RandomConfessionClient'
// 
// export const revalidate = 0
// 
// export default async function RandomConfessionServer() {
//   try {
//     const count = await prisma.confession.count()
//     
//     if (count === 0) {
//       return (
//         <RandomConfessionClient 
//           initialConfession={null} 
//           hasConfessions={false}
//           allConfessions={[]}
//         />
//       )
//     }
// 
//     const confessions = await prisma.confession.findMany({
//       orderBy: { id: 'asc' }
//     })
// 
//     const serializedConfessions = confessions.map((confession: {id: number, text: string, createdAt: Date}) => ({
//       id: confession.id,
//       text: confession.text,
//       createdAt: confession.createdAt.toISOString()
//     }))
// 
//     return (
//       <RandomConfessionClient 
//         initialConfession={serializedConfessions[0] || null} 
//         hasConfessions={count > 0}
//         allConfessions={serializedConfessions}
//       />
//     )
//   } catch (error) {
//     console.error('Error loading confessions:', error)
//     return (
//       <RandomConfessionClient 
//         initialConfession={null} 
//         hasConfessions={false}
//         allConfessions={[]}
//       />
//     )
//   }
// }

// JSON FILE VERSION (Currently using):
import { readConfessions } from '@/lib/confessions'
import RandomConfessionClient from './RandomConfessionClient'

// Disable caching to ensure fresh data
export const revalidate = 0

// Server Component - fetches all confessions and passes to client
export default async function RandomConfessionServer() {
  const confessions = readConfessions()
  const count = confessions.length

  if (count === 0) {
    return (
      <RandomConfessionClient 
        initialConfession={null} 
        hasConfessions={false}
        allConfessions={[]}
      />
    )
  }

  // Convert to ensure proper serialization
  const serializedConfessions = confessions.map((confession) => ({
    id: confession.id,
    text: confession.text,
    createdAt: confession.createdAt
  }))

  return (
    <RandomConfessionClient 
      initialConfession={serializedConfessions[0] || null} 
      hasConfessions={count > 0}
      allConfessions={serializedConfessions}
    />
  )
}