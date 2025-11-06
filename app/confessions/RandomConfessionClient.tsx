'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface Confession {
  id: number
  text: string
  createdAt: string
}

interface RandomConfessionClientProps {
  initialConfession: Confession | null
  hasConfessions: boolean
  allConfessions: Confession[]
}

export default function RandomConfessionClient({ 
  initialConfession, 
  hasConfessions,
  allConfessions
}: RandomConfessionClientProps) {
  const [confessions, setConfessions] = useState<Confession[]>(allConfessions)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [confession, setConfession] = useState<Confession | null>(initialConfession)
  const [loading, setLoading] = useState(false)

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = (array: Confession[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Initialize with shuffled confessions
  useState(() => {
    if (allConfessions.length > 0) {
      const shuffled = shuffleArray(allConfessions)
      setConfessions(shuffled)
      setConfession(shuffled[0])
      setCurrentIndex(0)
    }
  })

  const fetchRandomConfession = useCallback(() => {
    if (confessions.length === 0) return
    
    setLoading(true)
    
    setTimeout(() => {
      let nextIndex = currentIndex + 1
      
      // If we've reached the end, reshuffle and start over
      if (nextIndex >= confessions.length) {
        const reshuffled = shuffleArray(allConfessions)
        setConfessions(reshuffled)
        nextIndex = 0
        setConfession(reshuffled[0])
      } else {
        setConfession(confessions[nextIndex])
      }
      
      setCurrentIndex(nextIndex)
      setLoading(false)
    }, 200) // Small delay for better UX
  }, [confessions, currentIndex, allConfessions])

  // Auto-advance timer - moves to next confession every 10 seconds
  useEffect(() => {
    if (!hasConfessions || confessions.length === 0) return

    const timer = setInterval(() => {
      fetchRandomConfession()
    }, 10000) // 10 seconds

    return () => clearInterval(timer)
  }, [fetchRandomConfession, hasConfessions, confessions.length])

  if (!hasConfessions) {
    return (
      <div className="text-center max-w-2xl">
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