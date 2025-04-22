// components/Education.jsx
import { CalendarDays, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const Education = ({isDarkMode}) => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'Lovely Professional University',
      location: 'Phagwara, PB',
      duration: '2022 - 2026',
      description:
        'Web Developer skilled in building responsive, efficient, and modern websites.',
      achievements: [
        'GPA: 7.78/10',
        "Dean's list for academic excellence",
        '100-day streak on Leetcode',
      ],
      skills: [
        'Web Development',
        'Cloud Computing',
        'Devops',
      ],
    },
    {
      degree: 'Higher Secondary Education',
      school: 'Delhi Public School',
      location: 'Siliguri, WB',
      duration: '2020 - 2022',
      description:
        'HigherSchool preparatory curriculum with focus on Physics, Chemistry, Mathematics and Biology.',
      // achievements: [
      //   "Dean's List (All Semesters)",
      //   'Undergraduate Research Program',
      // ],
      // skills: [
      //   'Algorithms',
      //   'Data Structures',
      //   'Software Engineering',
      //   'Distributed Systems',
      // ],
    },
    {
      degree: 'Secondary Education',
      school: 'Holy Child School',
      location: 'Jalpaiguri, WB',
      duration: '2010 - 2020',
      description:
        'School preparatory curriculum with focus on Foundation.',
      // achievements: [
      //   'Valedictorian',
      //   'National Merit Scholar',
      //   'Math Olympiad Finalist',
      // ],
      // skills: ['Mathematics', 'Programming Fundamentals', 'Critical Thinking'],
    },
  ];

  const certifications = [
    {
      title: 'Cloud Computing',
      org: 'NPTEL',
      year: '2024',
      description:
        'Comprehensive certification covering the fundamentals of cloud infrastructure, virtualization, IaaS, PaaS, and SaaS models, with hands-on experience in deploying scalable applications.',
    },
    {
      title: 'AWS S3 Basics',
      org: 'Coursera',
      year: '2024',
      description:
        'Introductory course on Amazon S3, focusing on bucket creation, object lifecycle management, access control, and best practices for storing and retrieving data efficiently.',
    },
    {
      title: 'Data Structures and Algorithms Using C++ ',
      org: 'Udemy',
      year: '2023',
      description:
        'In-depth course exploring core data structures and algorithms in C++, including arrays, linked lists, trees, graphs, sorting, and searching, with emphasis on time and space complexity.',
    },
  ];

  return (
    <motion.div
      id="education"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80"
      >
        My Background
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo text-gray-800 dark:text-white"
      >
        Education
      </motion.h2>

      <motion.div
        className="space-y-10 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-black dark:hover:shadow-white dark:hover:bg-darkHover/50 bg-white dark:bg-darkHover/30"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
            <p className="text-gray-500 dark:text-white/60">{edu.school}</p>
            <div className="flex items-center gap-6 mt-2 text-gray-600 text-sm dark:text-white/50">
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                {edu.duration}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {edu.location}
              </div>
            </div>
            <p className="mt-4 text-gray-700 dark:text-white/80">{edu.description}</p>

            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold text-gray-700 dark:text-white flex items-center gap-1">
                  ✅ Achievements
                </p>
                <ul className="list-disc list-inside text-sm mt-1 text-gray-600 dark:text-white/80">
                  {edu.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            )}


            {edu.skills && edu.skills.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold text-gray-700 dark:text-white flex items-center gap-1">
                  💡 Key Skills
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-white/10 text-sm px-3 py-1 rounded-full font-medium text-gray-800 dark:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        ))}
      </motion.div>

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-16 mb-6 text-2xl font-Ovo text-gray-700 dark:text-white"
      >
        Certifications
      </motion.h4>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="border border-gray-300 dark:border-white/30 p-6 rounded-lg shadow-sm bg-white hover:bg-lightHover dark:bg-darkHover/30 hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{cert.title}</h3>
              <p className="text-gray-500 dark:text-white/60">{cert.org}</p>
              <p className="text-sm text-gray-600 dark:text-white/50 mt-1">{cert.year}</p>
            </div>
            <p className="mt-4 text-sm text-gray-700 dark:text-white/80">{cert.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Education;