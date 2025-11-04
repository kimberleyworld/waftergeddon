'use client';

import { useActionState } from 'react';
import Image from 'next/image';
import { authenticateUser } from './actions';

export default function AuthPage() {
  const [state, formAction, isPending] = useActionState(authenticateUser, null);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full p-8 ">
        <Image
          src="/images/cat.png"
          alt="Cat"
          width={200}
          height={200}
          className="mx-auto mb-4 floating-stuff"
        />
        <div className="text-center mb-4">
          <h1 className="font-cloister text-6xl text-foreground mb-2">
            Waftergeddon
          </h1>
          <p className="text-foreground/70 text-sm">
            This is a private event. Please enter the password to continue.
          </p>
        </div>

        <form action={formAction} className="space-y-4 flex justify-center items-center flex-col">
          <div className='w-full'>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-foreground/10 border border-foreground/20 text-foreground placeholder-foreground/50 focus:outline-none"
              required
              disabled={isPending}
            />
          </div>

          {state?.error && (
            <div className="text-gothic-red text-sm text-center">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="text-foreground hover:bg-gothic-red hover:text-gothic-red border-1 border-foreground/20 hover:border-gothic-red py-3 px-8 font-bold"
          >
            {isPending ? 'Checking...' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  );
}