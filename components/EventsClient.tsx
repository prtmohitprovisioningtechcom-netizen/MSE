'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Images, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface EventItem {
  _id: string;
  images: string[];
  createdAt: string;
}

interface EventsClientProps {
  events: EventItem[];
}

export default function EventsClient({ events: initialEvents }: EventsClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  // Collect all images from all events into one flat array for the gallery
  const allImages = initialEvents.flatMap((event) =>
    event.images.map((img) => ({
      url: img,
      date: event.createdAt,
    }))
  );

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  const goNext = () => setLightboxIndex((i) => (i + 1) % lightboxImages.length);
  const goPrev = () => setLightboxIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length);

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Chamber Gallery</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          Event Gallery
        </h1>
        <p className="text-sm text-slate-500">
          Browse photographs from our chamber events, trade meets, workshops, and exhibitions.
        </p>
      </div>

      {allImages.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100 max-w-md mx-auto space-y-4">
          <Images className="h-8 w-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No event images yet</h3>
          <p className="text-xs text-slate-500">Event photographs will appear here once uploaded by the administration.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {initialEvents.map((event) => (
            <div key={event._id} className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {event.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => openLightbox(event.images, i)}
                    className="relative aspect-square rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 cursor-pointer group shadow-sm hover:shadow-lg transition-all"
                  >
                    <Image
                      src={img}
                      alt={`Event photo ${i + 1}`}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50"
          >
            <X className="h-6 w-6" />
          </button>

          {lightboxImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 md:left-8 p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 md:right-8 p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImages[lightboxIndex]}
              alt={`Photo ${lightboxIndex + 1}`}
              fill
              unoptimized
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {lightboxImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-bold">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
