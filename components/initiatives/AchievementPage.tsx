import dbConnect from '@/lib/db';
import Achievement from '@/models/Achievement';
import AchievementGallery from './AchievementGallery';
import { Trophy } from 'lucide-react';

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
        {/* Featured Achievement */}
        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border-2 border-amber-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300">
          <div className="md:w-1/2 h-64 md:h-auto relative shrink-0">
            <img 
              src="/achivement1.jpeg" 
              alt="Featured Achievement" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-linear-to-br from-amber-50/50 to-white">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 w-fit shadow-xs border border-amber-200/50">
              <Trophy className="w-4 h-4" />
              <span className="tracking-wide uppercase text-xs">Utkrisht Kary Puraskar</span>
            </div>
            <p className="text-slate-800 text-xl md:text-2xl font-serif italic leading-relaxed text-pretty">
              "MSE Chamber of Commerce and Industry Association ki member <span className="font-semibold text-primary not-italic">Dr. Rachana Upadhyay</span> ko udhyamo ke liye utkrisht kary krne par DM Firozabad <span className="font-semibold text-primary not-italic">Sri Santosh Kumar Sharma</span> dwara prashasti patra pradan karte hue."
            </p>
          </div>
        </div>

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
