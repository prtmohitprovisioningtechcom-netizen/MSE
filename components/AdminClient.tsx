'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Users, Building2, Calendar, ShieldAlert, Newspaper, BookOpen, 
  Mail, X, Trash2, Plus, ArrowUpRight, Briefcase
} from 'lucide-react';

// Actions
import { approveMembership, rejectMembership } from '@/actions/membership';
import { updateComplaintStatusAction } from '@/actions/grievance';
import { createEventAction, deleteEventAction } from '@/actions/events';
import { createNewsAction, deleteNewsAction, createSchemeAction, deleteSchemeAction, deleteContactAction } from '@/actions/admin';
import ImageUploadField from '@/components/ImageUploadField';
import AdminJobBusinessPanel from '@/components/AdminJobBusinessPanel';

type AdminTab = 'memberships' | 'grievances' | 'events' | 'news' | 'schemes' | 'contacts' | 'jobBusiness';

interface AdminStats {
  users: { total: number; members: number; vendors: number; entrepreneurs: number };
  memberships: { total: number; pending: number; approved: number };
  events: { total: number };
  complaints: { total: number; pending: number; progress: number; resolved: number };
  newsCount: number;
  schemesCount: number;
  jobBusinessCount: number;
}

interface AdminMember {
  _id: string;
  companyName: string;
  ownerName?: string;
  email?: string;
  panNumber?: string;
  industryType?: string;
  type: string;
  status: string;
}

interface AdminComplaint {
  _id: string;
  trackingId: string;
  title: string;
  category: string;
  name: string;
  email: string;
  phone: string;
  status: string;
}

interface AdminEvent {
  _id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  capacity: number;
  registrations?: unknown[];
}

interface AdminNewsItem {
  _id: string;
  title: string;
  summary: string;
  type: string;
  publishedAt: string;
}

interface AdminScheme {
  _id: string;
  title: string;
  description: string;
  category: string;
}

interface AdminContact {
  _id: string;
  subject: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

interface JobBusinessDoc {
  _id: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType?: string;
  isPublished: boolean;
  createdAt: string;
}

interface AdminSession {
  name: string;
  role: string;
}

interface AdminClientProps {
  stats: AdminStats;
  initialData: {
    members: AdminMember[];
    complaints: AdminComplaint[];
    events: AdminEvent[];
    news: AdminNewsItem[];
    schemes: AdminScheme[];
    contacts: AdminContact[];
    jobBusinessDocuments: JobBusinessDoc[];
  };
  adminUser: AdminSession;
}

export default function AdminClient({ stats, initialData, adminUser }: AdminClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>('memberships');

  // Form Modals
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventForm, setEventForm] = useState({ title: '', description: '', date: '', location: '', category: 'Workshop', capacity: 100, image: '', registrationDeadline: '' });
  
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [newsForm, setNewsForm] = useState({ title: '', summary: '', content: '', type: 'News Article', mediaUrl: '' });

  const [showSchemeModal, setShowSchemeModal] = useState(false);
  const [schemeForm, setSchemeForm] = useState({ title: '', description: '', eligibility: '', benefits: '', category: 'Credit & Financial Assistance', link: '' });

  // Rejection/Resolution Comments states
  const [rejectionId, setRejectionId] = useState<string | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const [resolutionId, setResolutionId] = useState<string | null>(null);
  const [resolutionStatus, setResolutionStatus] = useState('In Progress');
  const [resolutionComment, setResolutionComment] = useState('');

  // Status indicators
  const [loading, setLoading] = useState(false);

  const tabs: { id: AdminTab; name: string; icon: typeof Building2; count: number }[] = [
    { id: 'memberships', name: 'Memberships', icon: Building2, count: initialData.members.length },
    { id: 'grievances', name: 'Grievances', icon: ShieldAlert, count: initialData.complaints.length },
    { id: 'events', name: 'Events Manager', icon: Calendar, count: initialData.events.length },
    { id: 'news', name: 'News & Media', icon: Newspaper, count: initialData.news.length },
    { id: 'schemes', name: 'Govt Schemes', icon: BookOpen, count: initialData.schemes.length },
    { id: 'jobBusiness', name: 'Job & Business', icon: Briefcase, count: initialData.jobBusinessDocuments?.length || 0 },
    { id: 'contacts', name: 'Contact Inbox', icon: Mail, count: initialData.contacts.length }
  ];

  // Members Action
  const handleApproveMember = async (id: string) => {
    setLoading(true);
    const res = await approveMembership(id);
    setLoading(false);
    if (res.success) {
      router.refresh();
    }
  };

  const handleRejectMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rejectionId || !rejectionReason) return;
    setLoading(true);
    const res = await rejectMembership(rejectionId, rejectionReason);
    setLoading(false);
    if (res.success) {
      setRejectionId(null);
      setRejectionReason('');
      router.refresh();
    }
  };

  // Grievance Action
  const handleResolveGrievance = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resolutionId || !resolutionComment) return;
    setLoading(true);
    const res = await updateComplaintStatusAction(resolutionId, resolutionStatus, resolutionComment);
    setLoading(false);
    if (res.success) {
      setResolutionId(null);
      setResolutionComment('');
      router.refresh();
    }
  };

  // Event Action
  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await createEventAction(eventForm);
    setLoading(false);
    if (res.success) {
      setShowEventModal(false);
      setEventForm({ title: '', description: '', date: '', location: '', category: 'Workshop', capacity: 100, image: '', registrationDeadline: '' });
      router.refresh();
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      await deleteEventAction(id);
      router.refresh();
    }
  };

  // News Action
  const handleCreateNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await createNewsAction(newsForm);
    setLoading(false);
    if (res.success) {
      setShowNewsModal(false);
      setNewsForm({ title: '', summary: '', content: '', type: 'News Article', mediaUrl: '' });
      router.refresh();
    }
  };

  const handleDeleteNews = async (id: string) => {
    if (confirm('Are you sure you want to delete this news article?')) {
      await deleteNewsAction(id);
      router.refresh();
    }
  };

  // Scheme Action
  const handleCreateScheme = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await createSchemeAction(schemeForm);
    setLoading(false);
    if (res.success) {
      setShowSchemeModal(false);
      setSchemeForm({ title: '', description: '', eligibility: '', benefits: '', category: 'Credit & Financial Assistance', link: '' });
      router.refresh();
    }
  };

  const handleDeleteScheme = async (id: string) => {
    if (confirm('Are you sure you want to delete this scheme?')) {
      await deleteSchemeAction(id);
      router.refresh();
    }
  };

  // Contact Action
  const handleDeleteContact = async (id: string) => {
    if (confirm('Are you sure you want to delete this contact enquiry?')) {
      await deleteContactAction(id);
      router.refresh();
    }
  };

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-12">
      
      {/* Admin Title Panel */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-lg">
        <div>
          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block">Administration Desk</span>
          <h1 className="text-2xl md:text-3xl font-extrabold font-display mt-1">Chamber Command Center</h1>
          <p className="text-xs text-slate-300">Welcome, {adminUser.name} ({adminUser.role})</p>
        </div>
        <div className="flex bg-slate-800 p-2.5 rounded-xl border border-slate-700/60 text-xs">
          <span>Database connection: <strong className="text-emerald-400">ONLINE</strong></span>
        </div>
      </div>

      {/* Analytics Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xs flex items-center gap-4">
          <div className="p-3.5 bg-primary/5 text-primary rounded-2xl shrink-0"><Users className="h-6 w-6" /></div>
          <div>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">Total Users</span>
            <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">{stats.users.total}</h3>
            <span className="text-[10px] text-slate-400">{stats.users.members} Members</span>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xs flex items-center gap-4">
          <div className="p-3.5 bg-secondary/5 text-secondary rounded-2xl shrink-0"><Building2 className="h-6 w-6" /></div>
          <div>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">Memberships</span>
            <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">{stats.memberships.approved}</h3>
            <span className="text-[10px] text-amber-500 font-bold">{stats.memberships.pending} Pending</span>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xs flex items-center gap-4">
          <div className="p-3.5 bg-accent/5 text-accent rounded-2xl shrink-0"><ShieldAlert className="h-6 w-6" /></div>
          <div>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">Grievances</span>
            <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">{stats.complaints.total}</h3>
            <span className="text-[10px] text-amber-500 font-bold">{stats.complaints.pending} Pending Review</span>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xs flex items-center gap-4">
          <div className="p-3.5 bg-orange-50 text-orange-500 rounded-2xl shrink-0"><Calendar className="h-6 w-6" /></div>
          <div>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">Total Events</span>
            <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">{stats.events.total}</h3>
            <span className="text-[10px] text-slate-400">Conclaves & Exhibits</span>
          </div>
        </div>
      </div>

      {/* Main Operations Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Tabs */}
        <div className="lg:col-span-3 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all uppercase tracking-wider text-left border ${
                  activeTab === tab.id
                    ? 'border-primary bg-primary text-white shadow-md'
                    : 'border-slate-100 hover:border-slate-300 text-slate-600 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4.5 w-4.5 shrink-0" />
                  <span>{tab.name}</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold ${
                  activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>{tab.count}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Tables */}
        <div className="lg:col-span-9 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm text-xs">
          
          {/* MEMBERSHIPS PANEL */}
          {activeTab === 'memberships' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2">Review Applications</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px]">
                      <th className="py-3">Company Details</th>
                      <th className="py-3">Tier</th>
                      <th className="py-3">Status</th>
                      <th className="py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {initialData.members.map((member) => (
                      <tr key={member._id} className="border-b border-slate-50 hover:bg-slate-50/50">
                        <td className="py-3.5 pr-2">
                          <strong className="text-slate-900 block font-semibold">{member.companyName}</strong>
                          <span className="text-[10px] text-slate-400 block mt-0.5">
                            {member.ownerName ? `${member.ownerName} | ` : ''}
                            {member.email ? `${member.email} | ` : ''}
                            PAN: {member.panNumber} | Sector: {member.industryType}
                          </span>
                        </td>
                        <td className="py-3.5 pr-2">
                          <span className="font-semibold text-primary">{member.type}</span>
                        </td>
                        <td className="py-3.5">
                          {member.status === 'Pending' && <span className="px-2 py-0.5 bg-amber-50 text-amber-600 border border-amber-100 rounded font-bold uppercase text-[8px]">Pending</span>}
                          {member.status === 'Approved' && <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded font-bold uppercase text-[8px]">Approved</span>}
                          {member.status === 'Rejected' && <span className="px-2 py-0.5 bg-rose-50 text-rose-600 border border-rose-100 rounded font-bold uppercase text-[8px]">Rejected</span>}
                        </td>
                        <td className="py-3.5 text-right space-x-2 shrink-0">
                          {member.status === 'Pending' && (
                            <>
                              <button 
                                onClick={() => handleApproveMember(member._id)}
                                className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold uppercase tracking-wider text-[9px] shadow-sm transition-all"
                              >
                                Approve
                              </button>
                              <button 
                                onClick={() => setRejectionId(member._id)}
                                className="px-2.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold uppercase tracking-wider text-[9px] shadow-sm transition-all"
                              >
                                Reject
                              </button>
                            </>
                          )}
                          {member.status === 'Approved' && (
                            <a 
                              href={`/api/certificate?membershipId=${member._id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-1 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded text-slate-600 font-semibold"
                            >
                              Certificate <ArrowUpRight className="h-3 w-3" />
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* GRIEVANCES PANEL */}
          {activeTab === 'grievances' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2">Resolve Industrial Grievances</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px]">
                      <th className="py-3">Subject & ID</th>
                      <th className="py-3">Submitter</th>
                      <th className="py-3">Status</th>
                      <th className="py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {initialData.complaints.map((complaint) => (
                      <tr key={complaint._id} className="border-b border-slate-50 hover:bg-slate-50/50">
                        <td className="py-3.5 pr-2">
                          <span className="font-mono text-[9px] text-slate-400 block tracking-wide">{complaint.trackingId}</span>
                          <strong className="text-slate-900 block font-semibold mt-0.5">{complaint.title}</strong>
                          <span className="text-[10px] text-slate-400 block mt-0.5">Cat: {complaint.category}</span>
                        </td>
                        <td className="py-3.5 pr-2">
                          <span className="block font-semibold">{complaint.name}</span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">{complaint.email} | {complaint.phone}</span>
                        </td>
                        <td className="py-3.5">
                          {complaint.status === 'Pending' && <span className="px-2 py-0.5 bg-amber-50 text-amber-600 border border-amber-100 rounded font-bold uppercase text-[8px]">Pending</span>}
                          {complaint.status === 'In Progress' && <span className="px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-200 rounded font-bold uppercase text-[8px]">In Progress</span>}
                          {complaint.status === 'Resolved' && <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded font-bold uppercase text-[8px]">Resolved</span>}
                          {complaint.status === 'Closed' && <span className="px-2 py-0.5 bg-slate-50 text-slate-600 border border-slate-200 rounded font-bold uppercase text-[8px]">Closed</span>}
                        </td>
                        <td className="py-3.5 text-right">
                          <button
                            onClick={() => {
                              setResolutionId(complaint._id);
                              setResolutionStatus(complaint.status);
                            }}
                            className="px-2.5 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold uppercase tracking-wider text-[9px] shadow-sm transition-all"
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* EVENTS PANEL */}
          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <h3 className="text-lg font-bold text-primary font-display">Manage Chamber Calendar</h3>
                <button 
                  onClick={() => setShowEventModal(true)}
                  className="px-3.5 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="h-4 w-4" /> Create Event
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px]">
                      <th className="py-3">Event Details</th>
                      <th className="py-3">Category</th>
                      <th className="py-3">Registered</th>
                      <th className="py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {initialData.events.map((event) => (
                      <tr key={event._id} className="border-b border-slate-50 hover:bg-slate-50/50">
                        <td className="py-3.5 pr-2">
                          <strong className="text-slate-900 block font-semibold">{event.title}</strong>
                          <span className="text-[10px] text-slate-400 block mt-0.5">{new Date(event.date).toLocaleDateString('en-IN')} | Location: {event.location.split(',')[0]}</span>
                        </td>
                        <td className="py-3.5 pr-2">
                          <span className="font-semibold text-slate-800">{event.category}</span>
                        </td>
                        <td className="py-3.5 pr-2">
                          <span className="font-bold text-primary">{event.registrations?.length || 0} / {event.capacity}</span>
                        </td>
                        <td className="py-3.5 text-right">
                          <button 
                            onClick={() => handleDeleteEvent(event._id)}
                            className="p-1.5 border border-rose-200 hover:bg-rose-50 text-rose-600 rounded transition-all"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* NEWS PANEL */}
          {activeTab === 'news' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <h3 className="text-lg font-bold text-primary font-display">Chamber Announcements</h3>
                <button 
                  onClick={() => setShowNewsModal(true)}
                  className="px-3.5 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="h-4 w-4" /> Add Article
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px]">
                      <th className="py-3">Headline</th>
                      <th className="py-3">Type</th>
                      <th className="py-3">Date</th>
                      <th className="py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {initialData.news.map((item) => (
                      <tr key={item._id} className="border-b border-slate-50 hover:bg-slate-50/50">
                        <td className="py-3.5 pr-2">
                          <strong className="text-slate-900 block font-semibold">{item.title}</strong>
                          <span className="text-[10px] text-slate-400 block mt-0.5 truncate max-w-sm" title={item.summary}>{item.summary}</span>
                        </td>
                        <td className="py-3.5 pr-2">
                          <span className="font-semibold text-slate-800">{item.type}</span>
                        </td>
                        <td className="py-3.5 pr-2">
                          <span className="text-slate-500">{new Date(item.publishedAt).toLocaleDateString('en-IN')}</span>
                        </td>
                        <td className="py-3.5 text-right">
                          <button 
                            onClick={() => handleDeleteNews(item._id)}
                            className="p-1.5 border border-rose-200 hover:bg-rose-50 text-rose-600 rounded transition-all"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SCHEMES PANEL */}
          {activeTab === 'schemes' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <h3 className="text-lg font-bold text-primary font-display">Government Schemes Guide</h3>
                <button 
                  onClick={() => setShowSchemeModal(true)}
                  className="px-3.5 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="h-4 w-4" /> Add Scheme
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px]">
                      <th className="py-3">Scheme Title</th>
                      <th className="py-3">Category</th>
                      <th className="py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {initialData.schemes.map((scheme) => (
                      <tr key={scheme._id} className="border-b border-slate-50 hover:bg-slate-50/50">
                        <td className="py-3.5 pr-2">
                          <strong className="text-slate-900 block font-semibold">{scheme.title}</strong>
                          <span className="text-[10px] text-slate-400 block mt-0.5 truncate max-w-sm" title={scheme.description}>{scheme.description}</span>
                        </td>
                        <td className="py-3.5 pr-2">
                          <span className="font-semibold text-slate-800">{scheme.category}</span>
                        </td>
                        <td className="py-3.5 text-right">
                          <button 
                            onClick={() => handleDeleteScheme(scheme._id)}
                            className="p-1.5 border border-rose-200 hover:bg-rose-50 text-rose-600 rounded transition-all"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* JOB & BUSINESS SUPPORT PANEL */}
          {activeTab === 'jobBusiness' && (
            <AdminJobBusinessPanel documents={initialData.jobBusinessDocuments || []} />
          )}

          {/* CONTACTS PANEL */}
          {activeTab === 'contacts' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2">Inbox Messages</h3>
              
              <div className="space-y-4">
                {initialData.contacts.length === 0 ? (
                  <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-slate-500 font-medium">Inbox is empty.</p>
                  </div>
                ) : (
                  initialData.contacts.map((msg) => (
                    <div key={msg._id} className="bg-slate-50 border border-slate-100 rounded-2xl p-4.5 space-y-3 relative">
                      <button 
                        onClick={() => handleDeleteContact(msg._id)}
                        className="absolute top-4 right-4 p-1.5 border border-rose-200 hover:bg-rose-50 text-rose-600 rounded-lg transition-all"
                        title="Delete"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>

                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-secondary uppercase tracking-widest">
                          {new Date(msg.createdAt).toLocaleString('en-IN')}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm">{msg.subject}</h4>
                        <p className="text-[10px] text-slate-400">From: <strong className="text-slate-700">{msg.name}</strong> ({msg.email}) {msg.phone && `| Phone: ${msg.phone}`}</p>
                      </div>

                      <p className="text-slate-500 leading-relaxed pt-2 border-t border-slate-200/50">
                        {msg.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* MEMBER REJECTION MODAL */}
      {rejectionId && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl relative border border-slate-100 animate-fade-in-up">
            <button onClick={() => setRejectionId(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1 rounded-full hover:bg-slate-100"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold text-primary font-display pb-3 border-b border-slate-100">Reject Application</h3>
            
            <form onSubmit={handleRejectMember} className="space-y-4 mt-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-600">Rejection Reason</label>
                <textarea
                  required
                  rows={3}
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="e.g. Uploaded PAN card did not match enterprise company name..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-800"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold uppercase tracking-wider transition-all"
              >
                {loading ? 'Rejecting...' : 'Reject Application'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* GRIEVANCE STATUS/RESOLUTION MODAL */}
      {resolutionId && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl relative border border-slate-100 animate-fade-in-up">
            <button onClick={() => setResolutionId(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1 rounded-full hover:bg-slate-100"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold text-primary font-display pb-3 border-b border-slate-100">Update Grievance Ticket</h3>
            
            <form onSubmit={handleResolveGrievance} className="space-y-4 mt-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-600">Dispute Status</label>
                <select
                  value={resolutionStatus}
                  onChange={(e) => setResolutionStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-800 bg-white"
                >
                  <option value="Pending">Pending Review</option>
                  <option value="In Progress">In Progress (Mediation Active)</option>
                  <option value="Resolved">Resolved (Calculate Details)</option>
                  <option value="Closed">Closed Case</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600">Update Comment / Resolution Details</label>
                <textarea
                  required
                  rows={3}
                  value={resolutionComment}
                  onChange={(e) => setResolutionComment(e.target.value)}
                  placeholder="Detail the updates, notices sent, or calculations here..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-800"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider transition-all"
              >
                {loading ? 'Updating...' : 'Submit Update'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CREATE EVENT MODAL */}
      {showEventModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 shadow-2xl relative border border-slate-100 max-h-[85vh] overflow-y-auto animate-fade-in-up">
            <button onClick={() => setShowEventModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1 rounded-full hover:bg-slate-100"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold text-primary font-display pb-3 border-b border-slate-100">Create Chamber Event</h3>
            
            <form onSubmit={handleCreateEvent} className="space-y-4 mt-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-600">Event Title</label>
                  <input
                    type="text"
                    required
                    value={eventForm.title}
                    onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-600">Category</label>
                  <select
                    value={eventForm.category}
                    onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-white"
                  >
                    <option value="Workshop">Workshop</option>
                    <option value="Vendor Meet">Vendor Meet</option>
                    <option value="Trade Fair">Trade Fair</option>
                    <option value="Exhibition">Exhibition</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-600">Event Date</label>
                  <input
                    type="datetime-local"
                    required
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-600">Bidding / Registration Deadline</label>
                  <input
                    type="datetime-local"
                    value={eventForm.registrationDeadline}
                    onChange={(e) => setEventForm({ ...eventForm, registrationDeadline: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-600">Location</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. BKC Center, Mumbai"
                    value={eventForm.location}
                    onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-600">Capacity (Seats)</label>
                  <input
                    type="number"
                    required
                    value={eventForm.capacity}
                    onChange={(e) => setEventForm({ ...eventForm, capacity: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <ImageUploadField
                  label="Event Cover Image (Optional)"
                  value={eventForm.image}
                  onChange={(url) => setEventForm({ ...eventForm, image: url })}
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600">Detailed Description</label>
                <textarea
                  required
                  rows={3}
                  value={eventForm.description}
                  onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider"
              >
                {loading ? 'Creating...' : 'Create Event'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CREATE NEWS MODAL */}
      {showNewsModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 shadow-2xl relative border border-slate-100 max-h-[85vh] overflow-y-auto animate-fade-in-up">
            <button onClick={() => setShowNewsModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1 rounded-full hover:bg-slate-100"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold text-primary font-display pb-3 border-b border-slate-100">Publish News / Press Release</h3>
            
            <form onSubmit={handleCreateNews} className="space-y-4 mt-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-600">Headline Title</label>
                  <input
                    type="text"
                    required
                    value={newsForm.title}
                    onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-600">Type</label>
                  <select
                    value={newsForm.type}
                    onChange={(e) => setNewsForm({ ...newsForm, type: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-white"
                  >
                    <option value="News Article">News Article</option>
                    <option value="Press Release">Press Release</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600">Short Summary</label>
                <input
                  type="text"
                  required
                  value={newsForm.summary}
                  onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <ImageUploadField
                  label="Featured Image"
                  value={newsForm.mediaUrl}
                  onChange={(url) => setNewsForm({ ...newsForm, mediaUrl: url })}
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600">Detailed Article Content</label>
                <textarea
                  required
                  rows={4}
                  value={newsForm.content}
                  onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider"
              >
                {loading ? 'Publishing...' : 'Publish Article'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CREATE SCHEME MODAL */}
      {showSchemeModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 shadow-2xl relative border border-slate-100 max-h-[85vh] overflow-y-auto animate-fade-in-up">
            <button onClick={() => setShowSchemeModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1 rounded-full hover:bg-slate-100"><X className="h-5 w-5" /></button>
            <h3 className="text-lg font-bold text-primary font-display pb-3 border-b border-slate-100">Add Government MSME Scheme</h3>
            
            <form onSubmit={handleCreateScheme} className="space-y-4 mt-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-600">Scheme Title</label>
                  <input
                    type="text"
                    required
                    value={schemeForm.title}
                    onChange={(e) => setSchemeForm({ ...schemeForm, title: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-600">Category</label>
                  <select
                    value={schemeForm.category}
                    onChange={(e) => setSchemeForm({ ...schemeForm, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-white"
                  >
                    <option value="Credit & Financial Assistance">Credit & Financial Assistance</option>
                    <option value="Skill Development & Training">Skill Development & Training</option>
                    <option value="Infrastructure Support">Infrastructure Support</option>
                    <option value="Technology Upgradation">Technology Upgradation</option>
                    <option value="SC/ST Entrepreneurship">SC/ST Entrepreneurship</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600">Eligibility Criteria</label>
                <input
                  type="text"
                  required
                  placeholder="Who is eligible..."
                  value={schemeForm.eligibility}
                  onChange={(e) => setSchemeForm({ ...schemeForm, eligibility: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600">Key Benefits</label>
                <input
                  type="text"
                  required
                  placeholder="Subsidies, collateral free bounds..."
                  value={schemeForm.benefits}
                  onChange={(e) => setSchemeForm({ ...schemeForm, benefits: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600">Official Portal Link</label>
                <input
                  type="url"
                  placeholder="e.g. https://www.cgtmse.in/"
                  value={schemeForm.link}
                  onChange={(e) => setSchemeForm({ ...schemeForm, link: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600">Eligibility / Detailed Description</label>
                <textarea
                  required
                  rows={3}
                  value={schemeForm.description}
                  onChange={(e) => setSchemeForm({ ...schemeForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold uppercase tracking-wider"
              >
                {loading ? 'Creating...' : 'Create Scheme'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
