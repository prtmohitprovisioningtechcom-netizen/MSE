'use client';

import Image from 'next/image';
import { courses } from '@/lib/courses';

export default function CoursesShowcase({ className }: { className?: string }) {
  return (
    <section className={`bg-[#f5f7fa] border-t border-slate-200 py-10 sm:py-14 px-4 sm:px-6 ${className ?? ''}`}>
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4a] font-display tracking-tight">
            Skill Development Program
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-3xl mx-auto">
            Fashion designing, leather, glass, computer, beautician, industries training, mobile repairing, solar panel
            installation and more skill development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <article
              key={course.title}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
            >
              {course.image ? (
                <div className="relative aspect-4/3 bg-slate-100">
                  <Image
                    src={encodeURI(course.image)}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-4/3 items-center justify-center bg-linear-to-br from-primary/5 via-slate-50 to-secondary/10 px-4">
                  <span className="text-center text-sm font-bold text-primary font-display leading-snug">
                    {course.title}
                  </span>
                </div>
              )}

              <div className="p-4 space-y-2">
                <h3 className="font-bold text-[15px] text-slate-900 leading-snug font-display">
                  {course.title}
                </h3>
                <div className="space-y-0.5">
                  <p className="text-xs text-slate-500 leading-snug line-clamp-1">{course.line1}</p>
                  <p className="text-xs text-slate-500 leading-snug line-clamp-1">{course.line2}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
