import News from '@/models/News';
import Gallery from '@/models/Gallery';
import NewsClient from '@/components/NewsClient';
import { withDatabase } from '@/lib/dbQuery';

export const dynamic = 'force-dynamic';

export default async function NewsPage() {
  const { news, gallery } = await withDatabase(
    'news-page',
    async () => {
      const dbNews = await News.find({ status: 'Published' }).sort({ publishedAt: -1 });
      const dbGallery = await Gallery.find({}).sort({ createdAt: -1 });

      return {
        news: JSON.parse(JSON.stringify(dbNews)),
        gallery: JSON.parse(JSON.stringify(dbGallery)),
      };
    },
    { fallback: { news: [], gallery: [] } },
  );

  return <NewsClient news={news} gallery={gallery} />;
}
