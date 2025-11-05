'use client'

import { useState, useEffect } from 'react'

interface Confession {
  id: number
  text: string
  createdAt: string
}

export default function ConfessionsDemo() {
  const [confessions, setConfessions] = useState<Confession[]>([])
  const [newConfession, setNewConfession] = useState('')
  const [loading, setLoading] = useState(false)

  // Fetch confessions
  const fetchConfessions = async () => {
    try {
      const response = await fetch('/api/confessions')
      if (response.ok) {
        const data = await response.json()
        setConfessions(data)
      }
    } catch (error) {
      console.error('Error fetching confessions:', error)
    }
  }

  // Submit new confession
  const submitConfession = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newConfession.trim()) return

    setLoading(true)
    try {
      const response = await fetch('/api/confessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newConfession }),
      })

      if (response.ok) {
        setNewConfession('')
        fetchConfessions() // Refresh the list
      }
    } catch (error) {
      console.error('Error submitting confession:', error)
    } finally {
      setLoading(false)
    }
  }

  // Delete confession
  const deleteConfession = async (id: number) => {
    try {
      const response = await fetch(`/api/confessions/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchConfessions() // Refresh the list
      }
    } catch (error) {
      console.error('Error deleting confession:', error)
    }
  }

  useEffect(() => {
    fetchConfessions()
  }, [])

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Confessions</h1>
      
      {/* Submit form */}
      <form onSubmit={submitConfession} className="mb-8">
        <div className="mb-4">
          <label htmlFor="confession" className="block text-sm font-medium mb-2">
            Your Confession
          </label>
          <textarea
            id="confession"
            value={newConfession}
            onChange={(e) => setNewConfession(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Share your confession anonymously..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Confession'}
        </button>
      </form>

      {/* Confessions list */}
      <div className="space-y-4">
        {confessions.map((confession) => (
          <div key={confession.id} className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-800 mb-2">{confession.text}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{new Date(confession.createdAt).toLocaleDateString()}</span>
              <button
                onClick={() => deleteConfession(confession.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {confessions.length === 0 && (
        <p className="text-gray-500 text-center">No confessions yet. Be the first to share!</p>
      )}
    </div>
  )
}