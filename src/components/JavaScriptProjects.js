import React from 'react'
import todoList from "../images/todoListPortfolio.png";
import quiz from "../images/quizPortfolio.png";
import socialMedia from "../images/socialMediaPortfolio.png";
import ticTacToe from "../images/tic-tac-toePortfolio.png";
import weatherApp from "../images/weatherAppPortfolio.png";

const JavaScriptProjects = () => {
  return (
    <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-xl sm:text-4xl'>ReactJS Projects</h1>
            <div className='flex gap-5 flex-wrap'>

            <div className='w-full lg:w-[30%] bg-[#01796F] rounded-lg'>
                <img className='rounded-lg' src={todoList} alt="food-app" />
                <div className='flex gap-3 p-2 items-center justify-center'>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>Source code</button>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>Live Project</button>
                </div>
            </div>

            <div className='w-full lg:w-[30%] bg-[#01796F] rounded-lg'>
                <img className='rounded-lg' src={quiz} alt="food-app" />
                <div className='flex gap-3 p-2 items-center justify-center'>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>Source code</button>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>Live Project</button>
                </div>
            </div>

            <div className='w-full lg:w-[30%] bg-[#01796F] rounded-lg'>
                <img className='rounded-lg' src={socialMedia} alt="food-app" />
                <div className='flex gap-3 p-2 items-center justify-center'>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>Source code</button>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>Live Project</button>
                </div>
            </div>

            <div className='w-full lg:w-[30%] bg-[#01796F] rounded-lg'>
                <img className='rounded-lg' src={ticTacToe} alt="food-app" />
                <div className='flex gap-3 p-2 items-center justify-center'>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>Source code</button>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>Live Project</button>
                </div>
            </div>

            <div className='w-full lg:w-[30%] bg-[#01796F] rounded-lg'>
                <img className='rounded-lg' src={weatherApp} alt="food-app" />
                <div className='flex gap-3 p-2 items-center justify-center'>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>Source code</button>
                <button className='text-[14px] p-1 px-2 font-bold rounded-[50px] bg-yellow-300 text-black transition duration-300 hover:bg-yellow-200'>Live Project</button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default JavaScriptProjects;