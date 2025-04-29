'use client'
import { useEffect, useState } from 'react';
import {Navbar, Header, About, Project, Contact, Footer} from './pages/index'
import Education from './pages/Education';
import Skills from './pages/Skill';

export default function Home() {

  const [isDarkMode, setISDarkMode] = useState(false);

  useEffect(() => {
    if( localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        setISDarkMode(true);
    }else{
      setISDarkMode(false);
    }
  }, [])

  useEffect(() => {
      if(isDarkMode){
          document.documentElement.classList.add('dark');
          localStorage.theme = 'dark';
      }
      else {
          document.documentElement.classList.remove('dark');
          localStorage.theme = '';
      }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setISDarkMode={setISDarkMode} />
      <Header isDarkMode={isDarkMode}  />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Project isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
