import InfoSection from './InfoSectionComponent';

export default function Informations() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-6xl font-cloister text-center mb-4">Information</h1>
      <InfoSection title="Address">
        <div className="text-center mb-4">
          <p>Knowle Manor</p>
          <p>Dunster, Minehead</p>
        </div>

        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">For sat navs:</h3>
          <p className='text-sm'>Follow the south lodge postcode TA24 72B which will take you to the front drive entrance.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Train:</h3>
          <p className='text-sm'>Nearest train station is Taunton, which is about 45 mins drive away. You can then get a bus from Taunton to Minehead.  
            <a href="https://www.knowlemanor.co.uk/how-to-find-us/" className="underline block mt-1">
            how to find us
            </a>
          </p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Parking</h3>
          <p className='text-sm'>There&apos;s a large car park at the Manor.</p>
          <p className="italic text-sm">Vans - any guidance for people sleeping?</p>
        </div>
        
        <div>
          <h3 className="text-m font-semibold mb-1">Times</h3>
          <p className='text-sm'>Arrive at the venue any time from 5pm Thursday. Check out is by 4pm Sunday.</p>
        </div>
      </InfoSection>

      <InfoSection title="Food">
        <p className='text-sm mb-4'>Meals will be provided on both Friday & Saturday (thanks Mischa&apos;s mum!)</p>

        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Brunch</h3>
          <p>Help yourself throughout the day</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Dinner</h3>
          <p className='text-sm'>Provided both days</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Drinks</h3>
          <p className='text-sm'>BYOB (But we will have plenty of coffee!)</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Snacks</h3>
          <p className='text-sm'>We should have enough snacks to keep you going through Friday and Saturday - but you might want to bring some extra stuff for Thursday and the journey home on Sunday.</p>
        </div>
      </InfoSection>

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

      <InfoSection title="Room allocation">
        <p className='text-sm'>Rooms have been pre-allocated - feel free to swap with people if you wish.</p>
      </InfoSection>

      <InfoSection title="Venue rules">
        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Swimming pool:</h3>
          <p className='text-sm'>Strictly no drinks or glass in the pool area please! The pool is open 8am to 8pm.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-m font-semibold mb-1">Venue staff & noise:</h3>
          <p className='text-sm'>The owners live next door. They hopefully won&apos;t be coming inside the venue, but please be discreet with stuff, & keep noise outside (smokers / vans) to a minimum at night.</p>
        </div>

        <p className='text-sm'>Respect the place, help us keep it tidy, have fun ♡</p>
      </InfoSection>

    </div>
  );
}