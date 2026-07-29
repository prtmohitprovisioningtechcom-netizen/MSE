import dbConnect from '@/lib/db';
import News from '@/models/News';
import NewsClient from '@/components/NewsClient';

export const metadata = { title: 'News & Media | MSE Chamber' };

export const revalidate = 0;

export default async function NewsPage() {
  try {
    await dbConnect();
    const newsDocs = await News.find({}).sort({ createdAt: -1 }).lean();
    const news = JSON.parse(JSON.stringify(newsDocs));
    
    return <NewsClient news={news} gallery={[]} />;
  } catch (error) {
    console.error('Failed to load news:', error);
    return <div className="text-center py-20 text-red-500 font-bold">Failed to load media. Please try again later.</div>;
  }
}
