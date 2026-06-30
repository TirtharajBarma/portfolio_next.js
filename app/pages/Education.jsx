'use client';
import { CalendarDays, MapPin, X, Link, Cloud, Database, Code, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Education = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'Lovely Professional University',
      location: 'Phagwara, PB',
      duration: '2022 - 2026',
      description:
        'Web Developer skilled in building responsive, efficient, and modern websites.',
      achievements: [
        "Dean's list for academic excellence",
        '100-day streak on Leetcode',
      ],
      skills: ['Web Development', 'Cloud Computing', 'Devops'],
      logo: assets.lpu
    },
    {
      degree: 'Higher Secondary Education',
      school: 'Delhi Public School',
      location: 'Siliguri, WB',
      duration: '2020 - 2022',
      description:
        'HigherSchool preparatory curriculum with focus on Physics, Chemistry, Mathematics and Biology.',
      logo: assets.dps,
    },
    {
      degree: 'Secondary Education',
      school: 'Holy Child School',
      location: 'Jalpaiguri, WB',
      duration: '2010 - 2020',
      description: 'School preparatory curriculum with focus on Foundation.',
      logo: assets.hcs,
    },
  ];

  const certifications = [
    {
      title: 'Cloud Computing',
      org: 'NPTEL',
      year: '2024',
      description:
        'Comprehensive certification covering the fundamentals of cloud infrastructure, virtualization, IaaS, PaaS, and SaaS models, with hands-on experience in deploying scalable applications.',
      image: assets.nptel,
      verifyLink: '#verify-section',
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'AWS S3 Basics',
      org: 'Coursera',
      year: '2024',
      description:
        'Introductory course on Amazon S3, focusing on bucket creation, object lifecycle management, access control, and best practices for storing and retrieving data efficiently.',
      image: assets.s3,
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/T7SUEG8C3SF8',
      icon: <Database className="w-6 h-6 text-green-500" />,
    },
    {
      title: 'Data Structures and Algorithms Using C++',
      org: 'Udemy',
      year: '2023',
      description:
        'In-depth course exploring core data structures and algorithms in C++, including arrays, linked lists, trees, graphs, sorting, and searching, with emphasis on time and space complexity.',
      image: assets.udemy,
      verifyLink: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-442c8bbb-e51a-4ec1-bcb2-3da23b5aedfe.pdf',
      icon: <Code className="w-6 h-6 text-purple-500" />,
    },
  ];

  const achievements = [
    {
      title: '100-Day Leetcode Streak',
      org: 'Leetcode',
      year: '2024',
      description:
        'Completed a 100-day streak of solving coding problems on Leetcode, demonstrating dedication to improving problem-solving skills and mastering data structures and algorithms.',
      logo: assets.leetcode,
      icon: <Code className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Dean's List",
      org: 'Lovely Professional University',
      year: '2023',
      description:
        'Recognized on the Dean’s List for outstanding academic performance, maintaining a high GPA and excelling in coursework.',
      logo: assets.lpu,
      icon: <Award className="w-6 h-6 text-gold-500" />,
    },
    {
      title: 'Swimming Competition Winner',
      org: 'Town Sports Club',
      year: '2021',
      description:
        'Secured first place in a town-wide swimming competition, showcasing discipline, endurance, and competitive spirit.',
      logo: assets.townclub,
      icon: <Award className="w-6 h-6 text-blue-500" />,
    },
  ];

  const extracurriculars = [
    {
      title: 'Core Team Member - AWS Cloud Club LPU',
      org: 'AWS Cloud Club, Lovely Professional University',
      duration: '2023 - Present',
      description:
        'As a core team member, I actively contribute to organizing workshops and cloud computing events to foster technical learning and community engagement. Successfully co-organized 4 workshops and events, impacting over 300 students by providing hands-on experience with AWS technologies.',
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFis5HVDqXJ0A/company-logo_200_200/company-logo_200_200/0/1680922685185?e=1751500800&v=beta&t=Nky2flkQXDrScuTCagpMS7meqdBMPCvXrvPHhkaCzKE',
      icon: <Users className="w-6 h-6 text-orange-500" />,
    },
  ];

  return (
    <motion.div
      id="education"
      className="section-shell py-16 sm:py-24 scroll-mt-24 overflow-x-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300"
      >
        My Background
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold text-gray-950 dark:text-white"
      >
        Education & Achievements
      </motion.h2>

      <Tab.Group>
        <Tab.List className="flex sm:justify-center justify-start gap-1.5 sm:gap-4 mt-8 mb-12 overflow-x-auto flex-nowrap px-1 sm:px-2 scrollbar-hide w-full">
          {['Education', 'Achievements', 'Extracurriculars', 'Certifications'].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `px-2.5 sm:px-6 py-1.5 sm:py-3 rounded-lg font-medium text-[11px] sm:text-sm transition-all duration-300 whitespace-nowrap shrink-0 ${
                  selected
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white/60 hover:bg-gray-300 dark:hover:bg-white/20'
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {/* Education Section */}
          <Tab.Panel>
            <motion.div
              className="space-y-6 sm:space-y-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="border border-gray-300 dark:border-white/30 rounded-xl p-4 sm:p-6 hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-black dark:hover:shadow-white dark:hover:bg-darkHover/50 bg-white dark:bg-darkHover/30"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Image
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-contain shrink-0"
                    />
                    <p className="text-gray-500 dark:text-white/60 text-sm sm:text-base">{edu.school}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-gray-600 text-sm dark:text-white/50">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4 shrink-0" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 shrink-0" />
                      {edu.location}
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 dark:text-white/80">{edu.description}</p>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-3 sm:mt-4">
                      <p className="font-semibold text-gray-700 dark:text-white flex items-center gap-1 text-sm sm:text-base">
                        ✅ Achievements
                      </p>
                      <ul className="list-disc list-inside text-xs sm:text-sm mt-1 text-gray-600 dark:text-white/80">
                        {edu.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.skills && edu.skills.length > 0 && (
                    <div className="mt-3 sm:mt-4">
                      <p className="font-semibold text-gray-700 dark:text-white flex items-center gap-1 text-sm sm:text-base">
                        💡 Key Skills
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {edu.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 dark:bg-white/10 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium text-gray-800 dark:text-white"
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
          </Tab.Panel>

          {/* Achievements Section */}
          <Tab.Panel>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-3 gap-4 sm:gap-8"
            >
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' }}
                  transition={{ duration: 0.5 }}
                  className="border border-gray-300 dark:border-white/30 p-4 sm:p-6 rounded-xl shadow-lg hover:bg-lightHover hover:shadow-black dark:hover:shadow-white dark:hover:bg-darkHover/50 bg-white dark:bg-darkHover/30"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      {ach.icon}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white">{ach.title}</h3>
                    </div>
                    <span className="shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                      {ach.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Image
                      src={ach.logo}
                      alt={`${ach.org} logo`}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover shrink-0"
                    />
                    <p className="text-gray-500 dark:text-white/60 text-xs sm:text-sm truncate">{ach.org}</p>
                  </div>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 dark:text-white/80 leading-relaxed">
                    {ach.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Tab.Panel>

          {/* Extracurriculars Section */}
          <Tab.Panel>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-10"
            >
              {extracurriculars.map((extra, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="border border-gray-300 dark:border-white/30 rounded-xl p-4 sm:p-6 hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-black dark:hover:shadow-white dark:hover:bg-darkHover/50 bg-white dark:bg-darkHover/30"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    {extra.icon}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white">{extra.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <img
                      src={extra.logo}
                      alt={`${extra.org} logo`}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shrink-0"
                    />
                    <p className="text-gray-500 dark:text-white/60 text-xs sm:text-sm">{extra.org}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-gray-600 text-xs sm:text-sm dark:text-white/50">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4 shrink-0" />
                      {extra.duration}
                    </div>
                  </div>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 dark:text-white/80">{extra.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </Tab.Panel>

          {/* Certifications Section */}
          <Tab.Panel>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-3 gap-4 sm:gap-8"
            >
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' }}
                  transition={{ duration: 0.5 }}
                  className="border border-gray-300 dark:border-white/30 p-4 sm:p-6 rounded-xl shadow-lg hover:bg-lightHover hover:shadow-black dark:hover:shadow-white dark:hover:bg-darkHover/50 bg-white dark:bg-darkHover/30"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      {cert.icon}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white">{cert.title}</h3>
                    </div>
                    <span className="shrink-0 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-white/60 mt-1 font-medium text-xs sm:text-sm">{cert.org}</p>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 dark:text-white/80 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="mt-3 sm:mt-4">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-auto object-contain rounded-lg cursor-pointer border border-gray-200 dark:border-gray-700"
                      onClick={() => openModal(cert.image)}
                    />
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <a
                      href={cert.verifyLink}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300"
                    >
                      <Link className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Verify Certificate
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-3xl">
            <Image
              src={selectedImage}
              alt="Expanded certificate"
              className="w-full h-auto max-h-[85vh] rounded-lg object-contain mx-auto"
            />
            <button
              className="absolute -top-3 -right-3 sm:top-2 sm:right-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-1.5 sm:p-2"
              onClick={closeModal}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Education;
