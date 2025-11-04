'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TimeTables() {
  const [selectedDay, setSelectedDay] = useState<'friday' | 'saturday'>('friday');

  return (
    <div className="p-4 bg-background text-foreground w-full mt-8">
      <h1 className="text-4xl font-cloister text-center mb-4">Timetable</h1>
      <div className="flex justify-center items-center mb-4">
        <h2
          className={`text-lg cursor-pointer px-4 text-foreground transition-all ${
            selectedDay === 'friday' ? 'underline' : 'hover:underline'
          }`}
          style={{
            textDecorationThickness: selectedDay === 'friday' ? '0.5px' : undefined
          }}
          onClick={() => setSelectedDay('friday')}
        >
          Friday
        </h2>
        <h2 
          className={`text-lg cursor-pointer px-4 text-foreground transition-all ${
            selectedDay === 'saturday' ? 'underline' : 'hover:underline'
          }`}
          style={{
            textDecorationThickness: selectedDay === 'saturday' ? '0.5px' : undefined
          }}
          onClick={() => setSelectedDay('saturday')}
        >
          Saturday
        </h2>
      </div>
      
      <div className="flex justify-center">
        <Image
          src={selectedDay === 'friday' ? '/images/FridayMobile.svg' : '/images/SaturdayMobile.svg'}
          alt={`${selectedDay} schedule`}
          width={400}
          height={600}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}  