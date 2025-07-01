import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';


const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

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
  };

  return (
    <motion.section
      ref={ref}
      className="w-full text-center pt-10 pb-10 md:pt-20 md:pb-20 px-4"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <motion.p variants={item} className="text-[#64FFCF] font-mono text-[16px] mb-4">
        04. What's Next?
      </motion.p>

      <motion.h2 variants={item} className="text-[#ccd6f6] text-3xl md:text-5xl font-bold mb-6">
        Get In Touch
      </motion.h2>

      <motion.p
        variants={item}
        className="text-[#8892b0] max-w-xl mx-auto text-[17px] leading-relaxed mb-12"
      >
        Have an idea, project, or just want to chat about frontend stuff? I’m always up for a good conversation! Feel free to drop a message — I’ll get back to you soon.
      </motion.p>

      <motion.a
        href="mailto:kundermeghashree279@gmail.com"
        className="relative inline-block px-8 py-4 font-mono text-[16px] text-[#64FFCF] border border-[#64FFCF] rounded group"
      >
        <span className="relative z-10">Say Hello</span>

        {/* Right Layer */}
        <span className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-[#64FFCF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 ease-in-out rounded" />
      </motion.a>
    </motion.section>
  );
};

export default Contact;
