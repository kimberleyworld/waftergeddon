export default function AuthLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full p-8">
        <div className="text-center mb-8">
          <h1 className="font-cloister text-4xl text-foreground mb-2">
            Waftergeddon
          </h1>
          <p className="text-foreground/70 text-sm">
            Loading...
          </p>
        </div>
        
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-foreground/10 rounded-lg"></div>
          <div className="h-12 bg-foreground/10 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}