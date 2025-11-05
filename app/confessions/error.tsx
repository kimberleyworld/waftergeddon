'use client'

import Image from 'next/image'

export default function ConfessionsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="text-center max-w-md">
        <Image
          src="/images/arrow.png"
          alt="Error"
          width={60}
          height={60}
          className="mx-auto mb-6 opacity-50"
        />
        
        <h1 className="font-cloister text-4xl text-foreground mb-4">
          Confession Failed
        </h1>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <p className="text-red-800 mb-2">
            Something went wrong loading the confessions booth.
          </p>
          <p className="text-red-600 text-sm">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full border border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Return Home
          </button>
        </div>

        <Image
          src="/images/arrow.png"
          alt="Return"
          width={40}
          height={40}
          className="mx-auto rotate-180 mt-6 opacity-50"
        />
      </div>
    </div>
  )
}