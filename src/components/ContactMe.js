import React from 'react'

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
    return (
        <div className='flex flex-col h-screen bg-[#010B13] mt-5 gap-5'>
            <h1 className='font-bold text-3xl sm:text-4xl font-Merriweather'>Contact me</h1>

            <div className='flex w-full justify-center items-center h-full text-[14px] sm:text-[16px] font-Montserrat'>
                <form onSubmit={onSubmit} className='flex bg-opacity-50 flex-col gap-4 bg-[#1E293B] rounded-lg w-full sm:w-1/2 text-white p-6 shadow-lg'>
                        <label>Your Name</label>
                        <input name="name" className='text-black border border-white rounded-sm focus:outline-none p-1' placeholder='Enter your name' />
                        <label>Your Email id</label>
                        <input name="email" className='text-black border border-white rounded-sm focus:outline-none p-1' placeholder='Enter your email id' />
                        <label>Your Message</label>
                        <textarea name="message" className='text-black border border-white rounded-sm h-48 focus:outline-none p-1' placeholder='Enter your message'></textarea>
                        <div className='flex justify-end'>
                        <button type='submit' className='text-[14px] sm:text-[16px] p-1 px-2 rounded-[50px] bg-yellow-400 text-black transition duration-300 hover:bg-yellow-300 focus:outline-none'>Send</button>
                        </div>
                </form>
            </div>

        </div>
    )
}

export default ContactMe
