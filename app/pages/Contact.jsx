import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {

    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB_ACCESS_KEY);
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}}
    id='contact' className='section-shell py-16 sm:py-24 scroll-mt-24 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        
        <motion.h4 
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{delay: 0.3, duration: 0.5}}
        className='text-center mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300'>Connect with me</motion.h4>
        
        <motion.h2 
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{delay: 0.5, duration: 0.5}}
        className='text-center text-4xl sm:text-5xl font-bold text-gray-950 dark:text-white'>Get in touch</motion.h2>
        
        <motion.p 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 0.7, duration: 0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 text-base leading-7 text-gray-600 dark:text-white/68'>I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</motion.p>

        <motion.form 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 0.9, duration: 0.5}}
        className='max-w-2xl mx-auto rounded-lg border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur sm:p-6 dark:border-white/10 dark:bg-white/[0.05]' onSubmit={onSubmit}>
            
            <div className='grid gap-4 sm:grid-cols-2 mb-4'>
                <motion.input 
                  initial={{x: -50, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{delay: 1.1, duration: 0.6}}
                type="text" name='name' placeholder='Enter your name' required className='min-w-0 p-3 outline-none border border-black/10 rounded-md bg-white text-gray-900 focus:border-gray-950 dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:focus:border-white' />
                
                <motion.input 
                  initial={{x: 50, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{delay: 1.2, duration: 0.6}}
                type="email" name='email' placeholder='Enter your email' required className='min-w-0 p-3 outline-none border border-black/10 rounded-md bg-white text-gray-900 focus:border-gray-950 dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:focus:border-white' />
            </div>
            
            <motion.textarea 
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{delay: 1.1, duration: 0.6}}
            rows='6' name='message' placeholder='Enter your message' required className='w-full p-4 outline-none border border-black/10 rounded-md bg-white mb-6 text-gray-900 focus:border-gray-950 dark:bg-white/[0.06] dark:border-white/10 dark:text-white dark:focus:border-white'></motion.textarea>
            
            <motion.button 
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}
            type='submit' className='py-3 px-7 w-max flex items-center justify-between gap-2 bg-gray-950 text-white rounded-full mx-auto hover:bg-gray-800 duration-300 dark:bg-white dark:text-gray-950'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4 dark:invert' /></motion.button>
            
            <p className='mt-4'>{result}</p>
        </motion.form>

    </motion.div>
  )
}

export default Contact
