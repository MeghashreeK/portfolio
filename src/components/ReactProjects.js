import React from 'react'
import nirvanaImg from "../images/nirvanaPorfolio.png";
import vidspaceImg from "../images/vidspacePorfolio.png";
import cravingsImg from "../images/cravingsPorfolio.png";
import { Link } from 'react-router-dom';

const ReactProjects = () => {
  const projectArray = [
    { img: nirvanaImg, sourceCodeLink: "https://github.com/MeghashreeK/Nirvana", seeLiveLink: "https://nirvana-nine.vercel.app/" },
    { img: vidspaceImg, sourceCodeLink: "https://github.com/MeghashreeK/vidSpace", seeLiveLink: "https://vid-space-mocha.vercel.app/" },
    { img: cravingsImg, sourceCodeLink: "https://github.com/MeghashreeK/cravingsWebApp", seeLiveLink: "https://cravings-web-app.vercel.app/" },
  ];

  return (
    <div className='flex flex-col gap-6 sm:gap-5'>
      <h1 className='font-bold text-4xl'>ReactJS Projects</h1>
      <div className='flex gap-5 flex-wrap'>
        {projectArray.map((projects) => 
          <div className='w-full lg:w-[30%] bg-[#1E293B] rounded-lg'>
            <img className='rounded-lg' src={projects.img} alt="food-app" />
            <div className='flex gap-3 p-2 items-center justify-center'>
              <Link to={projects.sourceCodeLink}><button className='text-[14px] sm:text-[16px] p-1 px-2 font-bold rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-300'>Source code</button></Link>
              <Link to={projects.seeLiveLink}><button className='text-[14px] sm:text-[16px] p-1 px-2 font-bold rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-300'>See Live</button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReactProjects
