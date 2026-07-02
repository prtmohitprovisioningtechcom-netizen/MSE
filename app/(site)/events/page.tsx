import Event from '@/models/Event';
import EventsClient from '@/components/EventsClient';
import { withDatabase } from '@/lib/dbQuery';

export const dynamic = 'force-dynamic';

export default async function EventsPage() {
  const events = await withDatabase(
    'events-page',
    async () => {
      const dbEvents = await Event.find({}).sort({ date: 1 });
      return JSON.parse(JSON.stringify(dbEvents));
    },
    { fallback: [] },
  );

  return <EventsClient events={events} />;
}
