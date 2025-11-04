import Image from 'next/image';
import TimeTables from './components/timeTable/TimeTables';
import Informations from './components/info/Informations';

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll">
      {/* First section - Hero with castle */}
      <section className="h-screen flex flex-col items-center justify-center bg-background relative">
        {/* Image */}
        <div className="relative flex-shrink-0">
          <Image
            src="/images/pinkCastle.png"        
            alt="Boat man illustration"
            width={400}
            height={300}
            className="floating-stuff rounded-lg h-auto mx-auto w-4/5 md:w-3/5 lg:w-2/5"
          />
        </div>

        {/* Content below image */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="font-cloister text-6xl mt-8">
              Waftergeddon
            </h1>
            
            {/* Floating arrow pointing down */}
            <div className="floating-stuff">
              <Image
                src="/images/arrow.png"
                alt="Down arrow"
                width={40}
                height={40}
                className="mt-15 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timetable */}
      <section className="flex items-start justify-start bg-background mt-8">
        <TimeTables />
      </section>

      {/* Image break */}
      <section className="flex flex-col items-center justify-center bg-background relative mt-8 mb-8">
        <div className="relative flex-shrink-0">
          <Image
            src="/images/boatMan.png"
            alt="Waftergeddon Boat"
            width={400}
            height={300}
            className="floating-stuff rounded-lg h-auto mx-auto w-4/5 md:w-3/5 lg:w-2/5"
          />
        </div>
      </section>

      {/* Info */}
      <section className="flex flex-col items-center justify-center bg-background text-foreground px-4 py-8">
        <Informations />
      </section>
    </div>
  );
}
