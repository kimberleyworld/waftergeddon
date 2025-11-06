import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const confessions = await prisma.confession.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(confessions)
}

export async function POST(request: NextRequest) {
  const { text } = await request.json()
  const confession = await prisma.confession.create({ data: { text } })
  return NextResponse.json(confession, { status: 201 })
}