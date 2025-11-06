'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function ConfessionBooth() {
  const [confession, setConfession] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [curtainsOpen, setCurtainsOpen] = useState(false)

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
      // Close curtains after successful submission
      setCurtainsOpen(false)
      // Reset form state after curtains close
      setTimeout(() => setSubmitted(false), 1000)
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
    <>
      <style jsx global>{`
        @keyframes slideLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        
        @keyframes slideRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        
        .curtain-left-open {
          animation: slideLeft 1s ease-in-out forwards;
        }
        
        .curtain-right-open {
          animation: slideRight 1s ease-in-out forwards;
        }
      `}</style>
      
      <div className="max-w-2xl mx-auto relative overflow-hidden min-h-screen">
        {/* Left Curtain */}
        <div
          className={`absolute top-0 left-0 z-10 h-2/3 w-1/2 transition-transform duration-1000 ease-in-out ${
            curtainsOpen ? '' : 'translate-x-0'
          }`}
          style={{
            transform: curtainsOpen ? 'translateX(calc(-100% + 10px))' : 'translateX(0)',
            pointerEvents: curtainsOpen ? 'none' : 'auto'
          }}
        >
          <Image
            src="/images/leftCurtain.png"
            alt="Left Curtain"
            width={200}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Right Curtain */}
        <div
          className={`absolute top-0 z-10 h-2/3 w-2/3 transition-transform duration-1000 ease-in-out ${
            curtainsOpen ? '' : 'translate-x-0'
          }`}
          style={{
            right: '-30px',
            transform: curtainsOpen ? 'translateX(calc(100% - 50px))' : 'translateX(0)',
            pointerEvents: curtainsOpen ? 'none' : 'auto'
          }}
        >
          <Image
            src="/images/rightCurtain.png"
            alt="Right Curtain"
            width={200}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Open Curtains Button */}
        {!curtainsOpen && (
          <button
            onClick={() => setCurtainsOpen(true)}
            className="absolute top-40 border left-1/2 transform -translate-x-1/2 z-20 bg-gothic-red text-white py-3 transition-colors font-cloister text-3xl"
          >
            Enter the Booth
          </button>
        )}

        {/* Main Content */}
        <div className="relative">
      <div className="text-center mb-6 relative mt-20">
        <Image
          src="/images/screen.png"
          alt="Confession Screen"
          width={300}
          height={180}
          className="absolute opacity-25"
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -20%)',
            mask: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMask: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        />
        <h2 className="font-cloister text-4xl text-foreground relative">
          Confession Booth
        </h2>
      </div>

      {/* Always show the form, no success message screen */}
      <form onSubmit={handleSubmit} className={`mr-6 ml-6 space-y-4 ${curtainsOpen ? 'relative z-20' : ''}`}>
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
        </div>
      </div>
    </>
  )
}