import React from 'react'
import nirvanaImg from "../images/nirvanaPorfolio.png";
import vidspaceImg from "../images/vidspacePorfolio.png";
import cravingsImg from "../images/cravingsPorfolio.png";
import { Link } from 'react-router-dom';
import { GITHUB_ICON_URL, PROJECT_URL } from '../utils/constants';

const ReactProjects = () => {
  const projectArray = [
    { img: nirvanaImg, sourceCodeLink: "https://github.com/MeghashreeK/Nirvana", seeLiveLink: "https://nirvana-nine.vercel.app/" },
    { img: vidspaceImg, sourceCodeLink: "https://github.com/MeghashreeK/vidSpace", seeLiveLink: "https://vid-space-mocha.vercel.app/" },
    { img: cravingsImg, sourceCodeLink: "https://github.com/MeghashreeK/cravingsWebApp", seeLiveLink: "https://cravings-web-app.vercel.app/" },
  ];

  return (
    <div className='flex flex-col gap-10 sm:gap-5'>
      <h1 className='flex font-extrabold text-3xl sm:text-4xl font-Merriweather justify-center gap-5 mb-3'>
        <p>P</p>
        <p>R</p>
        <p>O</p>
        <p>J</p>
        <p>E</p>
        <p>C</p>
        <p>T</p>
        <p>S</p>
      </h1>
      <div className='flex gap-5 flex-wrap font-Montserrat justify-center'>
        {projectArray.map((projects,key) => 
          <div key={key} className='w-full lg:w-[30%] bg-[#BF40BF] rounded-lg'>
            <img className='rounded-lg' src={projects.img} alt="food-app" />
            <div className='flex gap-3 p-2 items-center justify-end'>
              <Link to={projects.sourceCodeLink}><img width="30" height="30" src={GITHUB_ICON_URL} alt="github"/></Link>
              <Link to={projects.seeLiveLink}><img className='w-5 h-5' src={PROJECT_URL} alt="link--v1"/></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReactProjects
