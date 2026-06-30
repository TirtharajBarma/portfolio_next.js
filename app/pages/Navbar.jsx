import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';

const navLinks = [
  ['Home', '#top'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#project'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

const Navbar = ({ isDarkMode, setISDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
          isScroll
            ? 'border-black/5 bg-white/75 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-[#0d1117]/80'
            : 'border-transparent bg-white/35 backdrop-blur-md dark:bg-[#0d1117]/25'
        }`}
      >
        <div className="section-shell flex items-center justify-between py-3.5">
          <a href="#top" aria-label="Go to top">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo_white}
              alt="Tirtharaj Barma logo"
              className="w-10 cursor-pointer"
            />
          </a>

          <ul className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1 text-sm font-medium text-gray-700 shadow-sm backdrop-blur md:flex dark:border-white/10 dark:bg-white/[0.06] dark:text-white/75">
            {navLinks.slice(0, 5).map(([label, href]) => (
              <li key={href}>
                <a
                  className="block rounded-full px-4 py-2 transition hover:bg-gray-950 hover:text-white dark:hover:bg-white dark:hover:text-gray-950"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setISDarkMode((prev) => !prev)}
              aria-label="Toggle color theme"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/70 text-gray-700 transition hover:border-black hover:text-black dark:border-white/10 dark:bg-white/[0.06] dark:text-white/75 dark:hover:border-white dark:hover:text-white"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-gray-950 bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800 lg:flex dark:border-white dark:bg-white dark:text-gray-950"
            >
              Contact <ArrowUpRight size={16} />
            </a>

            <button
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/70 text-gray-800 md:hidden dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <button
                className="absolute inset-0 bg-black/35 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu overlay"
              />
              <div className="absolute right-3 top-3 w-[min(21rem,calc(100vw-1.5rem))] rounded-lg border border-black/10 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-[#111827]">
                <div className="flex items-center justify-between border-b border-black/10 pb-4 dark:border-white/10">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">
                    Menu
                  </span>
                  <button
                    className="grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close navigation menu"
                  >
                    <X size={18} />
                  </button>
                </div>
                <ul className="mt-4 flex flex-col gap-1">
                  {navLinks.map(([label, href]) => (
                    <li key={href}>
                      <a
                        className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-gray-800 transition hover:bg-gray-100 dark:text-white dark:hover:bg-white/10"
                        onClick={() => setIsMenuOpen(false)}
                        href={href}
                      >
                        {label}
                        <ArrowUpRight size={16} className="text-amber-600 dark:text-amber-400" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
