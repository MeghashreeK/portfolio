import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1.5,
        staggerChildren: 0.5,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  return (
    <motion.div
      className="w-[100%] h-[100vh] flex items-center  pt-20 pb-10  md:pb-20"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="w-[80%] mx-auto">
        <motion.p variants={item} className="text-[#64FFCF] text-[16px] font-mono mb-4 ml-1">Hi, my name is</motion.p>

        <motion.h1 variants={item} className="text-[clamp(40px,8vw,80px)]  font-bold text-white leading-tight">
          Meghashree Kunder<span className="text-[clamp(40px,8vw,80px)]">.</span>
        </motion.h1>

        <motion.h2 variants={item} className="text-[clamp(40px,8vw,80px)] font-bold text-[#8892b0] leading-tight mb-6">
          I build things for the web.<span className="text-[#8892b0]"></span>
        </motion.h2>

        <motion.p variants={item} className="text-[#8892b0] max-w-[540px] text-[17px] mb-10">
          I’m a frontend developer passionate about building responsive and functional web applications. I enjoy translating ideas into clean, interactive user interfaces that feel good to use and are easy to maintain.
        </motion.p>

        <motion.a variants={item}
           onClick={() => scrollToSection('work')}
          className="relative inline-block px-8 py-4 font-mono text-[16px] text-[#64FFCF] border border-[#64FFCF] rounded group"
        >
          <span className="relative z-10">          
            Explore My Projects
          </span>

          {/* Right Layer */}
          <span className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-[#64FFCF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 ease-in-out rounded" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default HeroSection
