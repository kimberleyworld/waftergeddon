import Image from 'next/image';
import TimeTables from './components/timeTable/TimeTables';

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* First section - Hero with castle */}
      <section className="h-screen snap-start flex flex-col bg-background relative">
        {/* Image at the very top */}
        <div className="relative mt-20 flex-shrink-0">
          <Image
            src="/images/pinkCastle.png"        
            alt="Boat man illustration"
            width={400}
            height={300}
            className="floating-stuff rounded-lg w-4/5 h-auto mx-auto"
          />
        </div>

        {/* Content below image */}
        <div className="flex flex-col items-center justify-center flex-grow p-8">
          <div className="text-center max-w-4xl">
            <h1 className="font-cloister text-6xl mt-0">
              Waftergeddon
            </h1>
            
            {/* Floating arrow pointing down */}
            <div className="floating-stuff text-6xl text-foreground mt-8">
              ↓
            </div>
          </div>
        </div>
      </section>

      {/* Second section - Timetable */}
      <section className="h-screen snap-start flex items-start justify-start bg-background ">
        <TimeTables />
      </section>
    </div>
  );
}
