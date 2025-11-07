import { Suspense } from 'react'
import RandomConfessionServer from './RandomConfessionServer'
import ConfessionBooth from './ConfessionBooth'
import ConfessionsSkeleton from './ConfessionsSkeleton'

// Disable caching to ensure fresh confessions
export const revalidate = 0

export default function ConfessionsPage() {
  return (
    <div className="min-h-screen">
      {/* Confession Submission Form with padding */}
      <div className="p-8">
        <div className="pt-16 mb-16">
          <ConfessionBooth />
        </div>
      </div>

      {/* Random Confession Display - full width, no padding */}
      <Suspense fallback={<ConfessionsSkeleton />}>
        <RandomConfessionServer />
      </Suspense>
    </div>
  )
}