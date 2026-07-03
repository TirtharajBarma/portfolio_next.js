import { toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { Braces, Cloud, GraduationCap, Layers3, Rocket, ShieldCheck } from 'lucide-react';

const focusAreas = [
  { icon: Layers3, title: 'Frontend systems', text: 'Responsive React and Next.js interfaces with reusable UI patterns.' },
  { icon: Braces, title: 'API integration', text: 'Clean data flows, REST integrations, and practical full-stack thinking.' },
  { icon: Cloud, title: 'Cloud mindset', text: 'AWS-aware development choices for deployable, reliable products.' },
];

const quickFacts = [
  { label: 'Degree', value: 'B.Tech Computer Science', icon: GraduationCap },
  { label: 'Build style', value: 'Fast, clean, scalable UI', icon: Rocket },
  { label: 'Strength', value: 'Product detail and reliability', icon: ShieldCheck },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="section-shell scroll-mt-24 py-14 sm:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="lg:sticky lg:top-28"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-white/45">
            About
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-gray-950 sm:text-5xl dark:text-white">
            I build web experiences that feel sharp, usable, and ready to ship.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-white/64">
            I am Tirtharaj Barma, a web developer focused on modern frontend development, API-connected products, and cloud-friendly architecture. I care about clean implementation, responsive behavior, and small details that make software feel trustworthy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="space-y-4"
        >
          <div className="rounded-lg border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5 dark:border-white/10 dark:bg-white/[0.05]">
            <div className="grid gap-3 md:grid-cols-3">
              {focusAreas.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-md bg-slate-50 p-4 dark:bg-white/[0.06]">
                  <Icon size={21} className="text-slate-800 dark:text-white" />
                  <h3 className="mt-4 text-base font-bold text-gray-950 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/62">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.92fr]">
            <div className="rounded-lg border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5 dark:border-white/10 dark:bg-white/[0.05]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/45">
                Snapshot
              </p>
              <div className="mt-4 space-y-3">
                {quickFacts.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 rounded-md border border-black/5 bg-white p-3 dark:border-white/10 dark:bg-[#111827]/70">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-slate-900 text-white dark:bg-white dark:text-gray-950">
                      <Icon size={17} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">{label}</p>
                      <p className="mt-0.5 text-sm font-semibold leading-5 text-gray-900 dark:text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5 dark:border-white/10 dark:bg-white/[0.05]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/45">
                Daily tools
              </p>
              <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-2.5 lg:gap-3">
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="grid h-16 place-items-center rounded-md border border-black/10 bg-slate-50 transition sm:h-20 lg:h-24 dark:border-white/10 dark:bg-white"
                  >
                    <Image src={tool} alt="Development tool" className="w-4 sm:w-5 lg:w-6" />
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-white/62">
                Comfortable moving from interface polish to databases, cloud basics, containers, and delivery workflows.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
