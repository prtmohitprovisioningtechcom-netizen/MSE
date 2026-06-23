'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Membership', path: '/membership' },
    { name: 'Events', path: '/events' },
    { name: 'News', path: '/news' },
    { name: 'SC/ST Support', path: '/sc-st-support' },
    { name: 'Vendor Dev', path: '/vendor-development' },
    { name: 'Grievance', path: '/grievance' },
    { name: 'Contact', path: '/contact' },
    // Additional pages
  ];

  const isActive = (path: string) => path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="tricolor-bar" />

      <div className="hidden md:flex bg-primary py-4 px-6 justify-between items-center text-xs text-white/95">
        <div className="flex items-center gap-4">
          <span>Partners In Growth, Nation In Progress</span>
          <span className="text-secondary font-medium">Empowering MSMEs across India</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Helpline: +91-22-2623-1111</span>
          <span>|</span>
          <span>info@mseccia.org.in</span>
        </div>
      </div>

      <nav className="glass-nav shadow-sm px-4 md:px-8 py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <div className="flex items-center">
            <img src="/mse.jpeg" alt="MSE Logo" className="h-28 w-28" />
          </div>
          <div>
          <span className="font-medium text-base md:text-lg tracking-tight text-primary font-display flex items-center gap-1.5 leading-none">
            MSE CHAMBERS OF COMMERCE & INDUSTRY <br />
            ASSOCIATION
          </span>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 rounded-md text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                isActive(link.path)
                  ? 'text-primary bg-primary/5 border-b-2 border-secondary font-bold'
                  : 'text-corp-text hover:text-primary hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-primary hover:bg-slate-100 rounded-lg transition-all"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 animate-fade-in-up py-4 px-6 z-40">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5 font-bold border-l-4 border-secondary'
                    : 'text-corp-text hover:text-primary hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

