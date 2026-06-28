"use client";
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react/no-unescaped-entities, @next/next/no-img-element */

import { useState } from 'react';
import Link from 'next/link';
import { 
  User as UserIcon, Building2, Calendar, ShieldAlert, BookOpen, 
  Clock, ShieldCheck, Download, ExternalLink, ArrowRight, CheckCircle2, Info
} from 'lucide-react';

interface DashboardClientProps {
  user: { id: string; name: string; email: string; role: string };
  membership: any;
  events: any[];
  grievances: any[];
  schemes: any[];
}

export default function DashboardClient({
  user,
  membership,
  events,
  grievances,
  schemes
}: DashboardClientProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'membership' | 'events' | 'grievances' | 'schemes'>('profile');

  const tabs = [
    { id: 'profile', name: 'Profile Summary', icon: UserIcon },
    { id: 'membership', name: 'Membership Application', icon: Building2 },
    { id: 'events', name: 'Event Bookings', icon: Calendar },
    { id: 'grievances', name: 'Grievance History', icon: ShieldAlert },
    { id: 'schemes', name: 'Government Schemes', icon: BookOpen }
  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-8">
      
      {/* Welcome Banner */}
      <div className="bg-linear-to-r from-primary to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
        <div className="relative z-10 space-y-1">
          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block">User Dashboard</span>
          <h1 className="text-2xl md:text-3xl font-extrabold font-display">Welcome Back, {user.name}</h1>
          <p className="text-xs text-slate-300 mt-1">Classification : <strong className="text-secondary">{user.role}</strong> | Portal ID: {user.id.slice(18).toUpperCase()}</p>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-wider text-left border ${
                  activeTab === tab.id
                    ? 'border-primary bg-primary text-white shadow-md'
                    : 'border-slate-100 hover:border-slate-300 text-slate-600 bg-white hover:bg-slate-50'
                }`}
              >
                <Icon className="h-4.5 w-4.5 shrink-0" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents Pane */}
        <div className="lg:col-span-9 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
          
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-6 text-xs">
              <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2">Profile Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Full Name</span>
                  <p className="font-bold text-slate-900 text-sm">{user.name}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Account Email</span>
                  <p className="font-bold text-slate-900 text-sm">{user.email}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">User Role</span>
                  <p className="font-bold text-secondary text-sm">{user.role}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Account Status</span>
                  <p className="font-bold text-accent text-sm flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> Active Portal User
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* MEMBERSHIP TAB */}
          {activeTab === 'membership' && (
            <div className="space-y-6 text-xs text-slate-600">
              <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2">Membership Status</h3>
              
              {!membership ? (
                <div className="text-center py-10 max-w-sm mx-auto space-y-4">
                  <Building2 className="h-8 w-8 text-slate-300 mx-auto" />
                  <h4 className="font-bold text-slate-800">No active application found</h4>
                  <p className="text-slate-500">You have not submitted a chamber membership application yet.</p>
                  <Link href="/membership" className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider">
                    <span>Apply Online Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase block">Registered Entity</span>
                      <strong className="text-slate-900 text-sm mt-0.5 block">{membership.companyName}</strong>
                      <span className="text-[10px] text-slate-400 mt-1 block">Tier: <strong className="text-primary">{membership.type}</strong></span>
                    </div>

                    <div>
                      {membership.status === 'Pending' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 font-bold text-[10px] uppercase">
                          <Clock className="h-3.5 w-3.5 animate-spin" /> Pending Review
                        </span>
                      )}
                      {membership.status === 'Approved' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 font-bold text-[10px] uppercase">
                          <ShieldCheck className="h-3.5 w-3.5" /> Approved
                        </span>
                      )}
                      {membership.status === 'Rejected' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-bold text-[10px] uppercase">
                          <ShieldAlert className="h-3.5 w-3.5" /> Rejected
                        </span>
                      )}
                    </div>
                  </div>

                  {membership.status === 'Approved' && (
                    <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-emerald-800">
                      <div>
                        <strong className="font-bold block">Digital Certificate Ready</strong>
                        <p className="text-[11px] text-emerald-600 leading-relaxed mt-0.5">Your membership certificate is active. You can print or download the PDF file.</p>
                      </div>
                      <a
                        href={`/api/certificate?membershipId=${membership._id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center gap-1.5 shrink-0"
                      >
                        <Download className="h-4 w-4" /> Download Certificate
                      </a>
                    </div>
                  )}

                  {membership.status === 'Pending' && (
                    <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl flex gap-2 text-amber-800">
                      <Info className="h-5 w-5 shrink-0" />
                      <p className="leading-relaxed">Your application is undergoing verification. Please check back in 48 hours.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* EVENTS TAB */}
          {activeTab === 'events' && (
            <div className="space-y-6 text-xs text-slate-600">
              <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2">Registered Event Bookings</h3>
              
              {events.length === 0 ? (
                <div className="text-center py-10 max-w-sm mx-auto space-y-4">
                  <Calendar className="h-8 w-8 text-slate-300 mx-auto" />
                  <h4 className="font-bold text-slate-800">No active bookings</h4>
                  <p className="text-slate-500">You have not registered for any upcoming meetings or conclaves yet.</p>
                  <Link href="/events" className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider">
                    <span>Explore Event Calendar</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {events.map((event) => (
                    <div 
                      key={event._id}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-slate-200 transition-all"
                    >
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 rounded bg-primary/5 text-primary text-[8px] font-extrabold uppercase tracking-wide">{event.category}</span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1">{event.title}</h4>
                        <p className="text-[10px] text-slate-400">Date: {new Date(event.date).toLocaleDateString('en-IN')} | Location: {event.location.split(',')[0]}</p>
                      </div>
                      <Link
                        href="/events"
                        className="px-4 py-2 border border-slate-200 hover:bg-slate-100 rounded-xl font-bold text-primary text-center shrink-0"
                      >
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* GRIEVANCES TAB */}
          {activeTab === 'grievances' && (
            <div className="space-y-6 text-xs text-slate-600">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <h3 className="text-lg font-bold text-primary font-display">Grievances Lodged</h3>
                <Link 
                  href="/grievance" 
                  className="px-3.5 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider text-[10px]"
                >
                  Lodge Grievance
                </Link>
              </div>

              {grievances.length === 0 ? (
                <div className="text-center py-10 max-w-sm mx-auto space-y-4">
                  <ShieldAlert className="h-8 w-8 text-slate-300 mx-auto" />
                  <h4 className="font-bold text-slate-800">No grievances logged</h4>
                  <p className="text-slate-500">You have no active industrial disputes or payment delays registered.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {grievances.map((complaint) => (
                    <div 
                      key={complaint._id}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3 hover:border-slate-200 transition-all"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="text-[9px] font-bold text-slate-400 uppercase font-mono">{complaint.trackingId}</span>
                          <h4 className="font-bold text-slate-900 text-sm leading-snug mt-0.5">{complaint.title}</h4>
                        </div>
                        
                        <div>
                          {complaint.status === 'Pending' && (
                            <span className="px-2 py-0.5 bg-amber-50 text-amber-600 border border-amber-100 rounded font-bold uppercase text-[8px]">Pending</span>
                          )}
                          {complaint.status === 'In Progress' && (
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-100 rounded font-bold uppercase text-[8px]">In Progress</span>
                          )}
                          {complaint.status === 'Resolved' && (
                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded font-bold uppercase text-[8px]">Resolved</span>
                          )}
                          {complaint.status === 'Closed' && (
                            <span className="px-2 py-0.5 bg-slate-50 text-slate-600 border border-slate-100 rounded font-bold uppercase text-[8px]">Closed</span>
                          )}
                        </div>
                      </div>
                      <p className="text-slate-500 leading-relaxed line-clamp-1">{complaint.description}</p>
                      
                      <div className="flex justify-between items-center text-[10px] border-t border-slate-200/50 pt-2 text-slate-400">
                        <span>Category: <strong className="text-slate-600">{complaint.category}</strong></span>
                        <Link href="/grievance" className="text-primary font-bold hover:underline">Track Updates →</Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SCHEMES TAB */}
          {activeTab === 'schemes' && (
            <div className="space-y-6 text-xs text-slate-600">
              <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2">Government Schemes & Eligibility</h3>
              
              <div className="space-y-4">
                {schemes.map((scheme) => (
                  <div 
                    key={scheme._id}
                    className="p-4.5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 text-xs"
                  >
                    <span className="px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/15 rounded text-[8px] font-bold uppercase tracking-wider">{scheme.category}</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">{scheme.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{scheme.description}</p>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-slate-200/50 text-[10px] text-slate-400">
                      <span>Udyam Registration Required</span>
                      {scheme.link && (
                        <a 
                          href={scheme.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-bold hover:underline flex items-center gap-0.5"
                        >
                          Official Link <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

