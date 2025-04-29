import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Code, Box, Database, GitBranch, Globe, X } from 'lucide-react';

const skillsData = [
  {
    icon: <Server size={32} />,
    color: '#00C853', // Green for Node.js
    title: 'Node.js Development',
    description: 'Expert in building scalable backend services and APIs using Node.js, Express, and modern JavaScript.',
  },
  {
    icon: <Cloud size={32} />,
    color: '#42A5F5', // Light Blue for AWS
    title: 'AWS Cloud Services',
    description: 'Experience with EC2, S3, CloudFront, and other AWS services for building scalable cloud solutions.',
  },
  {
    icon: <Code size={32} />,
    color: '#FFCA28', // Orange for Full-Stack JavaScript
    title: 'Full Stack JavaScript',
    description: 'Proficient in modern JavaScript frameworks including React, Next.js, and Node.js ecosystem.',
  },
  {
    icon: <Box size={32} />,
    color: '#1976D2', // Blue for Docker & Kubernetes
    title: 'Docker',
    description: 'Containerization and orchestration for deploying and managing microservices architecture.',
  },
  {
    icon: <Database size={32} />,
    color: '#AB47BC', // Purple for Database Management
    title: 'Database Management',
    description: 'Expertise in MongoDB, MySql efficient data storage and retrieval.',
  },
  {
    icon: <GitBranch size={32} />,
    color: '#F44336', // Red for CI/CD & DevOps
    title: 'CI/CD & DevOps',
    description: 'Implementing continuous integration and deployment pipelines using GitHub Actions, Jenkins, and AWS tools.',
  },
  {
    icon: <Globe size={32} />,
    color: '#26A69A', // Teal for API Development
    title: 'API Development',
    description: 'Designing and building RESTful with Node.js for seamless frontend-backend integration.',
  },
];

const Skills = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="w-full px-[5%] py-16 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-4 text-xl font-Ovo dark:text-white/80"
      >
        My Expertise
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo font-bold text-gray-800 dark:text-white mb-8"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid gap-8 my-12 md:grid-cols-4 sm:grid-cols-2 grid-cols-1"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.15)' }}
            transition={{ duration: 0.3 }}
            className="border rounded-2xl p-8 bg-gradient-to-br  shadow-lg hover:-translate-y-2 duration-300 cursor-pointer hover:bg-lightHover hover:shadow-black dark:hover:shadow-white dark:hover:bg-darkHover/50 bg-white dark:bg-darkHover/30"
            key={index}
            onClick={() => openModal(skill)}
          >
            <div className="mb-6">
              {React.cloneElement(skill.icon, { style: { color: skill.color }, className: 'transition-colors duration-300' })}
            </div>
            <h3 className="text-2xl font-Ovo font-semibold text-gray-800 dark:text-white mb-4">{skill.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-300 font-Ovo leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {isModalOpen && selectedSkill && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl max-w-lg w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-full p-2"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-3xl font-Ovo font-bold text-gray-900 dark:text-white mb-6">{selectedSkill.title}</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">{selectedSkill.description}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Skills;