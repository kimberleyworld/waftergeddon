export default function AllConfessionsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="text-center mb-8">
        <div className="w-10 h-10 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div className="h-8 bg-gray-300 rounded-lg mb-2 mx-auto max-w-xs"></div>
        <div className="h-4 bg-gray-300 rounded mx-auto max-w-sm"></div>
      </div>

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}