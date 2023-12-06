import React from 'react';
import "./Typer.css";

const About = () => {
  return (
    
    <section className='max-w-[100vw] h-full bg-[#161616]'>

      <div className="info lg:flex flex-row-reverse block pt-20 p-10">
        
        <div className='m-auto lg:w-[60vw] pt-[4%] '>
          <div className="w-fit">
            <h1 className="lg:text-6xl font-Montserrat typed text-3xl text-red-500 font-bold">About me </h1>
          </div>
          <div>
            <p className="text-white font-Montserrat lg:text-lg pt-8 lg:w-[45vw]">
              Hello there! I'm Anant, a passionate Full Stack React Developer with a love for turning ideas into functional, user-friendly applications. My journey into the world of web development began with a curiosity about crafting digital experiences, and since then, I've been on an exciting and continuous learning adventure. <br /> <br />

              As a Full Stack Developer, I thrive on the challenges of both front-end and back-end development. My proficiency lies in harnessing the power of React for building dynamic and responsive user interfaces. Whether it's creating sleek, interactive designs or implementing robust server-side logic, I'm committed to delivering seamless and engaging web solutions. <br /> <br />

              My toolbox includes a range of technologies and tools, from React and Redux on the front end to Node.js and Express on the back end. I'm no stranger to databases, having worked with MongoDB, MySQL, and other data storage solutions. Versatility is my forte, and I'm always eager to explore new technologies to stay at the forefront of the rapidly evolving tech landscape. <br /><br />

              What sets me apart is not just my technical prowess, but also my commitment to understanding the unique needs of each project. I approach every task with a blend of creativity and problem-solving, striving to exceed expectations and deliver a polished end product.  <br /><br />

              When I'm not immersed in lines of code, you can find me exploring the latest developments in the tech world, contributing to open-source projects, or enjoying a cup of coffee while brainstorming my next innovative idea. <br /><br />

              Let's collaborate and build something amazing together! Whether you have a specific project in mind or just want to discuss the latest trends in web development, feel free to reach out. I'm always excited to connect with fellow developers, designers, and enthusiasts who share a passion for creating impactful digital experiences. <br /> <br />
            </p>
          </div>
        </div>


      </div>

    </section>
  )
}

export default About