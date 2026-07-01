'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Users, Clock, BookOpen } from 'lucide-react';

interface EventItem {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  capacity: number;
  image?: string;
  registrationDeadline?: string;
}

interface EventsClientProps {
  events: EventItem[];
}

export default function EventsClient({ events: initialEvents }: EventsClientProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const fallbackEvents = [
    {
      _id: '1',
      title: 'National MSME Conclave & Vendor Development Program',
      description: 'Connecting micro and small scale manufacturers with Public Sector Undertakings and large corporate buyers.',
      date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Pragati Maidan, Hall No. 5, New Delhi',
      category: 'Vendor Meet',
      capacity: 350,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
      registrationDeadline: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      _id: '2',
      title: 'Workshop on Government Credit Schemes & Subsidies',
      description: 'An interactive training session about CGTMSE, Mudra loans, and technology upgradation subsidy awareness.',
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'MSE Conference Hall, Mumbai',
      category: 'Workshop',
      capacity: 150,
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop',
      registrationDeadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      _id: '3',
      title: 'India Industrial Expo 2026',
      description: 'A trade show highlighting Indian MSME manufacturing, smart factory technology, and sustainable industrial equipment.',
      date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'BIEC Exhibition Center, Bengaluru',
      category: 'Exhibition',
      capacity: 1000,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  const events = initialEvents.length > 0 ? initialEvents : fallbackEvents;
  const now = new Date();
  const categories = ['All', 'Workshop', 'Vendor Meet', 'Exhibitions & Fairs'];

  const filteredEvents = events.filter((event: EventItem) => {
    const eventDate = new Date(event.date);
    const matchesTab = activeTab === 'upcoming' ? eventDate >= now : eventDate < now;
    const matchesCategory = activeCategory === 'All'
      ? true
      : activeCategory === 'Workshop'
        ? event.category === 'Workshop'
        : activeCategory === 'Vendor Meet'
          ? event.category === 'Vendor Meet'
          : event.category === 'Trade Fair' || event.category === 'Exhibition';
    return matchesTab && matchesCategory;
  });

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Chamber Calendar</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          Trade Meets & Workshops
        </h1>
        <p className="text-sm text-slate-500">
          Browse upcoming vendor development conclaves, procurement meetings, capacity-building programs, and trade exhibitions curated for MSMEs and industrial partners.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center border-b border-slate-200 pb-4 gap-4">
        <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1 shrink-0">
          <button onClick={() => { setActiveTab('upcoming'); setActiveCategory('All'); }} className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${activeTab === 'upcoming' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-primary'}`}>
            Upcoming Events
          </button>
          <button onClick={() => { setActiveTab('past'); setActiveCategory('All'); }} className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${activeTab === 'past' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-primary'}`}>
            Past Archive
          </button>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-3 py-1.5 border rounded-full text-xs font-semibold tracking-wide transition-all ${activeCategory === cat ? 'border-primary bg-primary text-white' : 'border-slate-200 text-slate-500 hover:border-slate-400 bg-white'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100 max-w-md mx-auto space-y-4">
          <Clock className="h-8 w-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No events found</h3>
          <p className="text-xs text-slate-500">There are no matching events listed for the selected criteria at this time.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event: EventItem) => {
            const isPast = new Date(event.date) < now;
            return (
              <div key={event._id} className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all">
                {event.image && (
                  <div className="h-48 w-full overflow-hidden bg-slate-100 relative">
                    <Image src={event.image} alt={event.title} fill unoptimized className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm">{event.category}</span>
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4 grow">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider block">
                      {new Date(event.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-display leading-tight">{event.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{event.description}</p>
                  <hr className="border-slate-100" />
                  <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent shrink-0" />
                      <span className="truncate" title={event.location}>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary shrink-0" />
                      <span>Cap: {event.capacity} seats</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 shrink-0">
                  <div className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 ${isPast ? 'bg-slate-100 text-slate-400' : 'bg-primary/5 text-primary border border-primary/10'}`}>
                    {isPast ? <BookOpen className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
                    {isPast ? 'Past Event Archive' : 'Contact Secretariat For Participation'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

