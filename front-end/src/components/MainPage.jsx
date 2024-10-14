import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar';
import Footer from './Footer';
import main from "../assets/assert/Main_page/main.png"
import about_1 from "../assets/assert/Main_page/about_1.png"
import about_2 from "../assets/assert/Main_page/about_2.png"
import about_3 from "../assets/assert/Main_page/about_3.png"
import project_1 from "../assets/assert/Main_page/project_4.png"
import project_2 from "../assets/assert/Main_page/project_1.png"
import project_3 from "../assets/assert/Main_page/project_2.png"
import project_4 from "../assets/assert/Main_page/project_3.png"
import project_5 from "../assets/assert/Main_page/project_5.png"
import contact from "../assets/assert/Main_page/contact_us.jpeg"
import { FaArrowRight } from 'react-icons/fa';
const MainPage = () => {
  const listVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  return (
    <>
    <NavBar/>
    <motion.div
      initial="hidden"
      animate="visible" 
      variants={listVariants} 
      className='flex flex-row pr-16 w-[90%]'
    >
    <div className='flex flex-col w-[75%] py-11 pl-16 items-center justify-center'>
        <h1 className='text-gray-500 font-semibold text-8xl tracking-wide'>
          Project
        </h1>
        <h1 className='text-black font-semibold text-8xl tracking-wide'>
          Lorum
        </h1>
    </div>
    <img src={main} className='h-[900px] w-[700px] object-contain rounded-lg'/>
    </motion.div>
    <div className='w-[85%] flex flex-row py-11 ml-11 bg-gray-100'>
      <div className='flex flex-row ml-24'>
        <div className='flex flex-col mr-11 pb-11'>
          <img src={about_1} className='pb-11 rounded-lg'/>
          <img src={about_3} className='rounded-lg shadow-lg'/>
        </div>
        <img src={about_2} className='rounded-lg pt-11 pb-20 mb-16'/>
      </div>
      <div className='flex flex-col max-w-[500px]'>
      <h1 className='text-5xl text-gray-400 font-semibold ml-56'>
        About
      </h1>
      <span className='text-black font-semibold flex flex-col mt-14 ml-20'>
      Lorem Ipsum is a commonly used placeholder text in the design, publishing, and typesetting industries, originating from a work by Cicero written in the 1st century BC. It serves as a filler text to help designers visualize layouts without relying on meaningful content, allowing them to focus on visual elements instead. Unlike simple phrases, Lorem Ipsum has a more natural letter distribution, making it resemble readable English, which aids in maintaining design focus. Variations of Lorem Ipsum can be generated through online tools, and its widespread use has made it a standard term in the industry.
      </span>
      <h3 className='ml-52  mt-16 flex flex-row items-center tracking-wider font-semibold text-gray-400 px-4'>READ MORE  <FaArrowRight/></h3>
      </div>
    </div>
    <h1 className='text-gray-300 font-semibold text-6xl ml-11 my-11 mt-11 mb-16'>Main Focus/Mission Statement</h1>
    <div className='W-[85%] ml-11 mt-11 mb-11 mr-16 flex flex-row'>
      <div className='flex flex-row bg-gray-100 items-center max-w-[600px] p-11 mr-16'>
        <h1 className='text-gray-300 text-9xl mr-11'>1</h1>
        <span className='max-w-[400px] text-gray-600 text-xl'>Lorem Ipsum is a commonly used placeholder text in the design, publishing, and typesetting industries, originating from a work by Cicero written in the 1st century BC.</span>
      </div>
      <div className='flex flex-row bg-gray-100 items-center max-w-[600px] p-11'>
        <h1 className='text-gray-300 text-9xl mr-11'>2</h1>
        <span className='max-w-[400px] text-gray-600 text-xl'>Lorem Ipsum is a commonly used placeholder text in the design, publishing, and typesetting industries, originating from a work by Cicero written in the 1st century BC.</span>
      </div>
    </div>
    <h1 className='text-gray-300 text-7xl ml-16 mb-11'>Our Projects</h1>
    <div className='w-[85%] ml-1 py-16 px-16 pb-16'>
      <div className='flex flex-row gap-11'>
        <img src={project_1} className='w-[600px] rounded h-[300px]'/>
        <img src={project_2} className='w-[600px] rounded h-[300px]'/>
      </div>
      <div className='flex flex-row gap-14 mt-11'>
        <img src={project_3} className='w-[300px] h-[300px] rounded'/>
        <img src={project_4} className='w-[400px] h-[300px] rounded'/>
        <img src={project_5} className='w-[500px] h-[300px] rounded'/>
      </div>
    </div>
    <div className='flex justify-end w-[85%]  py-11  pb-16'>
      <button className='p-6 tracking-widest bg-black text-gray-400 text-xl flex flex-row items-center gap-3'>ALL PROJECTS <FaArrowRight/></button>
    </div>
    <div className='w-[85%] ml-16 my-16'>
  <h1 className='text-gray-300 text-6xl mb-6'>Contact Us</h1>
  <div className='flex flex-row mr-16'>
    <div className='flex flex-col'>
  <form className='flex flex-col gap-4'>
      <input type='text' className='w-[400px] p-2 border rounded bg-gray-100' placeholder='Name' />
      <input type='tel' className='w-[400px] p-2 border rounded bg-gray-100' placeholder='Phone Number*' />
      <input type='email' className='w-[400px] p-2 border rounded bg-gray-100' placeholder='E-mail*' />
      <input type='text' className='w-[400px] p-2 border rounded bg-gray-100' placeholder='Interested in' />
      <textarea className='w-[400px] p-2 border rounded bg-gray-100' placeholder='Message*' rows='4'></textarea>
  </form>
  <button className='bg-black mt-11 mb-11 p-6 text-white flex flex-row max-w-[200px] items-center gap-4 tracking-widest'>
    SEND EMAIL   <FaArrowRight/>
  </button>
  </div>
  <img src={contact} className='ml-[200px] pl-16 w-[700px] h-[400px]'/>
  </div>
</div>
    <Footer/>
    </>
  );
}
export default MainPage;
