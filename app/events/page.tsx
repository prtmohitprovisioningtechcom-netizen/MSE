import dbConnect from '@/lib/db';
import Event from '@/models/Event';
import EventsClient from '@/components/EventsClient';

export const revalidate = 0;

export default async function EventsPage() {
  let events = [];

  try {
    await dbConnect();
    const dbEvents = await Event.find({}).sort({ date: 1 });
    events = JSON.parse(JSON.stringify(dbEvents));
  } catch (error) {
    console.error('Error loading events:', error);
  }

  return <EventsClient events={events} />;
}
