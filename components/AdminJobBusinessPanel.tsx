'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Trash2, Eye, EyeOff, Upload, Loader2, CheckCircle2, ImageIcon } from 'lucide-react';
import { createJobBusinessDocumentAction, deleteJobBusinessDocumentAction, toggleJobBusinessDocumentAction } from '@/actions/jobBusiness';

interface JobBusinessDoc {
  _id: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType?: string;
  isPublished: boolean;
  createdAt: string;
}

interface AdminJobBusinessPanelProps {
  documents: JobBusinessDoc[];
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isImageFile(fileName: string, mimeType?: string) {
  if (mimeType?.startsWith('image/')) return true;
  const lower = fileName.toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].some((ext) => lower.endsWith(ext));
}

export default function AdminJobBusinessPanel({ documents }: AdminJobBusinessPanelProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [progress, setProgress] = useState({ done: 0, total: 0 });

  const uploadSingleFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/upload/document', { method: 'POST', body: formData });
    const data = await res.json();
    if (!res.ok || data.error) throw new Error(data.error || 'Upload failed');

    const saveRes = await createJobBusinessDocumentAction({
      fileName: data.fileName,
      fileUrl: data.url,
      fileSize: data.fileSize,
      mimeType: data.mimeType,
    });
    if (saveRes.error) throw new Error(saveRes.error);
  };

  const handleBulkUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    setUploading(true);
    setProgress({ done: 0, total: fileList.length });
    setUploadStatus('');

    let successCount = 0;
    const errors: string[] = [];

    for (let i = 0; i < fileList.length; i++) {
      try {
        await uploadSingleFile(fileList[i]);
        successCount++;
      } catch (err: any) {
        errors.push(`${fileList[i].name}: ${err.message}`);
      }
      setProgress({ done: i + 1, total: fileList.length });
    }

    setUploading(false);
    if (errors.length === 0) {
      setUploadStatus(`${successCount} file(s) uploaded successfully`);
    } else {
      setUploadStatus(`${successCount} uploaded, ${errors.length} failed`);
    }
    router.refresh();
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this document?')) return;
    await deleteJobBusinessDocumentAction(id);
    router.refresh();
  };

  const handleToggle = async (id: string, current: boolean) => {
    await toggleJobBusinessDocumentAction(id, !current);
    router.refresh();
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-2">
        <h3 className="text-lg font-bold text-primary font-display">Job & Business Support</h3>
        <p className="text-[10px] text-slate-400 mt-0.5">Bulk upload documents or images — saved to database</p>
      </div>

      {/* Bulk upload zone */}
      <div
        onClick={() => !uploading && inputRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer ${
          uploading
            ? 'border-primary bg-primary/5 cursor-wait'
            : 'border-slate-200 hover:border-secondary hover:bg-secondary/5'
        }`}
      >
        {uploading ? (
          <div className="space-y-3">
            <Loader2 className="h-10 w-10 text-primary animate-spin mx-auto" />
            <p className="text-sm font-bold text-primary">
              Uploading {progress.done} / {progress.total}...
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="h-10 w-10 text-slate-400 mx-auto" />
            <p className="text-sm font-bold text-slate-700">Click to bulk upload files</p>
            <p className="text-[10px] text-slate-400">.doc, .docx, .pdf (max 15MB) · .jpg, .png, .webp, .gif (max 5MB)</p>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".doc,.docx,.pdf,.jpg,.jpeg,.png,.webp,.gif,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          disabled={uploading}
          onChange={(e) => handleBulkUpload(e.target.files)}
        />
      </div>

      {uploadStatus && (
        <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-xs font-medium">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          {uploadStatus}
        </div>
      )}

      {documents.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100">
          <FileText className="h-10 w-10 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500 font-medium text-sm">No documents yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px]">
                <th className="py-3">File Name</th>
                <th className="py-3">Size</th>
                <th className="py-3">Uploaded</th>
                <th className="py-3">Status</th>
                <th className="py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc._id} className="border-b border-slate-50 hover:bg-slate-50/50">
                  <td className="py-3.5 pr-2">
                    <div className="flex items-center gap-2">
                      {isImageFile(doc.fileName, doc.mimeType) ? (
                        <ImageIcon className="h-4 w-4 text-secondary shrink-0" />
                      ) : (
                        <FileText className="h-4 w-4 text-primary shrink-0" />
                      )}
                      <span className="font-semibold text-slate-900">{doc.fileName}</span>
                    </div>
                  </td>
                  <td className="py-3.5 text-slate-500">{formatSize(doc.fileSize)}</td>
                  <td className="py-3.5 text-slate-500">
                    {new Date(doc.createdAt).toLocaleDateString('en-IN')}
                  </td>
                  <td className="py-3.5">
                    {doc.isPublished ? (
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded font-bold uppercase text-[8px]">Live</span>
                    ) : (
                      <span className="px-2 py-0.5 bg-slate-50 text-slate-500 border border-slate-200 rounded font-bold uppercase text-[8px]">Hidden</span>
                    )}
                  </td>
                  <td className="py-3.5 text-right space-x-1">
                    <button
                      onClick={() => handleToggle(doc._id, doc.isPublished)}
                      className="p-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded transition-all"
                    >
                      {doc.isPublished ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex p-1.5 border border-primary/20 hover:bg-primary/5 text-primary rounded transition-all"
                    >
                      <FileText className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => handleDelete(doc._id)}
                      className="p-1.5 border border-rose-200 hover:bg-rose-50 text-rose-600 rounded transition-all"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
