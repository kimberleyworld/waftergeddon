import Image from 'next/image'

export default function ConfessionsSkeleton() {
  return (
    <div className="text-center max-w-2xl flex items-center justify-center">
      <Image
        src="/images/pearl.png"
        alt="Loading random confession"
        width={100}
        height={100}
        className="animate-pulse"
      />
    </div>
  )
}