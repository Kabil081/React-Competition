import React from 'react';
import logo from "../assets/assert/Main_page/logo.png";
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = ['MAIN', 'GALLERY', 'PROJECTS', 'CERTIFICATIONS', 'CONTACT'];

  return (
    <nav className='flex items-center justify-between space-x-8 py-11 pl-16 w-[75%]'>
      <motion.img src={logo} className='h-20' variants={listVariants} initial="hidden" animate="visible" transition={{ duration: 1 }} />
      <ul className='flex flex-row space-x-11'>
        {menuItems.map((item) => (
          <motion.li
            key={item} // Use the item name as the key
            className={`w-20 border-b-2 border-t-2 ${location.pathname === `/${item.toLowerCase()}` ? 'border-gray-800' : 'border-transparent'} items-center`}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <span
              className={`tracking-wide py-1 px-4 ${location.pathname === `/${item.toLowerCase()}` ? 'text-gray-800' : 'text-gray-500'} cursor-pointer`}
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
