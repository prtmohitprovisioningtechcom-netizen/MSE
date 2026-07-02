'use client';

import { useState, useTransition, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, Mail, MapPin, Menu, Phone, Users, X } from 'lucide-react';
import { FacebookIcon, YoutubeIcon } from '@/components/icons/SocialIcons';
import OrganizationAddress from '@/components/OrganizationAddress';
import { organization } from '@/lib/siteContent';
import { homeInitiatives } from '@/lib/homeInitiatives';

const navGroups = [
  { name: 'Home', path: '/' },
  { name: 'AIM', path: '/aim' },
  { name: 'MISSION', path: '/mission' },
  { name: 'VISION', path: '/vision' },
  { name: 'Director Message', path: '/about/director-message' },
  { name: 'Membership', path: '/membership' },
  { name: 'Events', path: '/events' },
  { name: 'Job & Business Support', path: '/job-business-support' },
  { name: 'News & Media', path: '/news' },
  { name: 'May I Help You', path: '/may-i-help-you' },
  { name: 'Contact', path: '/contact' },
];

const ourMembersPath = '/our-members';

const mainNavPaths = navGroups.map((g) => g.path);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);
  const [topBarHeight, setTopBarHeight] = useState(40);
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [clickedPath, setClickedPath] = useState<string | null>(null);

  useEffect(() => {
    const prefetchMainNav = () => {
      mainNavPaths.forEach((path) => router.prefetch(path));
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetchMainNav, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(prefetchMainNav, 1500);
    return () => clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    const el = topBarRef.current;
    if (!el) return;

    const updateHeight = () => setTopBarHeight(el.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setClickedPath(path);
    setIsOpen(false);
    startTransition(() => {
      router.push(path);
    });
  };

  useEffect(() => {
    if (!isPending && clickedPath) {
      setClickedPath(null);
    }
  }, [isPending, clickedPath]);

  const navLinkClass = (path: string, size: 'main' | 'sub' = 'main') => {
    const base =
      size === 'main'
        ? 'px-1.5 xl:px-2 py-1.5 rounded-md text-[10px] xl:text-[10px] 2xl:text-[11px] font-semibold tracking-wide uppercase transition-all duration-100 flex items-center gap-1 cursor-pointer whitespace-nowrap'
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

  const renderOurMembersButton = (compact = false) => {
    const active = isActive(ourMembersPath);
    return (
      <a
        key="our-members"
        href={ourMembersPath}
        onClick={(e) => handleNav(e, ourMembersPath)}
        className={`our-members-pill-btn inline-flex items-center gap-1.5 rounded-full border-2 font-bold cursor-pointer shadow-sm transition-all ml-1 sm:ml-1.5 ${
          compact ? 'px-2.5 py-1 text-[9px] sm:text-[10px]' : 'px-3 py-1.5 text-[9px] sm:text-[10px] xl:text-[11px]'
        } ${
          active
            ? 'border-amber-500 bg-linear-to-r from-amber-500 to-secondary text-white shadow-md scale-[1.02]'
            : 'border-secondary/70 bg-linear-to-r from-amber-50 via-white to-emerald-50 text-primary hover:border-secondary hover:shadow-md hover:from-amber-100'
        }`}
      >
        <Users className={`shrink-0 ${compact ? 'h-3 w-3' : 'h-3.5 w-3.5'}`} />
        Our Members
      </a>
    );
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
        onMouseEnter={() => router.prefetch(path)}
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

  const renderInitiativeRow = (compact = false) =>
    homeInitiatives.flatMap((item, index) => {
      const buttons = [renderInitiativeButton(item, index, compact)];
      if (item.slug === 'mse-ccia') {
        buttons.push(renderOurMembersButton(compact));
      }
      return buttons;
    });

  return (
    <>
      <div
        ref={topBarRef}
        className="fixed top-0 left-0 right-0 z-60 w-full shadow-sm"
      >
        <div className="tricolor-bar" />

        <div className="bg-primary py-2 sm:py-2.5 px-3 sm:px-4 md:px-6 text-[9px] sm:text-[10px] md:text-xs text-white/95">
          <div className="max-w-360 mx-auto flex flex-nowrap items-center justify-between gap-3 sm:gap-4 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-nowrap items-center gap-2 sm:gap-4 shrink-0">
              <span className="whitespace-nowrap font-semibold">{organization.tagline}</span>
              <span className="whitespace-nowrap text-secondary font-semibold">
                MSME | Industry | Vendor Development
              </span>
            </div>
            <div className="flex flex-nowrap items-center gap-2 sm:gap-3 shrink-0 ml-auto">
              <span className="whitespace-nowrap">Helpline: {organization.phone}</span>
              <span className="whitespace-nowrap opacity-70">|</span>
              <span className="whitespace-nowrap">{organization.email}</span>
            </div>
          </div>
        </div>
      </div>

      <header
        className="w-full bg-white shadow-sm relative z-40"
        style={{ paddingTop: topBarHeight }}
      >
      <div className="border-b border-slate-100 px-4 md:px-6 xl:px-8 py-3 xl:py-4 bg-white">
        <div className="max-w-360 mx-auto flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 xl:gap-6">
          <div className="flex items-start gap-3 w-full xl:w-auto xl:max-w-80 2xl:max-w-88 xl:shrink-0">
            <Link
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="shrink-0 cursor-pointer self-center sm:self-start"
            >
              <Image
                src="/mse.jpeg"
                alt="MSE Logo"
                width={320}
                height={246}
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 176px"
                className="h-28 w-auto sm:h-32 md:h-36 lg:h-40 xl:h-44 object-contain"
                priority
              />
            </Link>
            <div className="min-w-0 flex-1 space-y-1.5">
              <Link
                href="/"
                onClick={(e) => handleNav(e, '/')}
                className="block text-[10px] sm:text-[11px] md:text-xs xl:text-[12px] font-extrabold text-primary leading-tight font-display uppercase hover:text-primary/80 transition-colors cursor-pointer"
              >
                <span className="block whitespace-nowrap">MSE Chamber of Commerce</span>
                <span className="block whitespace-nowrap">And Industry Association</span>
              </Link>
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
                  className="flex items-center gap-1.5 hover:text-primary transition-colors min-w-0"
                >
                  <Mail className="h-3 w-3 text-secondary shrink-0" />
                  <span className="font-medium whitespace-nowrap">{organization.email}</span>
                </a>
                <a
                  href={organization.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors min-w-0"
                >
                  <Globe className="h-3 w-3 text-secondary shrink-0" />
                  <span className="font-medium whitespace-nowrap">www.mseindustryassociation.com</span>
                </a>
                <p className="flex items-center gap-1.5 min-w-0 pt-0.5">
                  <MapPin className="h-3 w-3 text-secondary shrink-0" />
                  <OrganizationAddress className="font-medium text-[9px] sm:text-[10px] whitespace-nowrap" />
                </p>
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

          <div className="hidden xl:flex flex-col justify-start flex-1 min-w-0 gap-2 ml-auto pl-6 2xl:pl-8 border-l border-slate-100">
            <nav className="flex flex-nowrap items-center justify-start gap-x-1.5 2xl:gap-x-2 w-full overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {navGroups.map((link) => (
                <div key={link.name} className="relative shrink-0">
                  <a
                    href={link.path}
                    onClick={(e) => handleNav(e, link.path)}
                    className={`${navLinkClass(link.path, 'main')} whitespace-nowrap`}
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </nav>

            <div className="grid w-full grid-cols-[10.5rem_1fr] 2xl:grid-cols-[12.5rem_1fr] items-start gap-x-2 2xl:gap-x-3">
              <div className="flex flex-col items-start shrink-0 pt-0.5">
                <span className="text-[10px] font-extrabold tracking-[0.14em] text-slate-500 mb-0.5">
                  REGD BY-
                </span>
                <Image
                  src="/Logo/Gem(6).png"
                  alt="GeM"
                  width={262}
                  height={118}
                  className="h-20 2xl:h-24 w-auto object-contain pointer-events-none select-none"
                  draggable={false}
                />
              </div>

              <div className="flex flex-wrap gap-1 w-full max-w-5xl items-center justify-end ml-auto">
                {renderInitiativeRow()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden border-b border-slate-200 bg-white py-4 px-4 z-40 max-h-[calc(100dvh-10rem)] overflow-y-auto">
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
              </div>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-secondary">Initiatives</p>
              <div className="flex flex-wrap gap-1.5 px-1 items-center">
                {renderInitiativeRow(true)}
              </div>
            </div>
          </div>
        </div>
      )}
      </header>
    </>
  );
}
