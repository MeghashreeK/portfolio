import React from 'react'
import nirvanaImg from "../images/nirvanaPorfolio.png";
import vidspaceImg from "../images/vidspacePorfolio.png";
import cravingsImg from "../images/cravingsPorfolio.png";

const ReactProjects = () => {
  return (
    <div className='flex flex-col gap-6 sm:gap-5'>
        <h1 className='font-bold text-4xl'>ReactJS Projects</h1>
            <div className='flex gap-5 flex-wrap'>

            <div className='w-full lg:w-[30%] bg-[#01796F] rounded-lg'>
                <img className='rounded-lg' src={nirvanaImg} alt="food-app" />
                <div className='flex gap-3 p-2 items-center justify-center'>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-200'>Source code</button>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-200'>Live Project</button>
                </div>
            </div>

            <div className='w-full lg:w-[30%] bg-[#01796F] rounded-lg'>
                <img className='rounded-lg' src={vidspaceImg} alt="food-app" />
                <div className='flex gap-3 p-2 items-center justify-center'>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-200'>Source code</button>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-200'>Live Project</button>
                </div>
            </div>

            <div className='w-full lg:w-[30%] bg-[#01796F] rounded-lg'>
                <img className='rounded-lg' src={cravingsImg} alt="food-app" />
                <div className='flex gap-3 p-2 items-center justify-center'>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-200'>Source code</button>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-200'>Live Project</button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default ReactProjects