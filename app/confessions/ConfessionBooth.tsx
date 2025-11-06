'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function ConfessionBooth() {
  const [confession, setConfession] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!confession.trim()) {
      setError('Please enter a confession')
      return
    }

    setIsSubmitting(true)
    setError('')

    const response = await fetch('/api/confessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: confession.trim() }),
    })

    if (response.ok) {
      setSubmitted(true)
      setConfession('')
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    } else {
      setError('Failed to submit confession. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  const handleReset = () => {
    setConfession('')
    setError('')
    setSubmitted(false)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6 relative">
        <Image
          src="/images/screen.png"
          alt="Confession Screen"
          width={300}
          height={180}
          className="absolute z-0 opacity-25"
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -20%)',
            mask: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMask: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        />
        <h2 className="font-cloister text-4xl text-foreground relative z-10">
          Confession Booth
        </h2>
      </div>

      {submitted ? (
        <div className="text-center p-8">
          <div className="text-xl mb-2">Confession has been acknowledged!</div>
          <button
            onClick={handleReset}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Confess Something else?
          </button>
        </div>
      ) : (
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <textarea
              id="confession"
              value={confession}
              onChange={(e) => setConfession(e.target.value)}
              className="w-full p-4 border focus:outline-none resize-none"
              rows={3}
              placeholder="What&apos;s weighing on your soul? Completely anonymous. Max 500 characters."
              maxLength={500}
              required
            />
          </div>

          {error && (
            <div className="p-3 text-red-700">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 text-foreground py-3 px-6 border transition-colors text-lg font-medium"
            >
              {isSubmitting ? 'Confessing...' : 'Submit'}
            </button>
            
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 border transition-colors text-gothic-red"
            >
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  )
}