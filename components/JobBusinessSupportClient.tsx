'use client';

import { useState, useMemo } from 'react';
import { FileText, Search, FolderOpen } from 'lucide-react';
import ProtectedDocumentShell from '@/components/ProtectedDocumentShell';
import DocumentFitViewer from '@/components/DocumentFitViewer';

interface JobBusinessDoc {
  _id: string;
  title?: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  createdAt: string;
}

interface JobBusinessSupportClientProps {
  documents: JobBusinessDoc[];
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isPdf(doc: JobBusinessDoc) {
  return doc.mimeType === 'application/pdf' || doc.fileName.toLowerCase().endsWith('.pdf');
}

function isImage(doc: JobBusinessDoc) {
  if (doc.mimeType.startsWith('image/')) return true;
  const lower = doc.fileName.toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].some((ext) => lower.endsWith(ext));
}

function fileTypeLabel(doc: JobBusinessDoc) {
  if (isImage(doc)) return 'Image';
  if (isPdf(doc)) return 'PDF Document';
  return 'Word Document';
}

export default function JobBusinessSupportClient({ documents }: JobBusinessSupportClientProps) {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return documents;
    const q = search.toLowerCase();
    return documents.filter((doc) => doc.fileName.toLowerCase().includes(q));
  }, [documents, search]);

  return (
    <ProtectedDocumentShell className="min-h-full flex flex-col bg-[#eef2f6]">
      <header className="shrink-0 sticky top-0 z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur-md px-4 md:px-6 py-3 flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <FolderOpen className="h-5 w-5 text-secondary" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Chamber Resource Centre</p>
            <h1 className="text-base md:text-lg font-extrabold font-display text-primary truncate">
              Job & Business Support
            </h1>
          </div>
        </div>

        {documents.length > 0 && (
          <div className="relative w-full sm:w-56 order-3 sm:order-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-primary bg-white"
            />
          </div>
        )}
      </header>

      {filtered.length === 0 ? (
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center max-w-sm">
            <FileText className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="font-bold text-slate-800 text-lg">No documents found</h3>
            <p className="text-sm text-slate-500 mt-2">Documents will appear here once uploaded by the administration.</p>
          </div>
        </div>
      ) : (
        <div className="p-3 md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {filtered.map((doc) => (
              <article
                key={doc._id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_40px_rgba(10,47,107,0.08)]"
              >
                <div className="shrink-0 px-4 py-2.5 border-b border-slate-100 bg-linear-to-r from-slate-50 to-white flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold text-primary uppercase tracking-widest">
                      {fileTypeLabel(doc)}
                    </p>
                    <h2 className="font-bold text-slate-900 text-xs md:text-sm font-display truncate">
                      {doc.fileName}
                    </h2>
                  </div>
                  <span className="text-[9px] text-slate-400 font-semibold shrink-0">{formatSize(doc.fileSize)}</span>
                </div>

                <div className="relative w-full aspect-210/297 overflow-hidden bg-[#e8edf2]">
                  <DocumentFitViewer
                    documentId={doc._id}
                    fileName={doc.fileName}
                    mimeType={doc.mimeType}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </ProtectedDocumentShell>
  );
}
