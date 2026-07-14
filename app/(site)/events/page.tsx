import { getEvents } from '@/actions/events';
import EventsClient from '@/components/EventsClient';

export const metadata = { title: 'Event Gallery | MSE Chamber' };

export default async function EventsPage() {
  const result = await getEvents();
  const events = result.success && result.data ? result.data : [];

  return <EventsClient events={events} />;
}
