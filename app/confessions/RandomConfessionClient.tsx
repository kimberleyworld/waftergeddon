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
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background image that covers full width and height */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/ross_img.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="text-center max-w-2xl relative z-10">
        <h1 className="font-cloister text-6xl text-foreground mb-8">
          Confessions
        </h1>

        <div className="min-h-[100px] flex items-center justify-center px-8 text-foreground">
          {loading ? (
            <div className="text-foreground text-xl"></div>
          ) : confession ? (
            <div className="text-foreground">
              <p className="text-xl leading-relaxed italic text-foreground">
                &ldquo; {confession.text} &rdquo;
              </p>
            </div>
          ) : (
            <div className="text-foreground text-xl">No confession to display</div>
          )}
        </div>

        <div className="space-x-4">
          <Image
            src="/images/arrow.png"
            alt="Next Confession"
            width={30}
            height={30}
            onClick={fetchRandomConfession}
            className="mx-auto cursor-pointer hover:opacity-70 transition-opacity rotate-270"
          />
        </div>
      </div>
    </div>
  )
}