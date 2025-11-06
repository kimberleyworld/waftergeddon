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
          Confessions
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          No confessions yet. Be the first to share your secrets...
        </p>
      </div>
    )
  }

  return (
    <div className="text-center max-w-2xl">     
      <h1 className="font-cloister text-6xl text-foreground mb-8">
        Confessions
      </h1>

      <div className="rounded-lg min-h-[200px] flex items-center justify-center">
        {loading ? (
          <div className="text-foreground text-xl"></div>
        ) : confession ? (
          <div className="">
            <p className="text-xl leading-relaxed italic">
              &ldquo; {confession.text} &rdquo;
            </p>
          </div>
        ) : (
          <div className="text-white text-xl">No confession to display</div>
        )}
      </div>

      <div className="space-x-4">
        <Image
          src="/images/arrow.png"
          alt="Next Confession"
          width={50}
          height={50}
          onClick={fetchRandomConfession}
          className="mx-auto cursor-pointer hover:opacity-70 transition-opacity rotate-270"
        />
      </div>
    </div>
  )
}