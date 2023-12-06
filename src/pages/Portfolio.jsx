import React from 'react';
import "./Typer.css";

const Portfolio = () => {
  return (
    
    <section className='max-w-[100vw] h-[100vh] bg-[#161616]'>

      <div className="info lg:flex flex-row-reverse absolute top-[15%] lg:top-[31%] m-8 md:m-20 lg:ml-[21%]">
        
      <div className='m-auto lg:pr-20 lg:w-[40vw]'>
          <div className="w-fit">
            <h1 className="lg:text-6xl font-Montserrat typed text-3xl text-red-500 font-bold">My Portfolio</h1>
          </div>
          <div>
            <p className="text-white font-Montserrat lg:text-lg pt-8">
            I am Anant Singh, a dedicated Full Stack Web Developer 
            currently pursuing my Bachelor's degree at Jaypee University 
            of Information Technology. Proficient in both front-end and back-end 
            development,I bring ideas to life with seamless and innovative web
            experiences.
            </p>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Portfolio