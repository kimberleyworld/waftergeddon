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
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="font-cloister text-4xl text-foreground mb-2">
          Confession Booth
        </h2>
        <p className="text-gray-600">
          Share your secrets anonymously. Your confession will appear randomly for others to see.
        </p>
      </div>

      {submitted ? (
        <div className="text-center p-8 bg-green-50 border border-green-200 rounded-lg">
          <div className="text-green-600 text-xl mb-2">✓ Confession Submitted!</div>
          <p className="text-green-700 mb-4">Your secret is now in the void...</p>
          <button
            onClick={handleReset}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Confess Again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <textarea
              id="confession"
              value={confession}
              onChange={(e) => setConfession(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              rows={6}
              placeholder="What&apos;s weighing on your soul?"
              maxLength={500}
              required
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {confession.length}/500 characters
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting || !confession.trim()}
              className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg font-medium"
            >
              {isSubmitting ? 'Confessing...' : 'Submit Confession'}
            </button>
            
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  )
}