import React from 'react'
import { ARROW_URL } from '../utils/constants'

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-5 text-center">
            <h1 className='text-4xl font-bold'>About me</h1>
            <p className='w-1/2 text-[14px] sm:text-[16px]'>
                With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text.
                But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.
            </p>
        </div>
    )
}

export default AboutMe

