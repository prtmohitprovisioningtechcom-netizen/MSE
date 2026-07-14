'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { X, Loader2, ImagePlus, Images } from 'lucide-react';

interface MultiImageUploadFieldProps {
  label?: string;
  values: string[];
  onChange: (urls: string[]) => void;
}

export default function MultiImageUploadField({ label = 'Upload Images', values, onChange }: MultiImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');

  const handleFiles = async (fileArray: File[]) => {
    setUploading(true);
    setError('');
    setTotal(fileArray.length);
    setProgress(0);

    const uploadedUrls: string[] = [...values];

    for (let i = 0; i < fileArray.length; i++) {
      const file = fileArray[i];
      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();

        if (!res.ok || data.error) {
          setError(`Failed to upload "${file.name}": ${data.error || 'Unknown error'}`);
          continue;
        }

        uploadedUrls.push(data.url);
      } catch {
        setError(`Failed to upload "${file.name}". Please try again.`);
      }

      setProgress(i + 1);
    }

    onChange(uploadedUrls);
    setUploading(false);
    setProgress(0);
    setTotal(0);
  };

  const removeImage = (index: number) => {
    onChange(values.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <label className="font-bold text-slate-600 text-xs flex items-center gap-2">
        <Images className="h-4 w-4 text-primary" />
        {label}
      </label>

      {/* Uploaded images grid preview */}
      {values.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {values.map((url, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-50 group">
              <Image src={url} alt={`Upload ${i + 1}`} fill unoptimized className="object-cover" sizes="150px" />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-1.5 right-1.5 p-1 bg-white/90 hover:bg-white rounded-lg shadow text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-0.5 text-center">
                <span className="text-[9px] text-white font-bold">{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload zone */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="w-full py-8 border-2 border-dashed border-slate-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center gap-2 text-slate-500 disabled:opacity-60"
      >
        {uploading ? (
          <>
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="text-xs font-bold uppercase tracking-wide text-primary">
              Uploading {progress} / {total}...
            </span>
          </>
        ) : (
          <>
            <ImagePlus className="h-8 w-8 text-slate-400" />
            <span className="text-xs font-bold uppercase tracking-wide">
              {values.length > 0 ? 'Add more images' : 'Click to upload images'}
            </span>
            <span className="text-[10px] text-slate-400">Select multiple — JPG, PNG, WEBP — Max 5MB each</span>
          </>
        )}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        multiple
        className="hidden"
        onChange={(e) => {
          const files = e.target.files;
          if (files && files.length > 0) {
            const fileArray = Array.from(files);
            e.target.value = '';
            handleFiles(fileArray);
          }
        }}
      />

      {error && <p className="text-[10px] text-rose-600 font-medium">{error}</p>}

      {values.length > 0 && (
        <p className="text-[10px] text-slate-400 font-medium">
          {values.length} image{values.length !== 1 ? 's' : ''} selected
        </p>
      )}
    </div>
  );
}
