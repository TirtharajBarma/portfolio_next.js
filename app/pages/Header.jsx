import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'motion/react';
import { ArrowDownToLine, ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header id="top" className="section-shell pt-24 sm:pt-28">
      <div className="grid items-center gap-10 py-10 sm:py-14 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.14fr_0.86fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur sm:text-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-white/75">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for developer roles
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.02] tracking-normal text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
            Frontend developer building clean, scalable web products.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0 dark:text-white/68">
            I am Tirtharaj Barma, a web developer focused on React, Next.js, cloud-ready interfaces, and full-stack product details that feel fast, reliable, and easy to use.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-gray-600 lg:justify-start dark:text-white/60">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-amber-600 dark:text-amber-400" />
              India
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-white/30" />
            <span>React | Next.js | AWS</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <motion.a
              whileHover={{ y: -2 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-950/10 transition hover:bg-gray-800 dark:bg-white dark:text-gray-950"
            >
              Contact me <ArrowUpRight size={17} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="/TirtharajBarma_resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-black dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:border-white"
            >
              Download resume <ArrowDownToLine size={17} />
            </motion.a>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
            <a
              href="https://www.linkedin.com/in/tirtharaj-barma-327940236"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/70 text-gray-800 transition hover:-translate-y-0.5 hover:border-black dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:border-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/TirtharajBarma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/70 text-gray-800 transition hover:-translate-y-0.5 hover:border-black dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:border-white"
            >
              <Github size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-[22rem]"
        >
          <div className="absolute -inset-3 rounded-2xl border border-black/10 bg-white/45 shadow-2xl shadow-amber-950/10 dark:border-white/10 dark:bg-white/[0.04]" />
          <div className="relative overflow-hidden rounded-xl border border-black/10 bg-[#ebe2d4] dark:border-white/10 dark:bg-white/[0.06]">
            <Image
              src={assets.tirtha}
              alt="Tirtharaj Barma"
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="relative -mt-10 ml-auto mr-2 max-w-[15rem] rounded-lg border border-black/10 bg-white/90 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-[#111827]/90">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700 dark:text-amber-300">
              Current focus
            </p>
            <p className="mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Production-grade UI, APIs, and cloud-backed web apps.
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
