import React, { useRef } from 'react'
import Image1 from './cravingsPorfolio.png'
import Image2 from './nirvanaPorfolio.png'
import Image3 from './vidspacePorfolio.png'
import { GitHub, Launch } from '@mui/icons-material'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const projectData = [
  {
    title: 'Nirvana - The Cinematic Escape!',
    description:
      'A movie streaming web app with authentication (SignUp/SignIn), multilingual support (English, Hindi, Spanish), smooth UI, and dynamic movie data from TMDb.',
    tech: ['ReactJS', 'Tailwind CSS', 'Redux', 'Firebase', 'TMDb API'],
    github: 'https://github.com/MeghashreeK/Nirvana',
    external: 'https://nirvana-nine.vercel.app/',
    image: Image2,
  },
  {
    title: 'Cravings - A Food Ordering Web App!',
    description:
      'A responsive food ordering app using live restaurant data from Swiggy API. Features include category browsing, search, sorting, a custom CORS proxy, and an interactive cart system.',
    tech: ['ReactJS', 'Tailwind CSS', 'Redux', 'Swiggy API', 'Express'],
    github: 'https://github.com/MeghashreeK/cravingsWebApp',
    external: 'https://cravings-web-app.vercel.app/',
    image: Image1,
  },
  {
    title: 'Vidspace - Your Personal Video Hub!',
    description:
      'A YouTube-inspired app featuring video listings, search with debouncing and caching, "look-alike" live chat, user comments, and categorized sections like music, news, and gaming.',
    tech: ['ReactJS', 'Tailwind CSS', 'Redux', 'YouTube API'],
    github: 'https://github.com/MeghashreeK/vidSpace',
    external: 'https://vid-space-mocha.vercel.app/',
    image: Image3,
  },
  
];


const ProjectItem = ({ project, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation();
  const navigate=useNavigate()

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
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`w-full flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
      initial="hidden"
      animate={controls}
      variants={container}
    >
      {/* Image */}
      <motion.div 
        className="md:w-1/2 w-full relative group"
        variants={item}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
                    <div className="absolute inset-0 bg-[#64FFCF] opacity-70 group-hover:opacity-0 transition duration-500 mix-blend-overlay pointer-events-none z-10" />
        <a href={project.external} target='_blank'>
        <img
          src={project.image}
          alt={project.title}
          className="cursor-pointer rounded-lg w-full h-full object-cover "
        />
        </a>
      </motion.div>

      {/* Text Content */}
      <motion.div className="md:w-1/2 w-full relative z-10" variants={container}>
        <motion.h3 variants={item} className="text-white text-xl font-semibold mb-4">{project.title}</motion.h3>
        <motion.div variants={item} className="bg-[#112240] text-[#a8b2d1] p-5 rounded shadow-md mb-4">
          <p>{project.description}</p>
        </motion.div>
        <motion.ul variants={container} className="flex flex-wrap gap-4 text-sm text-[#a8b2d1] font-mono mb-4">
          {project.tech.map((techItem, techIdx) => (
            <motion.li key={techIdx} variants={item}>
              {techItem}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div variants={item} className="flex gap-4 text-[#a8b2d1]">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <GitHub className="hover:text-[#64FFCF] transition duration-300" />
          </a>
          <a href={project.external} target="_blank" rel="noopener noreferrer">
            <Launch className="hover:text-[#64FFCF] transition duration-300" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation();
    const navigate=useNavigate();


  React.useEffect(() => {
    if (isInView) {
      controls.start("show")
    }
  }, [isInView, controls])

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
    <div ref={ref} className="w-full py-20">
      <div className="w-[80%] mx-auto">
        {/* Section Title */}
        <motion.div 
  className="flex flex-col mb-16"
  initial="hidden"
  animate={controls}
  variants={item}
>
  <div className='flex items-center'>
    <span className="text-[#64FFCF] text-[20px] font-mono mr-2">03.</span>
    <h2 className="text-white text-[20px] md:text-[28px] font-bold">Some Things I've Built</h2>
    <div className="flex-1 h-[1px] bg-[#233554] ml-4" />
  </div>
  <div className="relative inline-block">
    <motion.p 
      className='text-[#64FFCF] font-mono cursor-pointer inline-block'
      whileHover="hover"
      initial="rest"
              onClick={()=>navigate('/archive-projects')}

    >
      view archive projects
      <motion.span
        className="absolute bottom-0 left-0 w-[15%] h-[1px] bg-[#64FFCF]"
        variants={{
          rest: { scaleX: 0, transformOrigin: "left center" },
          hover: { scaleX: 1, transformOrigin: "left center" }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.p>
  </div>
</motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-20">
          {projectData.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects