'use server';

import dbConnect from '@/lib/db';
import Event from '@/models/Event';
import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function getEvents() {
  try {
    await dbConnect();
    const events = await Event.find({}).sort({ createdAt: -1 });
    return { success: true, data: JSON.parse(JSON.stringify(events)) };
  } catch (error: any) {
    return { error: error.message || 'Failed to fetch events' };
  }
}

export async function createEventAction(data: { images: string[] }) {
  try {
    const session = await getSession();
    if (!session || (session.role !== 'Admin' && session.role !== 'Super Admin')) {
      return { error: 'Unauthorized. Admin access required.' };
    }

    await dbConnect();
    const { images } = data;

    if (!images || images.length === 0) {
      return { error: 'Please upload at least one image' };
    }

    const newEvent = await Event.create({ images });

    revalidatePath('/events');
    revalidatePath('/admin');
    return { success: true, message: 'Images uploaded successfully', data: JSON.parse(JSON.stringify(newEvent)) };
  } catch (error: any) {
    return { error: error.message || 'Failed to upload images' };
  }
}

export async function deleteEventAction(eventId: string) {
  try {
    const session = await getSession();
    if (!session || (session.role !== 'Admin' && session.role !== 'Super Admin')) {
      return { error: 'Unauthorized' };
    }

    await dbConnect();
    await Event.findByIdAndDelete(eventId);
    
    revalidatePath('/events');
    revalidatePath('/admin');
    return { success: true, message: 'Event deleted successfully' };
  } catch (error: any) {
    return { error: error.message || 'Failed to delete event' };
  }
}
