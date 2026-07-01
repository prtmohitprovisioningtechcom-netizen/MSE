'use client';

import { useState, useTransition, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Globe, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { FacebookIcon, YoutubeIcon } from '@/components/icons/SocialIcons';
import { organization, navServiceLinks } from '@/lib/siteContent';
import { homeInitiatives } from '@/lib/homeInitiatives';

const navGroups = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    path: '/about/director-message',
    children: [{ name: 'Director Message', path: '/about/director-message' }],
  },
  {
    name: 'Services',
    path: '/services',
    children: navServiceLinks.map((desk) => ({
      name: desk.title.replace(' Desk', ''),
      path: desk.slug,
    })),
  },
  { name: 'Membership', path: '/membership' },
  { name: 'Events', path: '/events' },
  { name: 'Job & Business Support', path: '/job-business-support' },
  { name: 'News & Media', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

const initiativePaths = homeInitiatives.map((item) => `/initiatives/${item.slug}`);

const allPaths = Array.from(new Set([
  ...navGroups.flatMap((g) => [g.path, ...(g.children?.map((c) => c.path) || [])]),
  ...initiativePaths,
]));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [clickedPath, setClickedPath] = useState<string | null>(null);

  useEffect(() => {
    allPaths.forEach((path) => {
      router.prefetch(path);
    });
  }, [router]);

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setClickedPath(path);
    setIsOpen(false);
    startTransition(() => {
      router.push(path);
    });
  };

  if (!isPending && clickedPath) {
    setClickedPath(null);
  }

  const navLinkClass = (path: string, size: 'main' | 'sub' = 'main') => {
    const base =
      size === 'main'
        ? 'px-2 py-1.5 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase transition-all duration-100 flex items-center gap-1 cursor-pointer'
        : 'px-2 py-1 rounded-full border border-slate-200 text-[9px] sm:text-[10px] font-semibold text-slate-600 hover:border-primary/40 hover:text-primary hover:bg-primary/5 cursor-pointer transition-all';

    if (clickedPath === path) {
      return `${base} text-secondary bg-secondary/10 scale-95`;
    }
    if (isActive(path)) {
      return size === 'main'
        ? `${base} text-primary bg-primary/5 border-b-2 border-secondary font-bold`
        : `${base} border-primary bg-primary/5 text-primary`;
    }
    return size === 'main'
      ? `${base} text-corp-text hover:text-primary hover:bg-slate-50 active:scale-95 active:text-secondary`
      : base;
  };

  const renderInitiativeButton = (
    item: (typeof homeInitiatives)[number],
    index: number,
    compact = false,
  ) => {
    const path = `/initiatives/${item.slug}`;
    const active = isActive(path);
    return (
      <a
        key={item.slug}
        href={path}
        onClick={(e) => handleNav(e, path)}
        style={{ animationDelay: `${index * 55}ms, ${index * 0.2}s` }}
        className={`initiative-pill-btn inline-flex items-center rounded-full border font-semibold cursor-pointer ${
          compact ? 'px-2 py-1 text-[9px] sm:text-[10px]' : 'px-2.5 py-1.5 text-[9px] sm:text-[10px] xl:text-[11px]'
        } ${
          active
            ? 'is-active border-primary text-white'
            : 'border-slate-200 text-slate-700 hover:text-primary'
        }`}
      >
        {item.title}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="tricolor-bar" />

      <div className="flex flex-col gap-1.5 sm:flex-row sm:justify-between sm:items-center bg-primary py-2.5 sm:py-3 px-4 md:px-6 text-[10px] sm:text-xs text-white/95">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span>{organization.tagline}</span>
          <span className="text-secondary font-semibold">MSME | Industry | Vendor Development</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span>Helpline: {organization.phone}</span>
          <span className="hidden sm:inline">|</span>
          <span className="break-all sm:break-normal">{organization.email}</span>
        </div>
      </div>

      <div className="border-b border-slate-100 px-4 md:px-6 xl:px-8 py-3 xl:py-4">
        <div className="max-w-360 mx-auto flex flex-col xl:flex-row xl:items-start gap-4 xl:gap-8">
          <div className="flex items-start gap-3 w-full xl:w-[34%] xl:max-w-88 xl:shrink-0">
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="shrink-0 cursor-pointer"
            >
              <Image
                src="/mse.jpeg"
                alt="MSE Logo"
                width={260}
                height={200}
                className="h-20 w-auto sm:h-24 md:h-28 xl:h-34 object-contain"
                priority
              />
            </a>
            <div className="min-w-0 flex-1 space-y-1.5">
              <a
                href="/"
                onClick={(e) => handleNav(e, '/')}
                className="block text-xs md:text-sm xl:text-[15px] font-extrabold text-primary leading-snug font-display uppercase hover:text-primary/80 transition-colors cursor-pointer"
              >
                <span className="block whitespace-nowrap">MSE Chamber of Commerce</span>
                <span className="block whitespace-nowrap">And Industry Association</span>
              </a>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.16em] text-secondary">
                {organization.tagline}
              </p>
              <div className="space-y-1 text-[10px] text-slate-600">
                <a
                  href={`tel:${organization.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <Phone className="h-3 w-3 text-secondary shrink-0" />
                  <span className="font-semibold">{organization.phone}</span>
                </a>
                <a
                  href={`mailto:${organization.email}`}
                  className="flex items-start gap-1.5 hover:text-primary transition-colors"
                >
                  <Mail className="h-3 w-3 text-secondary shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug break-all">{organization.email}</span>
                </a>
                <p className="flex items-center gap-1.5 min-w-0">
                  <MapPin className="h-3 w-3 text-secondary shrink-0" />
                  <span className="font-medium whitespace-nowrap text-[9px] sm:text-[10px]">{organization.address}</span>
                </p>
                <a
                  href={organization.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-1.5 hover:text-primary transition-colors"
                >
                  <Globe className="h-3 w-3 text-secondary shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug break-all">www.mseindustryassociation.com</span>
                </a>
                <div className="flex items-center gap-2 pt-0.5">
                  <a
                    href={organization.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/40 transition-colors"
                  >
                    <FacebookIcon className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={organization.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/40 transition-colors"
                  >
                    <YoutubeIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="xl:hidden shrink-0 p-2 text-primary hover:bg-slate-100 rounded-lg transition-all"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden xl:flex flex-col flex-1 min-w-0 gap-2.5 w-full xl:pt-1">
            <nav className="flex flex-wrap xl:flex-nowrap xl:justify-between items-center gap-x-1 gap-y-1.5 xl:gap-1 w-full">
              {navGroups.map((link) => (
                <div key={link.name} className="relative group shrink-0">
                  <a
                    href={link.path}
                    onClick={(e) => handleNav(e, link.path)}
                    className={navLinkClass(link.path, 'main')}
                  >
                    {link.name}
                    {link.children && <ChevronDown className="h-3 w-3 shrink-0 hidden xl:block" />}
                  </a>
                  {link.children && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 hidden xl:block">
                      <div className="w-72 rounded-2xl bg-white border border-slate-100 shadow-xl p-2">
                        {link.children.map((child) => (
                          <a
                            key={`${link.name}-${child.name}`}
                            href={child.path}
                            onClick={(e) => handleNav(e, child.path)}
                            className="block rounded-xl px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-primary/5 hover:text-primary cursor-pointer active:scale-95 active:text-secondary transition-all duration-100"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex flex-wrap gap-2 w-full">
              {homeInitiatives.map((item, index) => renderInitiativeButton(item, index))}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden border-b border-slate-200 bg-white py-4 px-4 z-40 max-h-[75vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navGroups.map((link) => (
              <div key={link.name}>
                <a
                  href={link.path}
                  onClick={(e) => handleNav(e, link.path)}
                  className={`block py-2 px-3 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-100 cursor-pointer ${
                    clickedPath === link.path
                      ? 'text-secondary bg-secondary/10'
                      : isActive(link.path)
                        ? 'text-primary bg-primary/5 font-bold border-l-4 border-secondary'
                        : 'text-corp-text hover:text-primary hover:bg-slate-50 active:text-secondary'
                  }`}
                >
                  {link.name}
                </a>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-slate-100 pl-3">
                    {link.children.map((child) => (
                      <a
                        key={`${link.name}-${child.name}`}
                        href={child.path}
                        onClick={(e) => handleNav(e, child.path)}
                        className="block py-1.5 text-xs font-semibold text-slate-500 cursor-pointer hover:text-primary active:text-secondary transition-all duration-100"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-secondary">Initiatives</p>
              <div className="flex flex-wrap gap-1.5 px-1">
                {homeInitiatives.map((item, index) => renderInitiativeButton(item, index, true))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
