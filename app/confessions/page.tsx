import Image from 'next/image';

export default function ConfessionsPage() {
  return (
    <div className="min-h-screen bg-background bg-cover bg-center bg-no-repeat p-8 flex items-center justify-center" 
         style={{backgroundImage: "linear-gradient(rgba(18, 3, 3, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hell.png')"}}>
        <div className="text-center">
             <Image
            src="/images/arrow.png"
            alt="Under Construction"
            width={50}
            height={50}
            className="mx-auto floating-stuff"
          />
          <h1 className="font-cloister text-6xl text-foreground mt-8 mb-8">
            Confessions Coming Soon
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