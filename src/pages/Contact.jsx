import React from 'react'
import { LinkedIn, email, Instagram } from '../assets'

const Contact = () => {
  return (
    
    <section className='max-w-[100vw] h-[100vh] bg-[#161616]'>

      <div className="info lg:flex flex-row-reverse absolute top-[15%] lg:top-[31%] m-8 md:m-20 lg:ml-[21%]">
        
      <div className='m-auto lg:pr-20 lg:w-[40vw]'>
          <div className="w-fit">
            <h1 className="lg:text-6xl font-Montserrat typed text-3xl text-red-500 font-bold">Contact me </h1>
          </div>
          <div className="w-full">
            <div className="flex lg:ml-12 lg:mt-10">
                <img src={email} alt="Email" className='w-8 ' />
                <h2 className="text-white font-Montserrat lg:pl-4">anantsingh4444@gmail.com</h2>
            </div>
            <div className="flex lg:ml-12 lg:mt-10">
                <img src={LinkedIn} alt="LinkedIn" className='w-8 ' />
                <h2 className="text-white font-Montserrat lg:pl-4"><a href="https://www.linkedin.com/in/anantsingh1510/" target='blank'>anantsingh1510/</a></h2>
            </div>
            <div className="flex lg:ml-12 lg:mt-10">
                <img src={Instagram} alt="Instagram" className='w-8 ' />
                <h2 className="text-white font-Montserrat lg:pl-4"><a href="https://www.instagram.com/_anant.singh_/" target='blank'>_anant.singh_</a></h2>
            </div>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Contact