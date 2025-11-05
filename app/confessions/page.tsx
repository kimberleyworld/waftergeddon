import { Suspense } from 'react'
import RandomConfessionServer from './RandomConfessionServer'
import ConfessionBooth from './ConfessionBooth'
import AllConfessionsServer from './AllConfessionsServer'
import ConfessionsSkeleton from './ConfessionsSkeleton'
import AllConfessionsSkeleton from './AllConfessionsSkeleton'

export default function ConfessionsPage() {
  return (
    <div className="min-h-screen p-8">
      {/* Random Confession Display with Skeleton */}
      <div className="flex items-center justify-center mb-16 mt-20">
        <Suspense fallback={<ConfessionsSkeleton />}>
          <RandomConfessionServer />
        </Suspense>
      </div>
      
      {/* Confession Submission Form*/}
      <div className="pt-16 mb-16">
        <ConfessionBooth />
      </div>

      {/* All Confessions List with Skeleton */}
      <div className="pt-16">
        <Suspense fallback={<AllConfessionsSkeleton />}>
          <AllConfessionsServer />
        </Suspense>
      </div>
    </div>
  )
}