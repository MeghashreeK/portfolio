import React from 'react'
import { ARROW_URL } from '../utils/constants'

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-5 text-center">
            <h1 className='text-4xl font-bold'>About me</h1>
            <p className='w-1/2'>
                With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text.
                But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.
            </p>
            <button className='flex gap-1 bg-white p-2 px-3 rounded-[50px] transition duration-300 hover:bg-opacity-50'>
                <p className='text-black font-bold'>My Projects</p>
                <img width="24" height="24" src={ARROW_URL} alt="long-arrow-right" />
            </button>
        </div>
    )
}

export default AboutMe

