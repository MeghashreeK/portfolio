import React, { useRef, useState } from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import ReactProjects from './ReactProjects'
import JavaScriptProjects from './JavaScriptProjects'
import ContactMe from './ContactMe'

const Header = () => {
  const aboutMe = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contactMe = useRef(null);

  const headerArray = [
    { text: "About me", ref: aboutMe },
    { text: "Projects", ref: projects },
    { text: "Contact me", ref: contactMe }
  ];
  const [borderState, setBorderState] = useState([false, false, false]);

  const handleScrollEvent = (index) => {
    const updatedBorderState = [false, false, false];
    updatedBorderState[index] = true;
    setBorderState(updatedBorderState);

    const refValue = headerArray[index].ref;
    if (refValue.current) {
      const offsetTop = refValue.current.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }

  return (
    <div className='text-white bg-[#222024] py-2 px-4 font-Merriweather w-full'>
      <div className=' flex justify-center'>
        <div className="flex font-bold justify-between sm:justify-evenly w-[90%] sm:w-[95%] fixed bg-[#BF40BF] rounded-lg p-2 text-[14px] sm:text-[16px]" >
          {headerArray.map((headerValue, index) =>
            <div key={index} className='flex'>
              <p className={`cursor-pointer ${borderState[index] ? "border-b-2 border-[#FFD700] text-[#FFD700]" : ""}`} onClick={() => handleScrollEvent(index)}>
                {headerValue.text}
              </p>
            </div>
          )}
        </div>
      </div>
      <div ref={aboutMe}><AboutMe /></div>
      <div ref={projects} className='flex flex-col mb-5'>
        <ReactProjects />
      </div>
      <JavaScriptProjects />
      <div ref={contactMe}><ContactMe /></div>
    </div>
  )
}

export default Header

// bg-[#010B13]
//bg-[#1E293B] header