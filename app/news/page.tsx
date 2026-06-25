import dbConnect from '@/lib/db';
import News from '@/models/News';
import Gallery from '@/models/Gallery';
import NewsClient from '@/components/NewsClient';

export const revalidate = 60;

export default async function NewsPage() {
  let news = [];
  let gallery = [];

  try {
    await dbConnect();
    
    // Fetch published news
    const dbNews = await News.find({ status: 'Published' }).sort({ publishedAt: -1 });
    news = JSON.parse(JSON.stringify(dbNews));
    
    // Fetch gallery items
    const dbGallery = await Gallery.find({}).sort({ createdAt: -1 });
    gallery = JSON.parse(JSON.stringify(dbGallery));
  } catch (error) {
    console.error('Error fetching news & media:', error);
  }

  return (
    <NewsClient 
      news={news} 
      gallery={gallery} 
    />
  );
}
