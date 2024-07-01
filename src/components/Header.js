import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import ReactProjects from './ReactProjects'
import JavaScriptProjects from './JavaScriptProjects'


const Header = () => {
  return (
    <div className='text-white bg-[#010B13] p-4'>
      <div className='flex justify-between'>
        <p>About me</p>
        <p>ReactJS Projects</p>
        <p>JavaScript Projects</p>
        <p>Skills</p>
        <p>Contact me</p>
      </div>
      <AboutMe/>
      <div className='flex flex-col gap-8'>
      <ReactProjects/>
      <JavaScriptProjects/>
      </div>
      <Skills/>
    </div>
  )
}

export default Header