'use server';

import dbConnect from '@/lib/db';
import JobBusinessDocument from '@/models/JobBusinessDocument';
import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

async function verifyAdmin() {
  const session = await getSession();
  if (!session || (session.role !== 'Admin' && session.role !== 'Super Admin')) {
    throw new Error('Unauthorized. Admin access required.');
  }
  return session;
}

function titleFromFileName(fileName: string) {
  return fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
}

export async function createJobBusinessDocumentAction(data: {
  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
}) {
  try {
    const session = await verifyAdmin();
    await dbConnect();

    const { fileName, fileUrl, fileSize, mimeType } = data;

    if (!fileUrl || !fileName) {
      return { error: 'File is required' };
    }

    const doc = await JobBusinessDocument.create({
      title: titleFromFileName(fileName),
      fileName,
      fileUrl,
      fileSize,
      mimeType,
      uploadedBy: session.id,
      isPublished: true,
    });

    revalidatePath('/job-business-support');
    revalidatePath('/admin');

    return {
      success: true,
      message: 'Document saved',
      data: JSON.parse(JSON.stringify(doc)),
    };
  } catch (error: any) {
    return { error: error.message || 'Failed to save document' };
  }
}

export async function deleteJobBusinessDocumentAction(id: string) {
  try {
    await verifyAdmin();
    await dbConnect();
    await JobBusinessDocument.findByIdAndDelete(id);
    revalidatePath('/job-business-support');
    revalidatePath('/admin');
    return { success: true, message: 'Document deleted' };
  } catch (error: any) {
    return { error: error.message || 'Failed to delete document' };
  }
}

export async function toggleJobBusinessDocumentAction(id: string, isPublished: boolean) {
  try {
    await verifyAdmin();
    await dbConnect();
    await JobBusinessDocument.findByIdAndUpdate(id, { isPublished });
    revalidatePath('/job-business-support');
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    return { error: error.message || 'Failed to update document' };
  }
}
