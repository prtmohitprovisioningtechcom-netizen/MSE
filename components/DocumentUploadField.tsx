'use client';

import { useRef, useState } from 'react';
import { FileText, Loader2, X, Upload } from 'lucide-react';

export interface UploadedFileInfo {
  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
}

interface DocumentUploadFieldProps {
  label?: string;
  value: UploadedFileInfo | null;
  onChange: (file: UploadedFileInfo | null) => void;
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function DocumentUploadField({
  label = 'Upload MS Word File',
  value,
  onChange,
}: DocumentUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (file: File) => {
    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload/document', { method: 'POST', body: formData });
      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error || 'Upload failed');
        return;
      }

      onChange({
        fileName: data.fileName,
        fileUrl: data.url,
        fileSize: data.fileSize,
        mimeType: data.mimeType,
      });
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
        <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
          <FileText className="h-8 w-8 text-emerald-600 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-900 truncate">{value.fileName}</p>
            <p className="text-[10px] text-slate-500">{formatSize(value.fileSize)} · Ready to save</p>
          </div>
          <button
            type="button"
            onClick={() => onChange(null)}
            className="p-1.5 hover:bg-emerald-100 rounded-lg text-rose-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="w-full py-8 border-2 border-dashed border-slate-200 rounded-xl hover:border-secondary hover:bg-secondary/5 transition-all flex flex-col items-center gap-2 text-slate-500 disabled:opacity-60"
        >
          {uploading ? (
            <Loader2 className="h-8 w-8 animate-spin text-secondary" />
          ) : (
            <Upload className="h-8 w-8 text-slate-400" />
          )}
          <span className="text-xs font-bold uppercase tracking-wide">
            {uploading ? 'Uploading document...' : 'Click to upload MS Word file'}
          </span>
          <span className="text-[10px] text-slate-400">.doc, .docx, .pdf — Max 15MB</span>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept=".doc,.docx,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
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
