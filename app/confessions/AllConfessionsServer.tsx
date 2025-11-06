import { prisma } from '@/lib/prisma'

interface Confession {
  id: number;
  text: string;
  createdAt: Date;
}

// Server Component - fetches all confessions on server
export default async function AllConfessionsServer() {
  const confessions = await prisma.confession.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h3 className="font-cloister text-3xl text-foreground mb-2">
          All Confessions
        </h3>
        <p className="text-gothic-red">
          {confessions.length} {confessions.length === 1 ? 'confession' : 'confessions'} shared so far
        </p>
      </div>

      {confessions.length === 0 ? (
        <div className="text-center p-8 rounded-lg">
          <p className="text-foreground">No confessions yet. Be the first to share your secrets!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {confessions.map((confession: Confession) => (
            <div 
              key={confession.id} 
            >
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <p className="text-foreground leading-relaxed mb-3">
                    &ldquo;{confession.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}