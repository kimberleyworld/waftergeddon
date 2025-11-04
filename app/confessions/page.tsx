import Image from 'next/image';

export default function ConfessionsPage() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
             <Image
            src="/images/arrow.png"
            alt="Under Construction"
            width={50}
            height={50}
            className="mx-auto floating-stuff"
          />
          <h1 className="font-cloister text-6xl text-foreground mt-6 mb-8">
            Confessions Booth Coming Soon
          </h1>
          <Image
            src="/images/arrow.png"
            alt="Under Construction"
            width={50}
            height={50}
            className="mx-auto rotate-180 floating-stuff"
          />
      </div>
    </div>
  );
}