'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  
  const menuItems = [
    { name: 'Times', href: '#timetable' },
    { name: 'Info', href: '#info' },
    { name: 'Confessions', href: '/confessions' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // If we're not on the main page, navigate there first
      if (pathname !== '/') {
        router.push('/' + href);
      } else {
        // We're on the main page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For full page routes, use router.push
      router.push(href);
    }
  };

  return (
    <nav className="bg-background/80 backdrop-blur-sm text-foreground fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <div className="flex items-baseline space-x-2 sm:space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="px-2 sm:px-3 py-2 rounded-md text-sm font-medium text-foreground hover:opacity-75 transition-opacity"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}