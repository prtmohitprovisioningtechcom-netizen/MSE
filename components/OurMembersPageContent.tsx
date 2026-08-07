'use client';

import Image from 'next/image';
import { Users, Search, Building2, FileText, MapPin, UserCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import { chamberMembers, ourMembers, directoryMembers, type ChamberMember } from '@/lib/ourMembersContent';

function memberImageSrc(path: string) {
  return encodeURI(path);
}

function MemberCard({ member, index }: { member: ChamberMember; index: number }) {
  return (
    <article
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg hover:border-primary/25 transition-all duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="h-1 bg-linear-to-r from-secondary via-amber-400 to-accent" />

      <div className="flex flex-col sm:flex-row sm:items-stretch">
        <div className="relative w-full sm:w-52 md:w-56 shrink-0 h-72 sm:h-auto sm:min-h-80 overflow-hidden bg-slate-100">
          <Image
            src={memberImageSrc(member.image!)}
            alt={member.name}
            width={360}
            height={450}
            sizes="(max-width: 640px) 100vw, 224px"
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2.5 p-5 md:p-6 min-w-0 sm:border-l border-slate-100">
          <h3 className="text-lg md:text-xl font-extrabold text-primary font-display leading-snug wrap-break-word">
            {member.name}
          </h3>

          {member.role ? (
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.14em] text-secondary">
              {member.role}
            </p>
          ) : null}

          {member.organization ? (
            <p className="text-base md:text-lg font-semibold text-slate-800 leading-relaxed wrap-anywhere">
              {member.organization}
            </p>
          ) : null}

          {member.additionalOrganization ? (
            <p className="text-base md:text-lg font-semibold text-slate-800 leading-relaxed wrap-anywhere">
              {member.additionalOrganization}
            </p>
          ) : null}

          {member.industry ? (
            <p className="text-sm text-slate-500 leading-relaxed wrap-anywhere italic border-l-2 border-amber-400 pl-3">
              {member.industry}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function OurMembersPageContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const filteredDirectoryMembers = useMemo(() => {
    const filtered = directoryMembers.filter(
      (member) =>
        (member.businessName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (member.ownerName?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (member.category?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );
    return filtered;
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredDirectoryMembers.length / itemsPerPage);
  
  // Reset to first page when search changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const currentMembers = filteredDirectoryMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="w-full min-w-0 bg-slate-50 pb-14">
      <div className="bg-linear-to-br from-slate-900 via-primary to-blue-950 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-amber-300 to-accent" />
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-12 text-center space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <Users className="h-3.5 w-3.5 shrink-0" />
            {ourMembers.badge}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word">
            {ourMembers.title}
          </h1>
          <p className="font-hindi text-base md:text-xl font-semibold text-white/95 leading-relaxed wrap-anywhere">
            {ourMembers.pageTitle}
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
            {chamberMembers.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        {directoryMembers && directoryMembers.length > 0 && (
          <div className="mt-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-secondary" />
                Member Directory
              </h2>
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-2 focus:ring-primary/50 focus:border-primary text-slate-900 sm:text-sm transition duration-150 ease-in-out shadow-sm"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full whitespace-nowrap text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm font-semibold uppercase tracking-wider">
                      <th className="py-4 px-6">S.No</th>
                      <th className="py-4 px-6">Business Name</th>
                      <th className="py-4 px-6">Owner Name</th>
                      <th className="py-4 px-6">Address</th>
                      <th className="py-4 px-6">Udyam Registration</th>
                      <th className="py-4 px-6">Category</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {currentMembers.map((member) => (
                      <tr key={member.sno} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-6 text-sm font-medium text-slate-500">
                          {member.sno}
                        </td>
                        <td className="py-4 px-6 text-sm font-bold text-primary">
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-slate-400 shrink-0" />
                            <span className="truncate max-w-[200px]" title={member.businessName}>{member.businessName}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-slate-800">
                          <div className="flex items-center gap-2">
                            <UserCircle className="h-4 w-4 text-slate-400 shrink-0" />
                            <span className="capitalize">{member.ownerName}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                            <span className="truncate max-w-[150px] capitalize" title={member.address}>{member.address}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-slate-600 font-mono">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-slate-400 shrink-0" />
                            {member.udyamNumber}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-secondary/10 text-secondary border border-secondary/20 capitalize whitespace-normal max-w-[150px] leading-tight">
                            {member.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {filteredDirectoryMembers.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-500 text-sm">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <Search className="h-8 w-8 text-slate-300" />
                            <p>No members found matching "{searchTerm}"</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 sm:px-6 flex items-center justify-between">
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-slate-700">
                        Showing <span className="font-semibold text-primary">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-semibold text-primary">{Math.min(currentPage * itemsPerPage, filteredDirectoryMembers.length)}</span> of <span className="font-semibold text-primary">{filteredDirectoryMembers.length}</span> members
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-xs -space-x-px" aria-label="Pagination">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <span className="sr-only">Previous</span>
                          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        
                        {getPageNumbers().map(num => (
                          <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors ${
                              currentPage === num
                                ? 'z-10 bg-primary/10 border-primary/50 text-primary font-bold'
                                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {num}
                          </button>
                        ))}

                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <span className="sr-only">Next</span>
                          <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </nav>
                    </div>
                  </div>
                  
                  {/* Mobile Pagination */}
                  <div className="flex items-center justify-between w-full sm:hidden">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span className="text-sm text-slate-600">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
