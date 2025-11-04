'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const menuItems = [
    { name: 'Times', href: '/' },
    { name: 'Info', href: '/info' },
    { name: 'Confessions', href: '/confessions' },
  ];

  return (
    <nav className="bg-background text-foreground fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <div className="flex items-baseline space-x-2 sm:space-x-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 sm:px-3 py-2 rounded-md text-sm font-medium text-foreground hover:underline transition-all ${
                    isActive ? 'underline' : ''
                  }`}
                  style={{
                    textDecorationThickness: isActive ? '0.5px' : undefined
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}