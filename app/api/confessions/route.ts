import { NextRequest, NextResponse } from 'next/server'
import { readConfessions } from '@/lib/confessions'

export async function GET() {
  const confessions = readConfessions()
  const sorted = [...confessions].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  return NextResponse.json(sorted, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  })
}

export async function POST(request: NextRequest) {
  // Pretend to accept but don't actually save
  const { text } = await request.json()
  const mockConfession = {
    id: Math.floor(Math.random() * 10000),
    text,
    createdAt: new Date().toISOString()
  }
  return NextResponse.json(mockConfession, { status: 201 })
}