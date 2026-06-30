import { NextResponse } from 'next/server'
import { readConfessions } from '@/lib/confessions'

// PRISMA/SUPABASE VERSION (Restore this if the site goes live again):
// import { prisma } from '@/lib/prisma'
// export async function GET() {
//   try {
//     const confessionResult = await prisma.$queryRaw<Array<{id: number, text: string, createdAt: Date}>>`
//       SELECT * FROM "Confession" ORDER BY RANDOM() LIMIT 1
//     `
//     const confession = confessionResult[0] || null
//     return NextResponse.json(confession)
//   } catch (error) {
//     console.error('Error fetching random confession:', error)
//     return NextResponse.json(
//       { error: 'Failed to fetch confession' },
//       { status: 500 }
//     )
//   }
// }

export async function GET() {
  try {
    const confessions = readConfessions()
    if (confessions.length === 0) {
      return NextResponse.json(null)
    }
    const randomConfession = confessions[Math.floor(Math.random() * confessions.length)]
    return NextResponse.json(randomConfession)
  } catch (error) {
    console.error('Error fetching random confession:', error)
    return NextResponse.json(
      { error: 'Failed to fetch confession' },
      { status: 500 }
    )
  }
}