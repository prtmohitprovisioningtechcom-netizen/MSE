import JobBusinessDocument from '@/models/JobBusinessDocument';
import JobBusinessSupportClient from '@/components/JobBusinessSupportClient';
import { withDatabase } from '@/lib/dbQuery';

export const metadata = {
  title: 'Job & Business Support',
  description:
    'Official job creation and business support documents, circulars, and MSME employment resources from MSE Chamber.',
};

export const dynamic = 'force-dynamic';

type JobBusinessDocumentItem = {
  _id: string;
  title?: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
  createdAt: string;
};

export default async function JobBusinessSupportPage() {
  const documents = await withDatabase<JobBusinessDocumentItem[]>(
    'job-business-support-page',
    async () => {
      const docs = await JobBusinessDocument.find({ isPublished: true }).sort({ createdAt: -1 });
      return docs.map((doc) => ({
        _id: doc._id.toString(),
        title: doc.title,
        fileName: doc.fileName,
        fileUrl: doc.fileUrl,
        fileSize: doc.fileSize,
        mimeType: doc.mimeType,
        createdAt: doc.createdAt instanceof Date ? doc.createdAt.toISOString() : String(doc.createdAt),
      }));
    },
    { fallback: [] },
  );

  return (
    <div className="min-h-full">
      <JobBusinessSupportClient documents={documents} />
    </div>
  );
}
