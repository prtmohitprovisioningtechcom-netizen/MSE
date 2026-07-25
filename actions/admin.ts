'use server';

import dbConnect from '@/lib/db';
import User from '@/models/User';
import Membership from '@/models/Membership';
import Event from '@/models/Event';
import Complaint from '@/models/Complaint';
import News from '@/models/News';
import GovernmentScheme from '@/models/GovernmentScheme';
import Testimonial from '@/models/Testimonial';
import Partner from '@/models/Partner';
import Contact from '@/models/Contact';
import JobBusinessDocument from '@/models/JobBusinessDocument';
import Achievement from '@/models/Achievement';
import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

// Verification wrapper for Admins
async function verifyAdmin() {
  const session = await getSession();
  if (!session || (session.role !== 'Admin' && session.role !== 'Super Admin')) {
    throw new Error('Unauthorized. Admin access required.');
  }
}

// Analytics Stats
export async function getAdminDashboardStats() {
  try {
    await verifyAdmin();
    await dbConnect();

    const userCount = await User.countDocuments();
    const memberCount = await User.countDocuments({ role: 'Member' });
    const vendorCount = await User.countDocuments({ role: 'Vendor' });
    const entrepreneurCount = await User.countDocuments({ role: 'Entrepreneur' });

    const totalApplications = await Membership.countDocuments();
    const pendingApplications = await Membership.countDocuments({ status: 'Pending' });
    const approvedApplications = await Membership.countDocuments({ status: 'Approved' });

    const totalEvents = await Event.countDocuments();
    const totalComplaints = await Complaint.countDocuments();
    const pendingComplaints = await Complaint.countDocuments({ status: 'Pending' });
    const resolvedComplaints = await Complaint.countDocuments({ status: 'Resolved' });
    const progressComplaints = await Complaint.countDocuments({ status: 'In Progress' });

    const totalNews = await News.countDocuments();
    const totalSchemes = await GovernmentScheme.countDocuments();
    const totalJobBusinessDocs = await JobBusinessDocument.countDocuments();
    const totalAchievements = await Achievement.countDocuments();

    // Fetch lists for rendering management tables
    const membersList = await Membership.find({}).populate('user', 'name email role').sort({ createdAt: -1 });
    const complaintsList = await Complaint.find({}).sort({ createdAt: -1 });
    const eventsList = await Event.find({}).sort({ createdAt: -1 });
    const newsList = await News.find({}).sort({ publishedAt: -1 });
    const schemesList = await GovernmentScheme.find({}).sort({ createdAt: -1 });
    const contactsList = await Contact.find({}).sort({ createdAt: -1 });
    const jobBusinessList = await JobBusinessDocument.find({}).sort({ createdAt: -1 });
    const achievementsList = await Achievement.find({}).sort({ createdAt: -1 });

    return {
      success: true,
      stats: {
        users: { total: userCount, members: memberCount, vendors: vendorCount, entrepreneurs: entrepreneurCount },
        memberships: { total: totalApplications, pending: pendingApplications, approved: approvedApplications },
        events: { total: totalEvents },
        complaints: { total: totalComplaints, pending: pendingComplaints, progress: progressComplaints, resolved: resolvedComplaints },
        newsCount: totalNews,
        schemesCount: totalSchemes,
        jobBusinessCount: totalJobBusinessDocs,
        achievementsCount: totalAchievements,
      },
      data: {
        members: JSON.parse(JSON.stringify(membersList)),
        complaints: JSON.parse(JSON.stringify(complaintsList)),
        events: JSON.parse(JSON.stringify(eventsList)),
        news: JSON.parse(JSON.stringify(newsList)),
        schemes: JSON.parse(JSON.stringify(schemesList)),
        contacts: JSON.parse(JSON.stringify(contactsList)),
        jobBusinessDocuments: JSON.parse(JSON.stringify(jobBusinessList)),
        achievements: JSON.parse(JSON.stringify(achievementsList)),
      }
    };
  } catch (error: any) {
    console.error('Failed to load admin stats:', error);
    return { error: error.message || 'Failed to load stats' };
  }
}

// News Actions
export async function createNewsAction(data: any) {
  try {
    await verifyAdmin();
    await dbConnect();

    const { title, content, summary, type, mediaUrl } = data;
    if (!title || !content || !summary || !type) {
      return { error: 'Please provide all required fields' };
    }

    const news = await News.create({
      title,
      content,
      summary,
      type,
      mediaUrl: mediaUrl || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
    });

    revalidatePath('/news');
    revalidatePath('/admin');
    return { success: true, message: 'News article added successfully', data: JSON.parse(JSON.stringify(news)) };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteNewsAction(id: string) {
  try {
    await verifyAdmin();
    await dbConnect();
    await News.findByIdAndDelete(id);
    revalidatePath('/news');
    revalidatePath('/admin');
    return { success: true, message: 'News article deleted' };
  } catch (error: any) {
    return { error: error.message };
  }
}

// Scheme Actions
export async function createSchemeAction(data: any) {
  try {
    await verifyAdmin();
    await dbConnect();

    const { title, description, eligibility, benefits, category, link } = data;
    if (!title || !description || !eligibility || !benefits || !category) {
      return { error: 'Please fill in all required fields' };
    }

    const scheme = await GovernmentScheme.create({
      title,
      description,
      eligibility,
      benefits,
      category,
      link,
    });

    revalidatePath('/sc-st-support');
    revalidatePath('/admin');
    revalidatePath('/dashboard');
    return { success: true, message: 'Government Scheme added successfully', data: JSON.parse(JSON.stringify(scheme)) };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteSchemeAction(id: string) {
  try {
    await verifyAdmin();
    await dbConnect();
    await GovernmentScheme.findByIdAndDelete(id);
    revalidatePath('/sc-st-support');
    revalidatePath('/admin');
    revalidatePath('/dashboard');
    return { success: true, message: 'Government Scheme deleted' };
  } catch (error: any) {
    return { error: error.message };
  }
}

// Testimonial Actions
export async function createTestimonialAction(data: any) {
  try {
    await verifyAdmin();
    await dbConnect();

    const { name, role, company, content, rating, avatar } = data;
    if (!name || !role || !company || !content || !rating) {
      return { error: 'Missing parameters' };
    }

    const testimonial = await Testimonial.create({
      name,
      role,
      company,
      content,
      rating: Number(rating),
      avatar: avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      approved: true
    });

    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true, message: 'Testimonial added successfully', data: JSON.parse(JSON.stringify(testimonial)) };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteTestimonialAction(id: string) {
  try {
    await verifyAdmin();
    await dbConnect();
    await Testimonial.findByIdAndDelete(id);
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true, message: 'Testimonial deleted' };
  } catch (error: any) {
    return { error: error.message };
  }
}

// Contact Action (Public Form Submission)
export async function submitContactAction(data: any) {
  try {
    await dbConnect();
    const { name, email, phone, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return { error: 'Please fill in all required fields' };
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    revalidatePath('/admin');
    return { success: true, message: 'Your message has been sent. We will get back to you shortly!' };
  } catch (error: any) {
    return { error: error.message || 'Failed to submit contact request' };
  }
}
export async function deleteContactAction(id: string) {
  try {
    await verifyAdmin();
    await dbConnect();
    await Contact.findByIdAndDelete(id);
    revalidatePath('/admin');
    return { success: true, message: 'Contact message deleted' };
  } catch (error: any) {
    return { error: error.message };
  }
}

// Achievement Actions
export async function createAchievementAction(data: any) {
  try {
    await verifyAdmin();
    await dbConnect();

    const { images } = data;
    if (!images || images.length === 0) {
      return { error: 'Please provide at least one image' };
    }

    const achievement = await Achievement.create({ images });

    revalidatePath('/initiatives/achivement');
    revalidatePath('/admin');
    return { success: true, message: 'Achievement added successfully', data: JSON.parse(JSON.stringify(achievement)) };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteAchievementAction(id: string) {
  try {
    await verifyAdmin();
    await dbConnect();
    await Achievement.findByIdAndDelete(id);
    revalidatePath('/initiatives/achivement');
    revalidatePath('/admin');
    return { success: true, message: 'Achievement deleted' };
  } catch (error: any) {
    return { error: error.message };
  }
}
