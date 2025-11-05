import InfoSection from './InfoSectionComponent';
import Image from 'next/image';

export default function Informations() {
  return (
    <div className="max-w-2xl lg:max-w-3xl mx-auto p-4">
      <h1 className="text-6xl font-cloister text-center mt-15 mb-4">Information</h1>

      <div className="border-t-[0.1px] border-foreground"></div>

      <InfoSection title="Address">
        <div className="text-center mb-4 text-sm">
          <p>Knowle Manor</p>
          <p>Dunster, Minehead</p>
        </div>

        <div className="mb-6">
          <h3 className="text-m font-semibold mb-1">By Car:</h3>
          <p className='text-sm'>Follow the south lodge postcode TA24 72B which will take you to the front drive entrance.</p>
          <p className='text-sm'>Please update the <a href="https://docs.google.com/spreadsheets/d/1HuszOMvBX-YRuoE6pb5Up6Bj65BY3gTHHn0NPcIIH-c/edit?gid=0#gid=0" className='underline font-bold' target="_blank" rel="noopener noreferrer">liftshare</a> spreadsheet if you haven&apos;t already!</p>
        </div>

        <div className="mb-6">
          <div>
          <h3 className="text-m font-semibold mb-1">Train:</h3>
          <p className='text-sm'>Nearest train station is Taunton, which is about 45 mins drive away. You can then get a bus from Taunton to Minehead.  
            <a href="https://www.knowlemanor.co.uk/how-to-find-us/" className="underline font-bold block mt-1" target="_blank" rel="noopener noreferrer">
            how to find us
            </a>
          </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-m font-semibold mb-1">Parking</h3>
          <p className='text-sm'>There&apos;s a large car park at the Manor on the right at the end of the driveway.</p>
        </div>

        <div className="flex gap-4 items-center mb-6">
          <div className="md:w-1/2">
            <Image
              src="/images/goat.png"
              alt="Goat"
              width={300}
              height={200}
              className="rounded-lg h-auto mx-auto"
            />
          </div>
          
          <div className="w-1/2">
            <div>
              <h3 className="text-m font-semibold mb-1">Van dwellers</h3>
              <p className='text-sm'>We&apos;re not supposed to have people sleeping in vans here so please try and be discreet about the fact you&apos;re sleeping in your van.</p>
            </div>
          </div>
        </div>
        <div>
              <h3 className="text-m font-semibold mb-1">Times</h3>
              <p className='text-sm'>Arrive at the venue any time from 5pm Thursday. Check out is by 4pm Sunday.</p>
            </div>
      </InfoSection>

      <div className="border-t-[0.1px] border-foreground"></div>

      <InfoSection title="Food">
        <p className='text-sm text-center mb-4'>Meals will be provided on both Friday & Saturday (thanks Mischa&apos;s mum!)</p>
        <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
          <div className="w-full md:w-1/2">
            <ul className="list-disc list-outside ml-8 space-y-1 text-sm">
              <li><strong>Brunch:</strong> Help yourself throughout the day</li>
              <li><strong>Dinner:</strong> Provided both days</li>
              <li><strong>Drinks:</strong> BYOB (But we will have plenty of coffee!)</li>
              <li><strong>Snacks:</strong> We should have enough snacks to keep you going through Friday and Saturday - but you might want to bring some extra stuff for Thursday and the journey home on Sunday.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/birdtaxi.png"
              alt="Bird Taxi"
              width={200}
              height={100}
              className="rounded-lg h-auto mx-auto"
            />
          </div>
        </div>
      </InfoSection>

      <div className="border-t-[0.1px] border-foreground"></div>

      <InfoSection title="What to bring">
        <div className="mb-4">
          <ul className="list-disc list-outside ml-8 space-y-1 text-sm">
            <li>Swimwear for the pool</li>
            <li>Towels (beds have towels, but they say bring your own for pool. If you&apos;re in a van / airbed you&apos;ll also need your own).</li>
            <li>Fancy dress for Saturday</li>
            <li>If you&apos;re not staying in a bed - air mattress & sleeping bag etc</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Decor & equipment</h3>
          <p className='text-sm mb-1'>If you have anything to help us decorate the venue, especially lights, please bring them! Stuff that would be useful:</p>
          <ul className="list-disc list-outside ml-8 space-y-1 text-sm">
            <li>Lights (party lights, ambient lights etc), extension cables</li>
            <li>Blankets / cosy stuff for squish city (heaven)</li>
            <li>White bed sheets (to cover sofas in heaven)</li>
            <li>Any decor or anything fun you wanna bring go for it - will defo find use for it!</li>
          </ul>
        </div>
      </InfoSection>

      <div className="border-t-[0.1px] border-foreground"></div>

      <InfoSection title="Room allocation">
        <p className='text-sm'>Rooms have been pre-allocated <a href="https://docs.google.com/spreadsheets/d/1aHd6N79jtOgFeBuoes1uCsV8nmHUAIqKiUJcEo1nKqc/edit?usp=sharing" className='underline font-bold' target="_blank" rel="noopener noreferrer">HERE</a> - feel free to swap with people if you wish.</p>
        <div className="text-center mb-6">
          <Image
            src="/images/apples.png"
            alt="Knowle Manor"
            width={300}
            height={200}
            className="mx-auto rounded-lg mt-4"
          />
        </div>
      </InfoSection>

      <div className="border-t-[0.1px] border-foreground"></div>

      <InfoSection title="Venue rules">
        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Swimming pool:</h3>
          <p className='text-sm'>Strictly no drinks or glass in the pool area please! The pool is open 8am to 8pm.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Venue staff & noise:</h3>
          <p className='text-sm mb-1'>The owners live next door. They hopefully won&apos;t be coming inside the venue, but please be discreet with stuff, & keep noise outside (smokers / vans) to a minimum at night.</p>
          <p className='text-sm mb-1 font-bold'>Please keep windows and doors to outside closed after midnight. This is the only restriction we have on sound - please keep to it so we don’t have to turn the music down or off.</p>
          <p className='text-sm mb-1'>No problem to go outside to smoke, but please close the door behind you.</p>
        </div>

        <p className='text-sm'>Respect the place, help us keep it tidy, have fun ♡</p>
      </InfoSection>

    </div>
  );
}