import Image from 'next/image'

export default function ConfessionsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 flex items-center justify-center">
      <Image
        src="/images/pearl.png"
        alt="Loading confessions"
        width={100}
        height={100}
        className="animate-pulse"
      />
    </div>
  )
}