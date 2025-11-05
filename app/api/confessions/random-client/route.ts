import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Get random confession using database randomization
    const confessionResult = await prisma.$queryRaw<Array<{id: number, text: string, createdAt: Date}>>`
      SELECT * FROM "Confession" ORDER BY RANDOM() LIMIT 1
    `
    
    const confession = confessionResult[0] || null
    
    return NextResponse.json(confession)
  } catch (error) {
    console.error('Error fetching random confession:', error)
    return NextResponse.json(
      { error: 'Failed to fetch confession' },
      { status: 500 }
    )
  }
}