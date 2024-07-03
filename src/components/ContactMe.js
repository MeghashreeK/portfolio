import React from 'react'
import { Link } from 'react-router-dom'

const ContactMe = () => {
  return (
    <div className='flex flex-col h-screen bg-[#010B13] mt-5 gap-5'>
        <h1 className='font-bold text-3xl sm:text-4xl font-Merriweather'>Contact me</h1>

        <div className='flex w-full justify-center items-center h-full text-[14px] sm:text-[16px] font-Montserrat'>
    <div className='flex flex-col gap-4 bg-[#1E293B] rounded-lg w-full sm:w-1/2 text-white p-6 shadow-lg'>
        <div className='flex items-center gap-2 rounded-lg p-3'>
            <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/>
            <Link to="https://github.com/MeghashreeK" className='text-yellow-400 hover:underline break-all'>https://github.com/MeghashreeK</Link>
        </div>

        <div className='flex items-center gap-2 rounded-lg p-3'>
            <img width="24" height="24" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail"/>
            <p className='text-yellow-400 break-all'>kundermeghashree279@gmail.com</p>
        </div>

        <div className='flex items-center gap-2 rounded-lg p-3'>
            <img width="24" height="24" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/" className='text-yellow-400 hover:underline break-all'>https://www.linkedin.com/in/meghashree-kunder-017166288/</Link>
        </div>
    </div>
</div>

    </div>
  )
}

export default ContactMe
