import React from 'react'
import { FaReact, FaCss3Alt, FaHtml5, FaJava, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiTestinglibrary, SiC, SiVercel, SiNetlify, SiRender, SiJavascript, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skillsArray1 = [
    { name: "ReactJS", icon: <FaReact /> },
    { name: "TailwindCss", icon: <SiTailwindcss /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Testing", icon: <SiTestinglibrary /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C", icon: <SiC /> }
  ];
  const skillsArray2 = [
    { name: "Github", icon: <FaGithub /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Render", icon: <SiRender /> }
  ];
  return (
    <div className='flex flex-col h-screen bg-[#010B13] mt-5 gap-6 sm:gap-5'>
      <h1 className='font-bold text-4xl font-Merriweather'>Technical Skills</h1>
      <div className='flex gap-3 sm:gap-8 font-Montserrat'>
        <div className='flex flex-col gap-2 flex-wrap text-[16px] sm:text-2xl'>
          {skillsArray1.map((skills) =>
            <div key={skills.name} className='flex items-center gap-2 py-2 px-2 sm:px-4 font-bold rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-300' >
              <span>{skills.icon}</span>
              <div className='flex flex-col'>
                <p>{skills.name}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className='flex flex-col gap-2 text-[16px] sm:text-2xl'>
          {skillsArray2.map((skills) =>
            <div key={skills.name} className='flex items-center gap-2 py-2 px-2 sm:px-4 font-bold rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-300' >
              <span>{skills.icon}</span>
              <p>{skills.name}
              </p>
            </div>
          )}
        </div>
        <div className='w-24 h-24'>
        </div>
      </div>
    </div>
  )
}

export default Skills


