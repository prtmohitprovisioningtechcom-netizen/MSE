'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { initiatives, organization, serviceDesks } from '@/lib/siteContent';

const navGroups = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    children: serviceDesks.slice(0, 5).map((desk) => ({ name: desk.title.replace(' Desk', ''), path: desk.slug })),
  },
  {
    name: 'Initiatives',
    path: '/sc-st-support',
    children: initiatives.map((name) => ({
      name,
      path: name.includes('SC/ST') ? '/sc-st-support' : name.includes('Vendor') ? '/vendor-development' : name.includes('Grievance') ? '/grievance' : '/services',
    })),
  },
  { name: 'Membership', path: '/membership' },
  { name: 'Events', path: '/events' },
  { name: 'News & Media', path: '/news' },
  {
    name: 'Industrial Desk',
    path: '/industrial',
    children: [
      { name: 'Track Grievance', path: '/grievance' },
      { name: 'Online Application', path: '/membership' },
      { name: 'Buyer-Seller Matchmaking', path: '/matchmaking' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="tricolor-bar" />

      <div className="hidden md:flex bg-primary py-3 px-6 justify-between items-center text-xs text-white/95">
        <div className="flex items-center gap-4">
          <span>{organization.tagline}</span>
          <span className="text-secondary font-semibold">MSME | Industry | Vendor Development</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Helpline: {organization.phone}</span>
          <span>|</span>
          <span>{organization.email}</span>
        </div>
      </div>

      <nav className="glass-nav shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group min-w-0">
            <Image src="/mse.jpeg" alt="MSECCIA Logo" width={128} height={96} className="h-24 w-32 md:h-28 md:w-36 object-contain" priority />
        </Link>

        <div className="hidden xl:flex items-center gap-1.5">
          {navGroups.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.path}
                className={`px-3 py-2 rounded-md text-xs font-semibold tracking-wide uppercase transition-all duration-200 flex items-center gap-1 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/5 border-b-2 border-secondary font-bold'
                    : 'text-corp-text hover:text-primary hover:bg-slate-50'
                }`}
              >
                {link.name}
                {link.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {link.children && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="w-72 rounded-2xl bg-white border border-slate-100 shadow-xl p-2">
                    {link.children.map((child) => (
                      <Link key={`${link.name}-${child.name}`} href={child.path} className="block rounded-xl px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-primary/5 hover:text-primary">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link href="/membership" className="hidden xl:inline-flex px-4 py-2.5 bg-secondary hover:bg-secondary-hover text-white text-xs font-extrabold rounded-xl shadow-sm uppercase tracking-wider transition-all">
          Apply Now
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-primary hover:bg-slate-100 rounded-lg transition-all"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 animate-fade-in-up py-4 px-6 z-40 max-h-[75vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navGroups.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/5 font-bold border-l-4 border-secondary'
                      : 'text-corp-text hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-slate-100 pl-3">
                    {link.children.map((child) => (
                      <Link key={`${link.name}-${child.name}`} href={child.path} onClick={() => setIsOpen(false)} className="block py-1.5 text-xs font-semibold text-slate-500">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
