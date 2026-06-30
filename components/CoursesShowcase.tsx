'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { courses } from '@/lib/courses';

export default function CoursesShowcase() {
  return (
    <section className="bg-[#f5f7fa] border-t border-slate-200 py-14 px-6">
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
          {courses.map((course, idx) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: (idx % 4) * 0.06 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="relative aspect-4/3 bg-slate-100">
                <Image
                  src={encodeURI(course.image)}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-bold text-[15px] text-slate-900 leading-snug font-display">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {course.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
