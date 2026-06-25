import dbConnect from '@/lib/db';
import Event from '@/models/Event';
import News from '@/models/News';
import Testimonial from '@/models/Testimonial';
import GovernmentScheme from '@/models/GovernmentScheme';
import HomeClient from '@/components/HomeClient';

export const revalidate = 60;

export default async function Home() {
  let events = [];
  let news = [];
  let testimonials = [];
  let schemes = [];

  try {
    await dbConnect();
    
    // Fetch upcoming events
    const dbEvents = await Event.find({ date: { $gte: new Date() } })
      .sort({ date: 1 })
      .limit(3);
    events = JSON.parse(JSON.stringify(dbEvents));
    
    // Fetch latest news
    const dbNews = await News.find({ status: 'Published' })
      .sort({ publishedAt: -1 })
      .limit(3);
    news = JSON.parse(JSON.stringify(dbNews));
    
    // Fetch featured testimonials
    const dbTestimonials = await Testimonial.find({ approved: true })
      .sort({ createdAt: -1 })
      .limit(3);
    testimonials = JSON.parse(JSON.stringify(dbTestimonials));

    // Fetch government schemes
    const dbSchemes = await GovernmentScheme.find({})
      .sort({ createdAt: -1 })
      .limit(3);
    schemes = JSON.parse(JSON.stringify(dbSchemes));
  } catch (error) {
    console.error('Error fetching homepage data from DB, using fallback data:', error);
  }

  return (
    <HomeClient 
      initialEvents={events} 
      initialNews={news} 
      initialTestimonials={testimonials}
      initialSchemes={schemes}
    />
  );
}
