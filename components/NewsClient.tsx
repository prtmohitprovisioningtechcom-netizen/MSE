'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, Image, Film, FileText, ArrowRight, 
  Calendar, Tag, Clock, Globe, X, ZoomIn, Play
} from 'lucide-react';

interface NewsClientProps {
  news: any[];
  gallery: any[];
}

export default function NewsClient({ news: initialNews, gallery: initialGallery }: NewsClientProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedNews, setSelectedNews] = useState<any | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<any | null>(null);

  const fallbackNews = [
    {
      _id: '1',
      title: 'MSE Submits Pre-Budget Memorandum to Finance Ministry',
      summary: 'Proposals highlight credit flow improvements, GST simplification, and special export incentives for micro-enterprises.',
      content: 'The MSE Chamber of Commerce & Industry Association has officially submitted a comprehensive Pre-Budget Memorandum to the Ministry of Finance. Our President, in a delegation, pressed for lowering interest rates for CGTMSE backed credit, enhancing the threshold of corporate invoice auditing, and providing specific logistics subsidies for micro-enterprises. These interventions are critical to bolster domestic manufacturing and double MSME export contributions.',
      type: 'Press Release',
      mediaUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      _id: '2',
      title: 'Skill Development Initiative for SC/ST Entrepreneurs Launched',
      summary: 'A new 6-month specialized entrepreneurship certification program launched in association with NSDC.',
      content: 'In our endeavor to support marginalized communities, MSE in partnership with National Skill Development Corporation (NSDC) has launched the Stand-Up India Digital training portal. This program offers free courses in advanced corporate finance, tax compliances, supply chain operations, and e-procurement portals. Over 500 SC/ST startup founders have already enrolled in the first cohort.',
      type: 'News Article',
      mediaUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];

  const fallbackGallery = [
    {
      _id: 'g1',
      title: 'MSE Industrial Conclave BKC 2026',
      type: 'Photo',
      url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      _id: 'g2',
      title: 'Chamber Core Committee Meet',
      type: 'Photo',
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
      _id: 'g3',
      title: 'Vikas Tech-Forgings Factory Tour',
      type: 'Video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4' // Mock video
    }
  ];

  const news = initialNews.length > 0 ? initialNews : fallbackNews;
  const gallery = initialGallery.length > 0 ? initialGallery : fallbackGallery;

  const filters = [
    { id: 'All', name: 'All Media', icon: Newspaper },
    { id: 'News Article', name: 'Articles', icon: FileText },
    { id: 'Press Release', name: 'Press Releases', icon: Globe },
    { id: 'Photo', name: 'Photos', icon: Image },
    { id: 'Video', name: 'Videos', icon: Film },
  ];

  // News and media lists filtered
  const filteredNews = news.filter((item) => activeFilter === 'All' || item.type === activeFilter);
  const filteredGallery = gallery.filter((item) => activeFilter === 'All' || item.type === activeFilter);

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

      {/* Media Type Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 border-b border-slate-200 pb-5">
        {filters.map((filter) => {
          const Icon = filter.icon;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 border rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                activeFilter === filter.id
                  ? 'border-primary bg-primary text-white shadow-md'
                  : 'border-slate-200 text-slate-500 hover:border-slate-400 bg-white'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{filter.name}</span>
            </button>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* News Column (Show only if news tabs are active) */}
        {(activeFilter === 'All' || activeFilter === 'News Article' || activeFilter === 'Press Release') && (
          <div className={`${activeFilter === 'All' ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-8`}>
            <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2 flex items-center gap-2">
              <FileText className="h-5 w-5 text-secondary" /> Press Releases & Articles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredNews.map((item) => (
                <div 
                  key={item._id}
                  className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {item.mediaUrl && (
                      <div className="h-36 w-full rounded-2xl overflow-hidden bg-slate-100 mb-2">
                        <img src={item.mediaUrl} alt={item.title} className="object-cover w-full h-full" />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      <span className="text-secondary">{item.type}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(item.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm font-display line-clamp-2 leading-snug">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{item.summary}</p>
                  </div>

                  <button
                    onClick={() => setSelectedNews(item)}
                    className="mt-6 inline-flex items-center gap-1 text-[10px] font-bold text-primary hover:text-primary-hover uppercase tracking-wider text-left w-fit"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Column (Show only if photo/video tabs are active) */}
        {(activeFilter === 'All' || activeFilter === 'Photo' || activeFilter === 'Video') && (
          <div className={`${activeFilter === 'All' ? 'lg:col-span-4' : 'lg:col-span-12'} space-y-8`}>
            <h3 className="text-lg font-bold text-primary font-display border-b border-slate-100 pb-2 flex items-center gap-2">
              <Image className="h-5 w-5 text-secondary" /> Media & Photos
            </h3>

            <div className={`grid ${activeFilter === 'All' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-1' : 'grid-cols-1 md:grid-cols-3'} gap-6`}>
              {filteredGallery.map((item) => (
                <div 
                  key={item._id}
                  onClick={() => setSelectedMedia(item)}
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all relative"
                >
                  <div className="h-40 w-full bg-slate-100 relative overflow-hidden">
                    {item.type === 'Photo' ? (
                      <img src={item.url} alt={item.title} className="object-cover w-full h-full group-hover:scale-[1.05] transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full relative bg-slate-900 flex items-center justify-center">
                        {/* Video thumbnail simulation */}
                        <Film className="h-10 w-10 text-white/40" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="p-3 bg-secondary rounded-full text-white shadow-md">
                            <Play className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs gap-1 font-bold">
                      <ZoomIn className="h-4 w-4" /> Expand Media
                    </div>
                  </div>
                  <div className="p-3 text-xs">
                    <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider">{item.type}</span>
                    <span className="font-bold text-slate-800 block truncate mt-0.5">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* News Full Reader Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-6 md:p-8 shadow-2xl relative border border-slate-100 max-h-[85vh] overflow-y-auto animate-fade-in-up space-y-4">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-100 transition-all z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="px-2.5 py-0.5 rounded-full bg-secondary/15 text-[10px] font-bold text-secondary uppercase tracking-wide">
              {selectedNews.type}
            </span>

            <h3 className="text-2xl font-extrabold text-primary font-display leading-tight pt-1">
              {selectedNews.title}
            </h3>

            <div className="flex items-center gap-1 text-xs text-slate-400 font-bold uppercase tracking-wider">
              <Calendar className="h-3.5 w-3.5 text-secondary" />
              <span>Published: {new Date(selectedNews.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>

            {selectedNews.mediaUrl && (
              <div className="h-60 w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 relative">
                <img src={selectedNews.mediaUrl} alt={selectedNews.title} className="object-cover w-full h-full" />
              </div>
            )}

            <p className="text-xs text-slate-500 font-medium italic border-l-4 border-slate-200 pl-3 leading-relaxed">
              Summary: {selectedNews.summary}
            </p>

            <hr className="border-slate-100" />

            <div className="text-xs text-slate-600 space-y-4 leading-relaxed whitespace-pre-wrap">
              {selectedNews.content}
            </div>
          </div>
        </div>
      )}

      {/* Media Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMedia(null)}>
          <div className="max-w-3xl w-full max-h-[85vh] flex flex-col items-center gap-3 relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-all"
            >
              <X className="h-6 w-6" />
            </button>

            {selectedMedia.type === 'Photo' ? (
              <img src={selectedMedia.url} alt={selectedMedia.title} className="object-contain max-h-[70vh] rounded-lg shadow-2xl border border-white/10" />
            ) : (
              <video src={selectedMedia.url} controls autoPlay className="object-contain max-h-[70vh] rounded-lg shadow-2xl border border-white/10 w-full" />
            )}

            <div className="text-center text-white space-y-1">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{selectedMedia.type}</span>
              <h4 className="font-bold text-sm">{selectedMedia.title}</h4>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

