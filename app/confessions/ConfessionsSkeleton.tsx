export default function ConfessionsSkeleton() {
  return (
    <div className="text-center max-w-2xl animate-pulse">
      <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-6"></div>
      
      <div className="h-16 bg-gray-300 rounded-lg mb-8 mx-auto max-w-md"></div>

      <div className="bg-gray-200 p-8 rounded-lg mb-8 min-h-[200px] flex items-center justify-center">
        <div className="space-y-4 w-full max-w-md">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
      </div>

      <div className="space-x-4 mb-6">
        <div className="inline-block h-10 w-32 bg-gray-300 rounded-lg"></div>
      </div>

      <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto"></div>
    </div>
  )
}