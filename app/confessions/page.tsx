'use client';

import { useState } from 'react';

export default function ConfessionsPage() {
  const [confession, setConfession] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission - you can connect to a database/API later
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setConfession('');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-8">
        <div className="max-w-2xl w-full text-center">
          <h1 className="font-cloister text-6xl text-foreground mb-8">
            Confession Submitted
          </h1>
          <p className="text-foreground/70 text-lg mb-8">
            Your anonymous confession has been received. Thank you for sharing.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-foreground/20 hover:bg-foreground/30 text-foreground py-3 px-8 rounded-lg transition-colors"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8 mt-15">
        <div className="text-center mb-12">
          <h1 className="font-cloister text-6xl text-foreground mb-4">
            Confessions
          </h1>
      </div>
    </div>
  );
}