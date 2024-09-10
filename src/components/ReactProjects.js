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
    <div className='flex flex-col gap-10 sm:gap-5'>
      <h1 className='font-bold text-3xl sm:text-4xl font-Merriweather'>Projects</h1>
      <div className='flex gap-5 flex-wrap font-Montserrat'>
        {projectArray.map((projects,key) => 
          <div key={key} className='w-full lg:w-[30%] bg-[#BF40BF] rounded-lg'>
            <img className='rounded-lg' src={projects.img} alt="food-app" />
            <div className='flex gap-3 p-2 items-center justify-end'>
              <Link to={projects.sourceCodeLink}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="github"/></Link>
              <Link to={projects.seeLiveLink}><img className='w-5 h-5' src="https://img.icons8.com/ios-filled/50/ffffff/link--v1.png" alt="link--v1"/></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReactProjects
