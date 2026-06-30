'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  BookOpen,
  Box,
  BriefcaseBusiness,
  Cable,
  Calendar,
  Cloud,
  Code2,
  Database,
  FileJson,
  FileText,
  GitBranch,
  Globe,
  Hash,
  Lock,
  MapPin,
  MessageCircle,
  Network,
  Send,
  Server,
  Sparkles,
  Terminal,
  Wrench,
  Zap,
} from 'lucide-react';

const experience = [
  {
    role: 'Core Team Member',
    company: 'AWS Cloud Club, Lovely Professional University',
    location: 'Phagwara, PB',
    period: '2023 - Present',
    highlights: [
      'Co-organized cloud workshops and events for 300+ students.',
      'Led practical AWS sessions for beginner-friendly technical learning.',
      'Worked with cross-functional teams to grow developer community engagement.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Lovely Professional University',
    location: 'Phagwara, PB',
    period: '2024',
    highlights: [
      'Built responsive React and Next.js interfaces for real project workflows.',
      'Integrated REST APIs and improved frontend performance.',
      'Collaborated in agile cycles with clean version control practices.',
    ],
  },
];

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    accent: 'bg-amber-500',
    skills: [
      { name: 'JavaScript ES6+', icon: FileJson },
      { name: 'C++', icon: Terminal },
      { name: 'C#', icon: Hash },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    title: 'Frontend',
    icon: Atom,
    accent: 'bg-sky-500',
    skills: [
      { name: 'React.js', icon: Atom },
      { name: 'Angular 21', icon: Code2 },
      { name: 'Redux Toolkit', icon: Box },
      { name: 'Tailwind CSS', icon: Sparkles },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: 'bg-emerald-500',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Network },
      { name: 'ASP.NET Core', icon: Globe },
      { name: 'REST APIs', icon: Cable },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    accent: 'bg-rose-500',
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'SQL Server', icon: Database },
      { name: 'Mongoose', icon: Database },
    ],
  },
  {
    title: 'Tools & Cloud',
    icon: Wrench,
    accent: 'bg-violet-500',
    skills: [
      { name: 'GitHub', icon: GitBranch },
      { name: 'AWS', icon: Cloud },
      { name: 'RabbitMQ', icon: MessageCircle },
      { name: 'MediatR', icon: Zap },
      { name: 'JWT', icon: Lock },
      { name: 'EF Core', icon: Database },
      { name: 'Serilog', icon: FileText },
      { name: 'Swagger', icon: BookOpen },
      { name: 'Postman', icon: Send },
    ],
  },
];

const metrics = [
  ['300+', 'students reached'],
  ['4+', 'cloud events'],
  ['5+', 'projects shipped'],
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24 py-14 sm:py-20"
    >
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">
              Experience and skills
            </span>
            <h2 className="text-balance mt-3 text-4xl font-bold leading-tight text-gray-950 sm:text-5xl dark:text-white">
              A practical stack for building polished, cloud-ready web apps.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-gray-600 lg:ml-auto dark:text-white/65">
            I combine frontend craft, API integration, database fundamentals, and AWS community experience to ship interfaces that hold up beyond the demo.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {metrics.map(([value, label]) => (
            <div
              key={label}
              className="rounded-lg border border-black/10 bg-white/65 px-4 py-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
            >
              <p className="text-2xl font-bold text-gray-950 dark:text-white">{value}</p>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-white/55">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="rounded-lg border border-black/10 bg-white/75 p-5 shadow-sm backdrop-blur sm:p-6 dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gray-950 text-white dark:bg-white dark:text-gray-950">
                <BriefcaseBusiness size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-white/45">
                  Recent roles
                </p>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white">Experience</h3>
              </div>
            </div>

            <div className="space-y-5">
              {experience.map((exp) => (
                <motion.article
                  key={`${exp.role}-${exp.period}`}
                  variants={itemVariants}
                  className="relative overflow-hidden rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#111827]/80"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-rose-500" />
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-lg font-bold leading-snug text-gray-950 dark:text-white">{exp.role}</h4>
                      <p className="mt-1 text-sm font-medium text-gray-600 dark:text-white/62">{exp.company}</p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 dark:bg-amber-400/10 dark:text-amber-200">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-white/50">
                    <MapPin size={14} />
                    {exp.location}
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-white/65">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              const isWide = index === skillCategories.length - 1;

              return (
                <motion.article
                  key={category.title}
                  variants={itemVariants}
                  className={`rounded-lg border border-black/10 bg-white/75 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-white/25 ${
                    isWide ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`grid h-10 w-10 place-items-center rounded-lg text-white ${category.accent}`}>
                      <CategoryIcon size={18} />
                    </span>
                    <h4 className="text-base font-bold text-gray-950 dark:text-white">{category.title}</h4>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <span
                          key={skill.name}
                          className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-semibold leading-none text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-white/72"
                        >
                          <SkillIcon size={15} className="shrink-0 text-amber-600 dark:text-amber-300" />
                          <span className="min-w-0 truncate">{skill.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
