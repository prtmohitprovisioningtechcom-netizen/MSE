'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Upload, X, Loader2, ImageIcon } from 'lucide-react';

interface ImageUploadFieldProps {
  label?: string;
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUploadField({ label = 'Upload Image', value, onChange }: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (file: File) => {
    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error || 'Upload failed');
        return;
      }

      onChange(data.url);
    } catch {
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="font-bold text-slate-600 text-xs">{label}</label>

      {value ? (
        <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 h-40">
          <Image src={value} alt="Preview" fill unoptimized className="object-cover" sizes="400px" />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute top-2 right-2 p-1.5 bg-white/90 hover:bg-white rounded-lg shadow text-rose-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="w-full py-8 border-2 border-dashed border-slate-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center gap-2 text-slate-500 disabled:opacity-60"
        >
          {uploading ? (
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          ) : (
            <ImageIcon className="h-8 w-8 text-slate-400" />
          )}
          <span className="text-xs font-bold uppercase tracking-wide">
            {uploading ? 'Uploading...' : 'Click to upload image'}
          </span>
          <span className="text-[10px] text-slate-400">JPG, PNG, WEBP — Max 5MB</span>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = '';
        }}
      />

      {error && <p className="text-[10px] text-rose-600 font-medium">{error}</p>}
    </div>
  );
}
