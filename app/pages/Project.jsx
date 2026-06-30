import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Project = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="project"
      className="section-shell py-16 sm:py-24 scroll-mt-24"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300"
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold text-gray-950 dark:text-white"
      >
        My latest projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-base leading-7 text-gray-600 dark:text-white/68"
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid gap-5 my-10 dark:text-black sm:grid-cols-2 lg:grid-cols-4"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full min-h-72 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden border border-black/10 shadow-sm"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="bg-white/95 backdrop-blur w-[calc(100%-1.5rem)] rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between gap-3 duration-500 group-hover:bottom-5">
              <div className="min-w-0">
                <h2 className="font-semibold truncate">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-full border-black w-9 aspect-square flex items-center justify-center group-hover:bg-amber-300 transition"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-full border-black w-9 aspect-square flex items-center justify-center group-hover:bg-amber-300 transition"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://github.com/TirtharajBarma?tab=repositories"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-900 border border-gray-900 rounded-full py-3 px-7 mx-auto mt-14 hover:bg-gray-950 hover:text-white duration-300 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-950"
      >
        Explore more{' '}
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt=""
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Project;
