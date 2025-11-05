import { prisma } from '@/lib/prisma'
import Image from 'next/image'

// Server Component - runs on server, no client-side fetching needed
export default async function RandomConfessionServer() {
  const count = await prisma.confession.count()
  
  if (count === 0) {
    return (
      <div className="text-center max-w-2xl">
        <h1 className="font-cloister text-6xl text-foreground mb-8">
          Confessions Booth
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          No confessions yet. Be the first to share your secrets...
        </p>
      </div>
    )
  }

  // Get random confession using database randomization
  const confessionResult = await prisma.$queryRaw<Array<{id: number, text: string, createdAt: Date}>>`
    SELECT * FROM "Confession" ORDER BY RANDOM() LIMIT 1
  `
  const confession = confessionResult[0] || null

  return (
    <div className="text-center max-w-2xl">
      <h1 className="font-cloister text-6xl text-foreground mb-8">
        Confessions Booth
      </h1>

      <div className="bg-black/80 p-8 rounded-lg mb-8 min-h-[200px] flex items-center justify-center">
        {confession ? (
          <div className="text-white">
            <p className="text-xl leading-relaxed italic">
              &ldquo;{confession.text}&rdquo;
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Confessed on {new Date(confession.createdAt).toLocaleDateString()}
            </p>
          </div>
        ) : (
          <div className="text-white text-xl">No confession to display</div>
        )}
      </div>

      <div className="space-x-4">
        <p className="text-gray-600 text-sm">Refresh page for next confession</p>
      </div>
    </div>
  )
}