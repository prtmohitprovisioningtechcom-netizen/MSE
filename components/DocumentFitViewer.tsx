'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const DocxPreview = dynamic(() => import('@/components/DocxPreview'), {
  ssr: false,
  loading: () => (
    <div className="h-full flex items-center justify-center">
      <Loader2 className="h-8 w-8 text-primary animate-spin" />
    </div>
  ),
});

interface DocumentFitViewerProps {
  documentId: string;
  fileName: string;
  mimeType: string;
}

function isPdf(mimeType: string, fileName: string) {
  return mimeType === 'application/pdf' || fileName.toLowerCase().endsWith('.pdf');
}

function isImage(mimeType: string, fileName: string) {
  if (mimeType.startsWith('image/')) return true;
  const lower = fileName.toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].some((ext) => lower.endsWith(ext));
}

export default function DocumentFitViewer({ documentId, fileName, mimeType }: DocumentFitViewerProps) {
  const pdf = isPdf(mimeType, fileName);
  const image = isImage(mimeType, fileName);
  const viewUrl = `/api/document/view/${documentId}`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={viewUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
          draggable={false}
        />
      ) : pdf ? (
        <iframe
          src={`${viewUrl}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
          title={fileName}
          className="doc-page-iframe absolute inset-0 w-full h-full border-0 bg-white"
        />
      ) : (
        <DocxPreview documentId={documentId} fitToPage className="h-full w-full" />
      )}
    </div>
  );
}
