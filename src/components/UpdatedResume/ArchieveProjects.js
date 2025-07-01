import React, { useRef } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion, useAnimation, useInView } from 'framer-motion';

const projects = [
  {
    year: '2025',
    title: 'Benaka Gold Company Website',
    company: 'Ajavu Tech House',
    tech: 'React · TailwindCSS · Framer Motion',
    link: 'https://benakagoldcompany.com/',
  },
   {
    year: '2024',
    title: 'Flicker Fantasy Website',
    company: 'Ajavu Tech House',
    tech: 'React · TailwindCSS',
    link: 'https://www.flickerfantasy.com/',
  },
  {
    year: '2023',
    title: 'Tic-Tac-Toe',
    company: '-',
    tech: 'Javascript · CSS · HTML',
    link: 'https://tic-tac-to-e.netlify.app/',
    github:'https://github.com/MeghashreeK/tic-tac-toe'
  },
  {
    year: '2023',
    title: 'To-do List',
    company: '-',
    tech: 'Javascript · CSS · HTML',
    link: 'https://to-do-list-e.netlify.app/',
    github:'https://github.com/MeghashreeK/Todo-List'
  },
  {
    year: '2023',
    title: 'Weather App',
    company: '-',
    tech: 'Javascript · CSS · HTML',
    link: 'https://deft-gingersnap-ed1768.netlify.app/',
    github:'https://github.com/MeghashreeK/weatherWebApp'
  },
  {
    year: '2023',
    title: 'Social Media UI',
    company: '-',
    tech: 'Javascript · CSS · HTML',
    link: 'https://portfolio-demo.com',
    github:'https://github.com/MeghashreeK/social-media-design'
  },
  {
    year: '2022',
    title: 'Quiz',
    company: '-',
    tech: 'Javascript · CSS · HTML',
    link: 'https://quizgame799.netlify.app/',
    github:'https://github.com/MeghashreeK/Quiz'
  },
];

const ArchiveProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" }); // Removed negative margin
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
        staggerChildren: 0.08,
        delayChildren: 0.1,
        when: "beforeChildren" // Ensures parent animates first
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0, // Removed y-axis movement
      scale: 0.98 // Subtle scale instead of vertical movement
    },
    show: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3, // Faster duration
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      ref={ref} 
      className="w-[90%] md:w-[100%] flex justify-center mt-10 mb-10  items-center h-auto md:h-screen"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={container}
        className=' w-[80%]'
      >
        <motion.h2 variants={item} className="text-[#ccd6f6] text-3xl md:text-5xl font-bold mb-4">Archive</motion.h2>
        <motion.p variants={item} className="text-[#64ffda] mb-8">A list of things I've worked on</motion.p>

        <div className="overflow-x-auto" style={{ overflow: 'hidden' }}> {/* Removed scrollbar */}
          <motion.table 
            className="w-full text-left text-[#a8b2d1] text-sm font-mono border-collapse"
            variants={container}
          >
            <thead>
              <motion.tr 
                className="border-b border-[#233554]"
                variants={item}
              >
                <th className="py-3 pr-4">Year</th>
                <th className="py-3 pr-4">Title</th>
                <th className="py-3 pr-4 hidden md:block">Made at</th>
                <th className="py-3 pr-4">Built with</th>
                <th className="py-3">Link</th>
              </motion.tr>
            </thead>
            <tbody>
              {projects.map((project, idx) => (
                <motion.tr
                  key={idx}
                  className="hover:bg-[#112240] transition duration-300 ease-in-out"
                  variants={item}
                >
                  <td className="py-3 pr-4 text-[#64ffda]">{project.year}</td>
                  <td className="py-3 pr-4 font-semibold text-[#ccd6f6]">{project.title}</td>
                  <td className="py-3 pr-4 hidden md:block">{project.company}</td>
                  <td className="py-3 pr-4">{project.tech}</td>
                  <td className="py-3 flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:opacity-80"
                    >
                      <OpenInNewIcon fontSize="small" />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64ffda] hover:opacity-80"
                      >
                        <GitHubIcon fontSize="small" />
                      </a>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </motion.div>
    </div>
  );
};

export default ArchiveProjects;