import dbConnect from '@/lib/db';
import Achievement from '@/models/Achievement';
import AchievementGallery from './AchievementGallery';

export default async function AchievementPage() {
  await dbConnect();
  const achievements = await Achievement.find({}).sort({ createdAt: -1 });
  const plainAchievements = JSON.parse(JSON.stringify(achievements));

  return (
    <div className="w-full min-w-0 bg-slate-50 pb-16">
      <div className="bg-linear-to-br from-primary via-slate-900 to-indigo-950 text-white">
        <div className="h-1.5 bg-linear-to-r from-secondary via-white to-accent" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-14 text-center space-y-4">
          <h1 className="text-2xl md:text-4xl font-extrabold font-display leading-tight wrap-break-word px-1">
            Achievements
          </h1>
          <p className="font-hindi text-sm md:text-base font-semibold text-white/90 leading-relaxed wrap-anywhere px-1">
            उपलब्धियां और मील के पत्थर
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 space-y-8 md:space-y-10">
        {plainAchievements.length === 0 ? (
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-lg text-center">
            <p className="text-slate-600 font-medium">No achievements to display at the moment.</p>
          </div>
        ) : (
          <AchievementGallery achievements={plainAchievements} />
        )}
      </div>
    </div>
  );
}
