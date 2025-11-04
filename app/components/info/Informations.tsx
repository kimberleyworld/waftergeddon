import InfoSection from './InfoSectionComponent';

export default function Informations() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      
      <InfoSection title="Address">
        <div>
          <p className="font-semibold">Knowle Manor</p>
          <p>Dunster, Minehead</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">For sat navs:</h3>
          <p>Follow the south lodge postcode TA24 72B which will take you to the front drive entrance.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Train:</h3>
          <p>Nearest train station is Taunton, which is about 45 mins drive away. You can then get a bus from Taunton to Minehead.</p>
          <a href="https://www.knowlemanor.co.uk/how-to-find-us/" className="text-gothRed hover:underline block mt-2">
            how-to-find-us
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Parking</h3>
          <p>There&apos;s a large car park at the Manor.</p>
          <p className="italic">Vans - any guidance for people sleeping?</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Times</h3>
          <p>Arrive at the venue any time from 5pm Thursday.</p>
          <p>Check out is by 4pm Sunday.</p>
        </div>
      </InfoSection>

      <InfoSection title="Food">
        <p>Meals will be provided on both Friday & Saturday (thanks Mischa&apos;s mum!)</p>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Brunch</h3>
          <p>Help yourself throughout the day</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Dinner</h3>
          <p>Provided both days</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Drinks</h3>
          <p>BYOB (But we will have plenty of coffee!)</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Snacks</h3>
          <p>We should have enough snacks to keep you going through Friday and Saturday - but you might want to bring some extra stuff for Thursday and the journey home on Sunday.</p>
        </div>
      </InfoSection>

      <InfoSection title="What to bring">
        <div>
          <ul className="list-disc list-inside space-y-1">
            <li>Swimwear for the pool</li>
            <li>Towels (beds have towels, but they say bring your own for pool. If you&apos;re in a van / airbed you&apos;ll also need your own).</li>
            <li>Fancy dress for Saturday</li>
            <li>If you&apos;re not staying in a bed - air mattress & sleeping bag etc</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Decor & equipment</h3>
          <p>If you have anything to help us decorate the venue, especially lights, please bring them!</p>
          
          <h4 className="text-lg font-medium mt-3 mb-2">Stuff that would be useful:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Lights (party lights, ambient lights etc), extension cables</li>
            <li>Blankets / cosy stuff for squish city (heaven)</li>
            <li>White bed sheets (to cover sofas in heaven)</li>
            <li>Any decor or anything fun you wanna bring go for it - will defo find use for it!</li>
          </ul>
        </div>
      </InfoSection>

      <InfoSection title="Room allocation">
        <p>Rooms have been pre-allocated - feel free to swap with people if you wish.</p>
      </InfoSection>

      <InfoSection title="Venue rules">
        <div>
          <h3 className="text-xl font-semibold mb-2">Swimming pool:</h3>
          <p>Strictly no drinks or glass in the pool area please! The pool is open 8am to 8pm.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Venue staff & noise:</h3>
          <p>The owners live next door. They hopefully won&apos;t be coming inside the venue, but please be discreet with stuff, & keep noise outside (smokers / vans) to a minimum at night.</p>
        </div>
        
        <p className="font-medium">Respect the place, help us keep it tidy, have fun ♡</p>
      </InfoSection>

    </div>
  );
}