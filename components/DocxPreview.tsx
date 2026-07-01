'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { renderAsync } from 'docx-preview';

interface DocxPreviewProps {
  fileUrl?: string;
  documentId?: string;
  className?: string;
  interactive?: boolean;
  fullPage?: boolean;
  fitToPage?: boolean;
  pageIndex?: number;
  onPageCount?: (count: number) => void;
}

export default function DocxPreview({
  fileUrl,
  documentId,
  className = 'h-80',
  interactive = false,
  fullPage = false,
  fitToPage = false,
  onPageCount,
}: DocxPreviewProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const pagesRef = useRef<HTMLElement[]>([]);

  const sourceUrl = documentId ? `/api/document/view/${documentId}` : fileUrl;

  const onPageCountRef = useRef(onPageCount);
  onPageCountRef.current = onPageCount;

  const applyFit = useCallback(() => {
    if (!fitToPage) return;

    const frame = outerRef.current;
    const scaleEl = scaleRef.current;
    const container = containerRef.current;
    const pages = pagesRef.current;
    if (!frame || !scaleEl || !container || pages.length === 0) return;

    pages.forEach((page) => {
      page.style.display = 'block';
      page.style.margin = '0 auto';
      page.style.boxShadow = 'none';
    });

    const wrapper = container.querySelector('.docx-wrapper') as HTMLElement | null;
    const contentW = wrapper?.scrollWidth || container.scrollWidth;
    const contentH = wrapper?.scrollHeight || container.scrollHeight;
    const frameW = frame.clientWidth;
    const frameH = frame.clientHeight;

    if (!contentW || !contentH || !frameW || !frameH) return;

    const scaleX = frameW / contentW;
    const scaleY = frameH / contentH;

    scaleEl.style.width = `${contentW}px`;
    scaleEl.style.height = `${contentH}px`;
    scaleEl.style.transform = `translate(-50%, -50%) scale(${scaleX}, ${scaleY})`;
    scaleEl.style.transformOrigin = 'center center';
    scaleEl.style.position = 'absolute';
    scaleEl.style.left = '50%';
    scaleEl.style.top = '50%';
  }, [fitToPage]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !sourceUrl) return;

    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError('');
        container.innerHTML = '';

        const res = await fetch(sourceUrl);
        if (!res.ok) throw new Error('File not found');
        const blob = await res.blob();

        if (cancelled) return;

        await renderAsync(blob, container, undefined, {
          className: 'docx-preview-content',
          inWrapper: true,
          ignoreWidth: false,
          ignoreHeight: false,
          breakPages: true,
          renderHeaders: true,
          renderFooters: true,
          renderFootnotes: true,
          renderEndnotes: true,
        });

        if (cancelled) return;

        const pages = Array.from(container.querySelectorAll('section.docx')) as HTMLElement[];
        pagesRef.current = pages.length > 0 ? pages : [container];

        const wrapper = container.querySelector('.docx-wrapper') as HTMLElement | null;
        if (wrapper && fitToPage) {
          wrapper.style.background = 'transparent';
          wrapper.style.padding = '0';
        }

        onPageCountRef.current?.(pages.length || 1);
        setLoading(false);

        requestAnimationFrame(() => applyFit());
      } catch {
        if (!cancelled) {
          setError('Could not open this document');
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [sourceUrl, fitToPage, applyFit]);

  useEffect(() => {
    if (!fitToPage || loading) return;
    applyFit();
  }, [fitToPage, loading, applyFit]);

  useEffect(() => {
    if (!fitToPage || !outerRef.current) return;

    const observer = new ResizeObserver(() => applyFit());
    observer.observe(outerRef.current);
    return () => observer.disconnect();
  }, [fitToPage, loading, applyFit]);

  if (fitToPage) {
    return (
      <div ref={outerRef} className={`doc-page-canvas-inner relative overflow-hidden ${className}`}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#e8edf2] z-10">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
          </div>
        )}
        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-500 p-4">
            <AlertCircle className="h-8 w-8 text-rose-400" />
            <p className="text-xs font-medium">{error}</p>
          </div>
        ) : (
          <div className="absolute inset-0 overflow-hidden">
            <div ref={scaleRef} className="doc-page-scale">
              <div ref={containerRef} className="docx-preview-host docx-preview-host--fit bg-transparent" />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`w-full bg-slate-50 relative ${fullPage ? 'overflow-visible' : 'overflow-hidden'} ${className}`}>
      {loading && (
        <div className={`${fullPage ? 'min-h-96' : 'absolute inset-0'} flex items-center justify-center bg-slate-50 z-10`}>
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
        </div>
      )}
      {error ? (
        <div className={`${fullPage ? 'min-h-96' : 'absolute inset-0'} flex flex-col items-center justify-center gap-2 text-slate-500 p-4`}>
          <AlertCircle className="h-8 w-8 text-rose-400" />
          <p className="text-xs font-medium">{error}</p>
        </div>
      ) : (
        <div
          ref={containerRef}
          className={`docx-preview-host bg-white ${
            fullPage
              ? 'docx-preview-host--full overflow-visible'
              : `h-full overflow-auto ${interactive ? '' : 'pointer-events-none'}`
          }`}
        />
      )}
    </div>
  );
}
