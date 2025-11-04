'use client';

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        <div className="text-center mb-8">
          <h1 className="font-cloister text-4xl text-foreground mb-2">
            Waftergeddon
          </h1>
          <p className="text-foreground/70 text-sm mb-4">
            Something went wrong with authentication.
          </p>
          <p className="text-red-400 text-sm mb-6">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <button
          onClick={reset}
          className="w-full bg-foreground/20 hover:bg-foreground/30 text-foreground py-3 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}