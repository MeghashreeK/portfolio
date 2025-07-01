import React, { useRef } from 'react'
import Image from './PorfolioImage.jpg'
import { motion, useAnimation, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  React.useEffect(() => {
    if (isInView) {
      controls.start("show")
    }
  }, [isInView, controls])

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  return (
    <div ref={ref} className="w-[100%] flex items-center pt-10 pb-10 md:pt-20 md:pb-20">
      <motion.div
        className="w-[80%] mx-auto flex flex-col md:flex-row gap-10 items-center"
        initial="hidden"
        animate={controls}
        variants={container}
      >
        {/* Left Section - Text */}
        <div className="md:w-[60%] lg:w-2/3 ">
          <motion.div variants={item} className="flex items-center mb-6">
            <span className="text-[#64FFCF] text-[20px] font-mono mr-2">01.</span>
            <h2 className="text-white text-[20px] md:text-[28px] font-bold">About Me</h2>
            <div className="flex-1 h-[1px] bg-[#233554] ml-4" />
          </motion.div>

          <motion.p variants={item} className="text-[#8892b0] text-[16px] mb-4 leading-relaxed">
            Hello! I’m Meghashree Kunder, a frontend developer based in Bengaluru, India. My journey into web development began with curiosity and has since turned into a deep passion for building interactive and user-friendly web applications.
          </motion.p>

          <motion.p variants={item} className="text-[#8892b0] text-[16px] mb-4 leading-relaxed">
            I love creating clean, responsive UIs and enjoy the process of translating ideas into working features that feel smooth and intuitive. I aim to strike a balance between function and aesthetics — whether I’m handling state with React or styling components with Tailwind.
          </motion.p>

          <motion.p variants={item} className="text-[#8892b0] text-[16px] mb-4 leading-relaxed">
            I spent 8 months at <a className='cursor-pointer' href="https://ajavu.tech/" target="_blank" rel="noreferrer" className='text-[#64FFCF]'>Ajavu Tech House</a>, where I worked on building and maintaining responsive web applications using React. I collaborated closely with designers and backend developers to bring features to life and deliver clean, functional user interfaces.
          </motion.p>


          <motion.p variants={item} className="text-[#8892b0] text-[16px] mb-2 leading-relaxed">
            Below is a snapshot of my tech stack:
          </motion.p>


          {/* Tech Stack */}
          <motion.ul variants={item} className="grid grid-cols-2 gap-x-10 text-[14px] font-mono text-[#8892b0] mt-4">
            <li>▸ React</li>
            <li>▸ TailwindCSS</li>
            <li>▸ Redux</li>

            <li>▸ MUI</li>
            <li>▸ Javascript(ES6+)</li>

          </motion.ul>
        </div>

        {/* Right Section - Image */}
        <motion.div variants={item} className="w-full md:w-[40%] lg:w-[28%] relative group h-[45vh] ">
          {/* Border */}
          <motion.div
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 10, y: 10 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute top-5 left-5 w-full h-full border-2 border-[#64FFCF] rounded z-0"
          ></motion.div>

          {/* Image + Overlay */}
          <motion.div
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: -10, y: -10 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="relative z-10 overflow-hidden rounded w-full h-full"
          >
            {/* Green Overlay (visible by default, hidden on hover) */}
            <div className="absolute inset-0 bg-[#64FFCF] opacity-70 group-hover:opacity-0 transition duration-500 mix-blend-overlay pointer-events-none z-10" />

            <img
              src={Image}
              alt="Portrait"
              className="w-full h-full object-cover rounded"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About