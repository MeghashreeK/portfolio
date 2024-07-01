import React from 'react'

const Skills = () => {

  const skillsArray1=["ReactJS","TailwindCss","Redux","Testing","CSS","HTML","Java","C"]
  const skillsArray2=["Github","Vercel","Netlify","Render"];
  return (
    <div className='flex flex-col h-screen bg-[#010B13] mt-5 gap-6 sm:gap-5'>
      <h1 className='font-bold text-4xl'>Technical Skills</h1>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-2'>{skillsArray1.map((skills)=><p className='py-2 px-4 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>{skills}</p>)}</div>
        <div className='flex gap-2'>{skillsArray2.map((skills)=><p className='py-2 px-4  font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>{skills}</p>)}</div>
      </div>
    </div>
  )
}

export default Skills