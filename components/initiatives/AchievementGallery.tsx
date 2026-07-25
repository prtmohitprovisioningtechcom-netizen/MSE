'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

interface Achievement {
  _id: string;
  images: string[];
}

export default function AchievementGallery({ achievements }: { achievements: Achievement[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="space-y-12">
        {achievements.map((ach) => (
          <div key={ach._id} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {ach.images.map((img: string, i: number) => (
                <div 
                  key={i} 
                  className="relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`Achievement ${i + 1}`} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-bold tracking-wider bg-black/50 px-4 py-2 rounded-lg transition-opacity duration-300">
                      View Image
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-rose-400 transition-colors p-2 bg-slate-800/80 rounded-full z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="h-6 w-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged achievement" 
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-200" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
