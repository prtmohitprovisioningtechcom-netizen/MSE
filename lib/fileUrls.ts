export function isGridFsUrl(url: string) {
  return url.startsWith('/api/files/');
}

export function getPublicFileUrl(fileUrl: string, documentId: string) {
  if (isGridFsUrl(fileUrl)) {
    return fileUrl;
  }
  return `/api/document/view/${documentId}`;
}
