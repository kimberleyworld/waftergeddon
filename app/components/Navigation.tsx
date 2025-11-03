'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Confessions', href: '/confessions' },
  ];

  return (
    <nav className="bg-background text-foreground shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <div className="flex items-baseline space-x-2 sm:space-x-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 sm:px-3 py-2 rounded-md text-sm font-medium hover:text-gothRed ${
                    isActive ? 'nav-active' : 'text-foreground'
                  }`}
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