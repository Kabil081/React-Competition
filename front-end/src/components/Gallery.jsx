import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { motion } from 'framer-motion'
import image1 from "../assets/assert/gallery_page/1.png"
import image2 from "../assets/assert/gallery_page/2.png"
import image3 from "../assets/assert/gallery_page/3.png"
import image4 from "../assets/assert/gallery_page/4.png"
import image5 from "../assets/assert/gallery_page/5.png"
import image6 from "../assets/assert/gallery_page/6.png"
import image7 from "../assets/assert/gallery_page/7.png"
import image8 from "../assets/assert/gallery_page/8.png"
import image9 from "../assets/assert/gallery_page/9.png"
import image10 from "../assets/assert/gallery_page/10.png"
const Gallery = () => {
  const array=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10];
  const listVariants = {
    hidden: { opacity: 0, y:50 },
    visible: { opacity: 1,y:0},
  };
  return (
    <>
    <NavBar/>
    <motion.div className='flex flex-col w-[75%] py-11 pl-16 '>
      <div>
        <h1 className='text-gray-500 font-semibold text-6xl tracking-wide'>
          Photo
        </h1>
        <h1 className='text-black font-semibold text-6xl tracking-wide'>
          Gallery
        </h1>
      </div>
    </motion.div>
      <motion.div className='flex flex-wrap gap-10 w-[100%] py-11 pl-16 mb-52'>
        {array.map((items,index)=>(
          <motion.img src={items} key={index} className='max-w-[300px] max-h-[300px] gap-10 rounded-lg cursor-pointer' variants={listVariants} initial="hidden" animate="visible" transition={{duration:index*0.5}} />
        ))}
    </motion.div>
    <Footer/>
    </>
  )
}

export default Gallery