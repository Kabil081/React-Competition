import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import NavBar from './NavBar';
import map from "../assets/assert/Main_page/map.png";
const Contact = () => {
  const listVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <NavBar />
      <div className="flex flex-row">
        <div className="h-[600px] flex py-11 pl-16 w-[75%] flex-col">
          <motion.div variants={listVariants} initial="hidden" animate="visible" transition={{ duration: 1 }}>
            <h1 className='font-bold text-gray-400 text-6xl py-4'>
              Contact
            </h1>
            <h1 className='font-bold text-6xl text-black'>
              Information
            </h1>
          </motion.div>
          <motion.div className='font-bold py-8 text-black' variants={listVariants} initial="hidden" animate="visible" transition={{ duration: 1 }}>
            <h3>Intellexa</h3>
            <h3>Rajalakshmi Engineering College</h3>
          </motion.div>
          <h4 className='mt-8 text-gray-500 mb-11'>
            Intellexa@gmail.com
          </h4>
          <button className='bg-black text-gray-50 hover:bg-gray-400 w-[250px] pt-5 pl-12 pr-12 pb-5'>
            CONTACT US
          </button>
        </div>
        <img src={map} alt="Map" className="h-full w-[80%] object-cover mx-11" />
      </div>
      <Footer/>
    </>
  );
};
export default Contact;
