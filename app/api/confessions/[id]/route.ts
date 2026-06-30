import { NextResponse } from 'next/server'
// import { NextRequest } from 'next/server' // UNCOMMENT IF RESTORING FROM JSON
// import { prisma } from '@/lib/prisma' // UNCOMMENT IF RESTORING FROM JSON

// interface RouteContext {
//   params: Promise<{ id: string }>
// }

// PRISMA/SUPABASE VERSION (Restore this if the site goes live again):
// GET /api/confessions/[id] - Get a specific confession
// export async function GET(
//   request: NextRequest,
//   context: RouteContext
// ) {
//   try {
//     const { id: idParam } = await context.params
//     const id = parseInt(idParam)
//     
//     if (isNaN(id)) {
//       return NextResponse.json(
//         { error: 'Invalid confession ID' },
//         { status: 400 }
//       )
//     }
//
//     const confession = await prisma.confession.findUnique({
//       where: { id }
//     })
//
//     if (!confession) {
//       return NextResponse.json(
//         { error: 'Confession not found' },
//         { status: 404 }
//       )
//     }
//
//     return NextResponse.json(confession)
//   } catch (error) {
//     console.error('Error fetching confession:', error)
//     return NextResponse.json(
//       { error: 'Failed to fetch confession' },
//       { status: 500 }
//     )
//   }
// }
//
// DELETE /api/confessions/[id] - Delete a specific confession
// export async function DELETE(
//   request: NextRequest,
//   context: RouteContext
// ) {
//   try {
//     const { id: idParam } = await context.params
//     const id = parseInt(idParam)
//     
//     if (isNaN(id)) {
//       return NextResponse.json(
//         { error: 'Invalid confession ID' },
//         { status: 400 }
//       )
//     }
//
//     await prisma.confession.delete({
//       where: { id }
//     })
//
//     return NextResponse.json({ message: 'Confession deleted successfully' })
//   } catch (error) {
//     console.error('Error deleting confession:', error)
//     return NextResponse.json(
//       { error: 'Failed to delete confession' },
//       { status: 500 }
//     )
//   }
// }

// JSON FILE VERSION (Currently using - comment this out if restoring Prisma)
export async function GET() {
  return NextResponse.json(
    { message: 'Using JSON file storage - not implemented' },
    { status: 501 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { message: 'Using JSON file storage - not implemented' },
    { status: 501 }
  )
}