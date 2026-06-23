'use server';

import dbConnect from '@/lib/db';
import Event from '@/models/Event';
import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function getEvents() {
  try {
    await dbConnect();
    const events = await Event.find({}).sort({ date: 1 });
    return { success: true, data: JSON.parse(JSON.stringify(events)) };
  } catch (error: any) {
    return { error: error.message || 'Failed to fetch events' };
  }
}

export async function registerForEvent(eventId: string) {
  try {
    const session = await getSession();
    if (!session) return { error: 'Not authenticated. Please log in.' };

    await dbConnect();
    const event = await Event.findById(eventId);
    if (!event) return { error: 'Event not found' };

    // Check if user is already registered
    const alreadyRegistered = event.registrations.some(
      (reg: any) => reg.user.toString() === session.id
    );

    if (alreadyRegistered) {
      return { error: 'You are already registered for this event.' };
    }

    if (event.registrations.length >= event.capacity) {
      return { error: 'This event is fully booked.' };
    }

    event.registrations.push({
      user: session.id,
      registeredAt: new Date()
    });

    await event.save();
    
    revalidatePath('/events');
    revalidatePath('/dashboard');
    return { success: true, message: 'Successfully registered for this event!' };
  } catch (error: any) {
    return { error: error.message || 'Failed to register for event' };
  }
}

export async function createEventAction(data: any) {
  try {
    const session = await getSession();
    if (!session || (session.role !== 'Admin' && session.role !== 'Super Admin')) {
      return { error: 'Unauthorized. Admin access required.' };
    }

    await dbConnect();
    const { title, description, date, location, category, capacity, image, registrationDeadline } = data;

    if (!title || !description || !date || !location || !category) {
      return { error: 'Please fill in all required fields' };
    }

    const newEvent = await Event.create({
      title,
      description,
      date: new Date(date),
      location,
      category,
      capacity: capacity ? Number(capacity) : 100,
      image: image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
      registrationDeadline: registrationDeadline ? new Date(registrationDeadline) : undefined,
    });

    revalidatePath('/events');
    revalidatePath('/admin');
    return { success: true, message: 'Event created successfully', data: JSON.parse(JSON.stringify(newEvent)) };
  } catch (error: any) {
    return { error: error.message || 'Failed to create event' };
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
