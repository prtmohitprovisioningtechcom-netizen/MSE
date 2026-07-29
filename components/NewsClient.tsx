'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import { X, Images, Calendar } from 'lucide-react';

interface NewsClientProps {
  news: any[];
  gallery: any[];
}

export default function NewsClient({ news: initialNews }: NewsClientProps) {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  // Flatten all images from all news items
  const allImages = initialNews.flatMap((item) =>
    (item.images || []).map((img: string) => ({
      url: img,
      date: item.createdAt || Date.now(),
    }))
  );

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block">Chamber Media</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight leading-none">
          News & Media Gallery
        </h1>
        <p className="text-sm text-slate-500">
          Stay informed on pre-budget submissions, trade agreements, project launches, committee briefings, and view photos of our recent conclaves.
        </p>
      </div>

      {allImages.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100 max-w-md mx-auto space-y-4">
          <Images className="h-8 w-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No media uploaded yet</h3>
          <p className="text-xs text-slate-500">Media photographs will appear here once uploaded by the administration.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {allImages.map((img, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-100 rounded-3xl p-3 shadow-sm group cursor-pointer hover:shadow-md transition-all"
              onClick={() => setSelectedMedia(img.url)}
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 mb-3">
                <NextImage 
                  src={img.url} 
                  alt={`Media image ${i+1}`} 
                  fill 
                  unoptimized 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  sizes="(max-width: 768px) 50vw, 50vw" 
                />
              </div>
              <div className="px-1 flex items-center justify-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {new Date(img.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Media Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMedia(null)}>
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative w-full max-h-[80vh] h-[80vh]">
              <NextImage src={selectedMedia} alt="Expanded Media" fill unoptimized className="object-contain rounded-lg shadow-2xl" sizes="100vw" />
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

