'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import { X, Images, Calendar, Newspaper, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface NewsItem {
  _id: string;
  title?: string;
  content?: string;
  images?: string[];
  createdAt?: string | number;
}

interface NewsClientProps {
  news: NewsItem[];
  gallery?: any[];
}

export default function NewsClient({ news: initialNews }: NewsClientProps) {
  // Lightbox state for images
  const [activeLightbox, setActiveLightbox] = useState<{
    images: string[];
    index: number;
    title?: string;
  } | null>(null);

  // Full article modal state (optional expanded reader)
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const openLightbox = (images: string[], index: number, title?: string) => {
    if (!images || images.length === 0) return;
    setActiveLightbox({ images, index, title });
  };

  const closeLightbox = () => {
    setActiveLightbox(null);
  };

  const nextImage = () => {
    if (!activeLightbox) return;
    setActiveLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index + 1) % prev.images.length,
      };
    });
  };

  const prevImage = () => {
    if (!activeLightbox) return;
    setActiveLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index - 1 + prev.images.length) % prev.images.length,
      };
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">
          Chamber Media & Announcements
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          News & Media Gallery
        </h1>
        <p className="text-sm text-slate-500 max-w-2xl mx-auto">
          Official press statements, circulars, trade updates, policy submissions, and photographs from our recent conclaves and delegations.
        </p>
      </div>

      {/* Main Content */}
      {initialNews.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100 max-w-md mx-auto space-y-4">
          <Newspaper className="h-10 w-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No announcements uploaded yet</h3>
          <p className="text-xs text-slate-500">
            News releases, circulars, and media photographs will appear here once published by the administration.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {initialNews.map((item) => {
            const hasImages = Array.isArray(item.images) && item.images.length > 0;
            const hasContent = Boolean(item.content && item.content.trim());
            const hasTitle = Boolean(item.title && item.title.trim());

            return (
              <article
                key={item._id}
                className="bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5 group"
              >
                {/* Header Information */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/5 text-primary">
                      <Newspaper className="h-3 w-3 text-primary" />
                      {hasContent && hasImages ? 'News & Media' : hasContent ? 'Announcement' : 'Media Release'}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 font-semibold">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })
                        : 'Recent'}
                    </span>
                  </div>

                  {/* Title */}
                  {hasTitle ? (
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                  ) : !hasContent && hasImages ? (
                    <h2 className="text-base font-bold text-slate-700 font-display">
                      Chamber Press & Event Photography
                    </h2>
                  ) : null}

                  {/* Full Written Text Box with Scroll */}
                  {hasContent && (
                    <div className="space-y-1.5">
                      <div className="relative">
                        <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4 max-h-56 overflow-y-auto custom-scrollbar select-text">
                          <p className="text-sm text-slate-600 font-sans leading-relaxed whitespace-pre-line">
                            {item.content}
                          </p>
                        </div>
                      </div>
                      {item.content && item.content.length > 280 && (
                        <div className="flex justify-end pr-1">
                          <button
                            type="button"
                            onClick={() => setSelectedArticle(item)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:text-primary-hover hover:underline"
                          >
                            <Maximize2 className="h-3 w-3" />
                            Read full article in dialog
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Attached Media Photos */}
                  {hasImages && item.images && (
                    <div className="space-y-2 pt-1">
                      {item.images.length === 1 ? (
                        <div
                          className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group/img border border-slate-100"
                          onClick={() => openLightbox(item.images!, 0, item.title)}
                        >
                          <NextImage
                            src={item.images[0]}
                            alt={item.title || 'News media'}
                            fill
                            unoptimized
                            className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-all flex items-center justify-center">
                            <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 backdrop-blur-sm">
                              <Maximize2 className="h-3 w-3" /> Click to view full image
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 gap-2">
                          {item.images.map((img, idx) => (
                            <div
                              key={idx}
                              onClick={() => openLightbox(item.images!, idx, item.title)}
                              className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 cursor-pointer group/img border border-slate-100"
                            >
                              <NextImage
                                src={img}
                                alt={`${item.title || 'Media'} photo ${idx + 1}`}
                                fill
                                unoptimized
                                className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                                sizes="150px"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all" />
                            </div>
                          ))}
                        </div>
                      )}
                      {item.images.length > 1 && (
                        <p className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                          <Images className="h-3 w-3" />
                          {item.images.length} photos attached • Click any photo to enlarge
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Article Detail Reader Modal (For Long Articles) */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] p-6 sm:p-8 flex flex-col relative shadow-2xl animate-fade-in-up border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-all"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-2 border-b border-slate-100 pb-4 pr-8">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-widest block">
                Official Announcement
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary font-display leading-snug">
                {selectedArticle.title || 'Chamber Circular & Press Release'}
              </h3>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {selectedArticle.createdAt
                  ? new Date(selectedArticle.createdAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })
                  : 'Recent'}
              </p>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar my-4 pr-2 select-text">
              <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </p>

              {selectedArticle.images && selectedArticle.images.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                    <Images className="h-3.5 w-3.5 text-primary" /> Attached Media
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {selectedArticle.images.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => openLightbox(selectedArticle.images!, i, selectedArticle.title)}
                        className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 cursor-pointer border border-slate-200 group"
                      >
                        <NextImage src={img} alt="Attached" fill unoptimized className="object-cover group-hover:scale-105 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Media Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {activeLightbox.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all z-50"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all z-50"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image display */}
            <div className="relative w-full h-[70vh] sm:h-[75vh]">
              <NextImage
                src={activeLightbox.images[activeLightbox.index]}
                alt="Expanded Media"
                fill
                unoptimized
                className="object-contain rounded-2xl shadow-2xl"
                sizes="100vw"
              />
            </div>

            {/* Lightbox Footer caption */}
            <div className="mt-4 flex items-center justify-between w-full px-2 text-white/80 text-xs">
              <span className="truncate max-w-[70%] font-medium">
                {activeLightbox.title || 'Chamber Media Photo'}
              </span>
              {activeLightbox.images.length > 1 && (
                <span className="font-bold bg-white/15 px-3 py-1 rounded-full text-[11px]">
                  {activeLightbox.index + 1} / {activeLightbox.images.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
