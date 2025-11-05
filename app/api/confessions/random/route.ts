import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Get total count
    const count = await prisma.confession.count()
    
    if (count === 0) {
      return NextResponse.json(null)
    }
    
    // Generate random offset
    const skip = Math.floor(Math.random() * count)
    
    // Get one random confession
    const confession = await prisma.confession.findFirst({
      skip,
      take: 1
    })
    
    return NextResponse.json(confession)
  } catch (error) {
    console.error('Error fetching random confession:', error)
    return NextResponse.json(
      { error: 'Failed to fetch confession' },
      { status: 500 }
    )
  }
}