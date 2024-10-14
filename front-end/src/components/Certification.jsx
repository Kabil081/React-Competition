import React from 'react';
import NavBar from './NavBar';
import Footer from "./Footer";
import { motion } from 'framer-motion';
import Contact from './Contact';
const Certification = () => {
  const listVariants = {
    hidden: { opacity: 0, y:50 },
    visible: { opacity: 1,y:0},
  };
  return (
    <div>
      <NavBar/>
      <motion.div className='w-[75%] py-11 pl-16 px-60 text-gray-700 h-96' variants={listVariants} initial="hidden" animate="visible" transition={{duration:1}}>
        <h1 className='font-bold text-gray-400 text-6xl py-4'>COMPANY</h1>
        <h1 className='font-bold text-6xl font-mono text-black'>CERTIFICATIONS</h1>
      </motion.div>
      <Footer/>
    </div>
  );
};
export default Certification;
