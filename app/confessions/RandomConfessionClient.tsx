'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Confession {
  id: number
  text: string
  createdAt: string
}

interface RandomConfessionClientProps {
  initialConfession: Confession | null
  hasConfessions: boolean
}

export default function RandomConfessionClient({ 
  initialConfession, 
  hasConfessions 
}: RandomConfessionClientProps) {
  const [confession, setConfession] = useState<Confession | null>(initialConfession)
  const [loading, setLoading] = useState(false)

  const fetchRandomConfession = async () => {
    setLoading(true)
    try {
      // We'll need to create this API route
      const response = await fetch('/api/confessions/random-client')
      const data = await response.json()
      setConfession(data)
    } finally {
      setLoading(false)
    }
  }

  if (!hasConfessions) {
    return (
      <div className="text-center max-w-2xl">
        <Image
          src="/images/arrow.png"
          alt="No confessions"
          width={50}
          height={50}
          className="mx-auto floating-stuff mb-6"
        />
        <h1 className="font-cloister text-6xl text-foreground mb-8">
          Confessions Booth
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          No confessions yet. Be the first to share your secrets...
        </p>
      </div>
    )
  }

  return (
    <div className="text-center max-w-2xl">
      <Image
        src="/images/arrow.png"
        alt="Confession"
        width={50}
        height={50}
        className="mx-auto floating-stuff mb-6"
      />
      
      <h1 className="font-cloister text-6xl text-foreground mb-8">
        Confessions Booth
      </h1>

      <div className="bg-black/80 p-8 rounded-lg mb-8 min-h-[200px] flex items-center justify-center">
        {loading ? (
          <div className="text-white text-xl">Loading new confession...</div>
        ) : confession ? (
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
        <button
          onClick={fetchRandomConfession}
          disabled={loading}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors font-medium"
        >
          {loading ? 'Loading...' : 'Next Confession'}
        </button>
      </div>

      <Image
        src="/images/arrow.png"
        alt="Next"
        width={50}
        height={50}
        className="mx-auto rotate-180 floating-stuff mt-6"
      />
    </div>
  )
}