'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TimeTables() {
  const [selectedDay, setSelectedDay] = useState<'friday' | 'saturday'>('friday');

  return (
    <div className="p-4 bg-background text-foreground w-full">
      <h1 className="text-4xl font-cloister text-center mb-6">Timetable</h1>
      <div className="flex justify-center items-center gap-8 mb-4">
        <h2
          className={`text-3xl font-bold cursor-pointer transition-colors ${
            selectedDay === 'friday' ? 'text-gothRed' : 'text-foreground hover:text-gothRed'
          }`}
          onClick={() => setSelectedDay('friday')}
        >
          Friday
        </h2>
        <h2 
          className={`text-3xl font-bold cursor-pointer transition-colors ${
            selectedDay === 'saturday' ? 'text-gothRed' : 'text-foreground hover:text-gothRed'
          }`}
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