import dbConnect from '@/lib/db';
import JobBusinessDocument from '@/models/JobBusinessDocument';
import JobBusinessSupportClient from '@/components/JobBusinessSupportClient';

export const metadata = {
  title: 'Job & Business Support',
  description: 'Official job creation and business support documents, circulars, and MSME employment resources from MSE Chamber.',
};

export const revalidate = 60;

export default async function JobBusinessSupportPage() {
  let documents: {
    _id: string;
    title?: string;
    fileName: string;
    fileUrl: string;
    fileSize: number;
    mimeType: string;
    createdAt: string;
  }[] = [];

  try {
    await dbConnect();
    const docs = await JobBusinessDocument.find({ isPublished: true }).sort({ createdAt: -1 });
    documents = docs.map((doc) => ({
      _id: doc._id.toString(),
      title: doc.title,
      fileName: doc.fileName,
      fileUrl: doc.fileUrl,
      fileSize: doc.fileSize,
      mimeType: doc.mimeType,
      createdAt: doc.createdAt instanceof Date ? doc.createdAt.toISOString() : String(doc.createdAt),
    }));
  } catch (error) {
    console.error('Error fetching job/business documents:', error);
  }

  return (
    <div className="min-h-full">
      <JobBusinessSupportClient documents={documents} />
    </div>
  );
}
