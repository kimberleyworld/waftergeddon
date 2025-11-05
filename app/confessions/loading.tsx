import Image from 'next/image'

export default function ConfessionsLoading() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="text-center">
        <Image
          src="/images/arrow.png"
          alt="Loading"
          width={60}
          height={60}
          className="mx-auto floating-stuff mb-6"
        />
        <h1 className="font-cloister text-4xl text-foreground mb-4">
          Loading Confessions...
        </h1>
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  )
}