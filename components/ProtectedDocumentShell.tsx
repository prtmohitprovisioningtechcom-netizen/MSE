'use client';

import { useEffect, type ReactNode } from 'react';

interface ProtectedDocumentShellProps {
  children: ReactNode;
  className?: string;
}

export default function ProtectedDocumentShell({ children, className = '' }: ProtectedDocumentShellProps) {
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => e.preventDefault();
    const blockCopy = (e: ClipboardEvent) => e.preventDefault();
    const blockDrag = (e: DragEvent) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, [contenteditable="true"]')) return;

      const key = e.key.toLowerCase();
      if (
        (e.ctrlKey || e.metaKey) &&
        (key === 's' || key === 'p' || key === 'u' || key === 'c' || key === 'a')
      ) {
        e.preventDefault();
      }
      if (e.key === 'PrintScreen') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('copy', blockCopy);
    document.addEventListener('cut', blockCopy);
    document.addEventListener('dragstart', blockDrag);
    document.addEventListener('keydown', blockKeys);

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('copy', blockCopy);
      document.removeEventListener('cut', blockCopy);
      document.removeEventListener('dragstart', blockDrag);
      document.removeEventListener('keydown', blockKeys);
    };
  }, []);

  return (
    <div
      className={`protected-document select-none ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {children}
      <div className="protected-document-shield" aria-hidden />
    </div>
  );
}
