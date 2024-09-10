import React from 'react'
import { GITHUB_URL, LINKEDIN_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
const ContactMe = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "106b4dcb-7603-4249-a5fd-e586292e5b55");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  const onButtonClick = () => {
    fetch("Meghashree Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Meghashree Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className='flex flex-col h-screen mt-5'>

      <div className='flex flex-wrap w-full sm:gap-10 justify-center items-center h-full text-[14px] sm:text-[16px] font-Montserrat'>
        <div className='flex flex-col gap-5 sm:h-1/2'>
          <p className='text-4xl font-extrabold'>Contact Me</p>
          <div className='flex items-center gap-1 mt-5'>
            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFD700/phone-disconnected.png" alt="phone-disconnected" />
            <p className='font-bold'>+91 7411288093</p>
          </div>
          <div className='flex gap-1'>
            <Link to={LINKEDIN_URL}>
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFD700/linkedin.png" alt="linkedin" />
            </Link>
            <Link to={GITHUB_URL}>
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFD700/github.png" alt="github" />
            </Link>
          </div>
          <button onClick={onButtonClick} className='font-bold text-[14px] sm:text-[16px] p-3 rounded-[50px] bg-[#FFD700] text-black transition duration-300 hover:bg-[#FFC107] focus:outline-none'>Download Resume</button>
        </div>
        <form onSubmit={onSubmit} className='flex bg-opacity-50 flex-col gap-4 w-full sm:w-2/5'>
          <input name="name" className='text-white bg-slate-400 bg-opacity-40 rounded-sm focus:outline-none p-3' placeholder='Enter your name' />
          <input name="email" className='text-black bg-slate-400 bg-opacity-40 rounded-sm focus:outline-none p-3' placeholder='Enter your email id' />
          <textarea name="message" className='text-black bg-slate-400 bg-opacity-40 rounded-sm h-48 focus:outline-none p-3' placeholder='Enter your message'></textarea>
          <div className='flex justify-end'>
            <button type='submit' className='font-bold text-[14px] sm:text-[16px] px-3 py-2 rounded-[50px] bg-[#FFD700] text-black transition duration-300 hover:bg-[#FFC107] focus:outline-none'>Send</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default ContactMe
