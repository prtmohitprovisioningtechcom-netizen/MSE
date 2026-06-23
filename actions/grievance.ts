'use server';

import dbConnect from '@/lib/db';
import Complaint from '@/models/Complaint';
import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

// Generate a random, unique tracking ID
function generateTrackingId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let rand = '';
  for (let i = 0; i < 4; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  return `MSE-${dateStr}-${rand}`;
}

export async function submitComplaintAction(data: any) {
  try {
    await dbConnect();
    const session = await getSession();

    const { name, email, phone, title, description, category } = data;

    if (!name || !email || !phone || !title || !description || !category) {
      return { error: 'All fields are required to register a grievance' };
    }

    const trackingId = generateTrackingId();
    
    const complaint = await Complaint.create({
      user: session ? session.id : undefined,
      trackingId,
      name,
      email,
      phone,
      title,
      description,
      category,
      status: 'Pending',
      updates: [
        {
          status: 'Pending',
          comment: 'Grievance submitted successfully. Tracking ID: ' + trackingId + '. Awaiting review by the chamber panel.'
        }
      ]
    });

    revalidatePath('/grievance');
    if (session) {
      revalidatePath('/dashboard');
    }
    
    return { 
      success: true, 
      message: 'Grievance registered successfully. Keep your Tracking ID safe.',
      trackingId,
      data: JSON.parse(JSON.stringify(complaint))
    };
  } catch (error: any) {
    console.error('Complaint submission error:', error);
    return { error: error.message || 'Failed to submit grievance' };
  }
}

export async function getComplaintByTrackingId(trackingId: string) {
  try {
    await dbConnect();
    const complaint = await Complaint.findOne({ trackingId: trackingId.toUpperCase().trim() });
    
    if (!complaint) {
      return { error: 'No grievance record found with tracking ID: ' + trackingId };
    }
    
    return { success: true, data: JSON.parse(JSON.stringify(complaint)) };
  } catch (error: any) {
    return { error: error.message || 'Failed to search grievance' };
  }
}

export async function getUserComplaints() {
  try {
    const session = await getSession();
    if (!session) return { error: 'Not authenticated' };

    await dbConnect();
    const complaints = await Complaint.find({ user: session.id }).sort({ createdAt: -1 });
    return { success: true, data: JSON.parse(JSON.stringify(complaints)) };
  } catch (error: any) {
    return { error: error.message || 'Failed to fetch your grievances' };
  }
}

export async function updateComplaintStatusAction(complaintId: string, status: string, comment: string) {
  try {
    const session = await getSession();
    if (!session || (session.role !== 'Admin' && session.role !== 'Super Admin')) {
      return { error: 'Unauthorized. Admin access required.' };
    }

    if (!status || !comment) {
      return { error: 'Status and comment are required' };
    }

    await dbConnect();
    const complaint = await Complaint.findById(complaintId);
    if (!complaint) {
      return { error: 'Grievance record not found' };
    }

    complaint.status = status;
    
    // Add updates history
    complaint.updates.push({
      status,
      comment,
      updatedAt: new Date()
    });

    if (status === 'Resolved') {
      complaint.resolutionDetails = comment;
    }

    await complaint.save();

    revalidatePath('/admin');
    revalidatePath('/grievance');
    return { success: true, message: 'Grievance status updated successfully' };
  } catch (error: any) {
    return { error: error.message || 'Failed to update status' };
  }
}
