import React from 'react';
import NavBar from './NavBar';
import { motion } from 'framer-motion'; 
import Footer from './Footer';
import image1 from "../assets/assert/projects_page/project_1.jpg"
import image2 from "../assets/assert/projects_page/project_2.png"
import image3 from "../assets/assert/projects_page/project_3.jpg"
import { FaArrowRight } from 'react-icons/fa';
const Projects = () => {
  const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <NavBar />
      <motion.div 
        className='flex flex-col w-[75%] py-11 bg-gray pl-16 rounded-lg shadow-lg ml-11' 
        variants={listVariants} 
        initial="hidden" 
        animate="visible" 
        transition={{ duration: 1 }}
      >
        <div>
          <h1 className='text-gray-500 font-semibold text-6xl tracking-wide'>
            Our
          </h1>
          <h1 className='text-black font-semibold text-6xl tracking-wide'>
            Projects
          </h1>
        </div>
      </motion.div>
      <motion.div 
        variants={listVariants} 
        initial="hidden" 
        animate="visible" 
        transition={{ duration: 1 }} 
        className='flex flex-col w-[90%] py-11 pl-16 gap-12'
      >
        {[image1, image2, image3].map((image, index) => (
          <div key={index} className='flex flex-row bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105'>
            <img src={image} className='h-[500px] w-[700px] object-cover' alt={`Project ${index + 1}`} />
            <div className='flex flex-col py-11 pl-11'>
              <h1 className='text-gray-400 text-5xl mb-4'>SAMPLE PROJECT {index + 1}</h1>
              <p>Lorem Ipsum is a placeholder text commonly used in the graphic, print, and publishing industries...</p>
              <h3 className='mt-16 flex flex-row items-center ml-11 tracking-wider'>
                <span className='text-blue-500 cursor-pointer hover:underline'>VIEW MORE</span> <FaArrowRight />
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
      <Footer />
    </>
  );
};

export default Projects;
