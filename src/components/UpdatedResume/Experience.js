import React, { useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  React.useEffect(() => {
    if (isInView) {
      controls.start("show")
    }
  }, [isInView, controls])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        className="w-[80%] mx-auto flex flex-col"
        initial="hidden"
        animate={controls}
        variants={container}
      >
        {/* Section Title */}
        <motion.div variants={item} className="flex items-center mb-10">
          <span className="text-[#64FFCF] text-[20px] font-mono mr-2">02.</span>
          <h2 className="text-white text-[20px] md:text-[28px] font-bold">Where I've Worked</h2>
          <div className="flex-1 h-[1px] bg-[#233554] ml-4" />
        </motion.div>

        {/* Work Experience */}
        <motion.div variants={item} className="flex flex-col md:flex-row gap-6">
          {/* Job Details */}
          <div className="md:w-full">
            <a href='https://ajavu.tech/' target='_blank' rel='noreferrer'>
            <motion.h3 variants={item} className="text-white text-[20px] font-semibold mb-1 ">
              Frontend Developer <span className="text-[#64FFCF]">@ Ajavu Tech House</span>
            </motion.h3>
            </a>
            <motion.p variants={item} className="text-[#8892b0] text-[14px] font-mono mb-4">September 2024 — May 2025</motion.p>

            <motion.ul variants={container} className="list-none space-y-3">
              <motion.li variants={item} className="text-[#8892b0] flex items-start gap-2">
                <span className="text-[#64FFCF]">▸</span>
                <span>
                  Built responsive UIs for real-world applications using ReactJS, Tailwind CSS, and Material UI.
                </span>
              </motion.li>
              <motion.li variants={item} className="text-[#8892b0] flex items-start gap-2">
                <span className="text-[#64FFCF]">▸</span>
                <span>
                  Implemented interactive features like OTP-based login, chat systems, and file sharing for enhanced user engagement.
                </span>
              </motion.li>
              <motion.li variants={item} className="text-[#8892b0] flex items-start gap-2">
                <span className="text-[#64FFCF]">▸</span>
                <span>
                  Developed internal portals and business websites with strong focus on scalability and usability.
                </span>
              </motion.li>
              <motion.li variants={item} className="text-[#8892b0] flex items-start gap-2">
                <span className="text-[#64FFCF]">▸</span>
                <span>
                  Used libraries like Framer Motion and GSAP to bring motion and smooth scroll effects to life.
                </span>
              </motion.li>
              <motion.li variants={item} className="text-[#8892b0] flex items-start gap-2">
                <span className="text-[#64FFCF]">▸</span>
                <span>
                  Contributed across multiple products, from admin dashboards to marketing sites, in an agile, fast-paced setup.
                </span>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience
