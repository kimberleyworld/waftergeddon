import { Suspense } from 'react'
import RandomConfessionServer from './RandomConfessionServer'
import ConfessionBooth from './ConfessionBooth'
import ConfessionsSkeleton from './ConfessionsSkeleton'

export default function ConfessionsPage() {
  return (
    <div className="min-h-screen p-8">

      {/* Confession Submission Form*/}
      <div className="pt-16 mb-16">
        <ConfessionBooth />
      </div>

      {/* Random Confession Display with Skeleton */}
      <div className="flex items-center justify-center mb-16 mt-20">
        <Suspense fallback={<ConfessionsSkeleton />}>
          <RandomConfessionServer />
        </Suspense>
      </div>
    </div>
  )
}