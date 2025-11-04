'use client';

import { useActionState } from 'react';
import { authenticateUser } from './actions';

export default function AuthPage() {
  const [state, formAction, isPending] = useActionState(authenticateUser, null);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        <div className="text-center mb-8">
          <h1 className="font-cloister text-4xl text-foreground mb-2">
            Waftergeddon
          </h1>
          <p className="text-foreground/70 text-sm">
            This is a private event. Please enter the password to continue.
          </p>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-foreground/10 border border-foreground/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/30"
              required
              disabled={isPending}
            />
          </div>

          {state?.error && (
            <div className="text-red-400 text-sm text-center">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-foreground/20 hover:bg-foreground/30 text-foreground py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'Checking...' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  );
}