'use server';

import dbConnect from '@/lib/db';
import Membership from '@/models/Membership';
import User from '@/models/User';
import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function getMembershipDetails() {
  try {
    const session = await getSession();
    if (!session) return { error: 'Not authenticated' };

    await dbConnect();
    const membership = await Membership.findOne({ user: session.id });
    return { success: true, data: membership };
  } catch (error: any) {
    return { error: error.message || 'Failed to fetch membership details' };
  }
}

export async function submitMembershipApplication(data: any) {
  try {
    const session = await getSession();
    if (!session) return { error: 'Not authenticated' };

    await dbConnect();

    // Check if membership application already exists
    const existingApp = await Membership.findOne({ user: session.id });
    if (existingApp && existingApp.status === 'Approved') {
      return { error: 'You are already an approved member.' };
    }

    const {
      companyName,
      type,
      phone,
      address,
      website,
      industryType,
      panNumber,
      gstNumber,
      documents
    } = data;

    if (!companyName || !type || !phone || !address || !industryType || !panNumber) {
      return { error: 'Please fill in all required fields' };
    }

    // Default mock documents if none uploaded
    const processedDocuments = documents && documents.length > 0 
      ? documents 
      : [
          { name: 'Business PAN Certificate', url: '/sample-documents/pan.pdf' },
          { name: 'GSTIN Registration Copy', url: '/sample-documents/gst.pdf' }
        ];

    let membership;
    if (existingApp) {
      // Re-submit or update pending/rejected application
      existingApp.companyName = companyName;
      existingApp.type = type;
      existingApp.phone = phone;
      existingApp.address = address;
      existingApp.website = website;
      existingApp.industryType = industryType;
      existingApp.panNumber = panNumber;
      existingApp.gstNumber = gstNumber;
      existingApp.documents = processedDocuments;
      existingApp.status = 'Pending'; // Reset to pending
      existingApp.rejectionReason = '';
      await existingApp.save();
      membership = existingApp;
    } else {
      membership = await Membership.create({
        user: session.id,
        companyName,
        type,
        phone,
        address,
        website,
        industryType,
        panNumber,
        gstNumber,
        documents: processedDocuments,
        status: 'Pending',
      });
    }

    // Update user role if they applied for specific role, or keep as Member
    const user = await User.findById(session.id);
    if (user) {
      if (type === 'Corporate' || type === 'MSME') {
        user.role = 'Member';
      } else if (type === 'Startup') {
        user.role = 'Entrepreneur';
      }
      await user.save();
    }

    revalidatePath('/dashboard');
    return { success: true, message: 'Application submitted successfully', data: membership };
  } catch (error: any) {
    console.error('Membership application error:', error);
    return { error: error.message || 'Failed to submit application' };
  }
}

export async function approveMembership(membershipId: string) {
  try {
    const session = await getSession();
    if (!session || (session.role !== 'Admin' && session.role !== 'Super Admin')) {
      return { error: 'Unauthorized. Admin access required.' };
    }

    await dbConnect();
    const membership = await Membership.findById(membershipId);
    if (!membership) {
      return { error: 'Membership application not found' };
    }

    membership.status = 'Approved';
    membership.approvedAt = new Date();
    await membership.save();

    revalidatePath('/admin');
    return { success: true, message: 'Membership application approved' };
  } catch (error: any) {
    return { error: error.message || 'Failed to approve application' };
  }
}

export async function rejectMembership(membershipId: string, reason: string) {
  try {
    const session = await getSession();
    if (!session || (session.role !== 'Admin' && session.role !== 'Super Admin')) {
      return { error: 'Unauthorized. Admin access required.' };
    }

    await dbConnect();
    const membership = await Membership.findById(membershipId);
    if (!membership) {
      return { error: 'Membership application not found' };
    }

    membership.status = 'Rejected';
    membership.rejectionReason = reason;
    await membership.save();

    revalidatePath('/admin');
    return { success: true, message: 'Membership application rejected' };
  } catch (error: any) {
    return { error: error.message || 'Failed to reject application' };
  }
}
