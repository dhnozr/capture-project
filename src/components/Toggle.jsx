import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <motion.div className='question' layout onClick={() => setToggle(!toggle)}>
        <motion.h4 layout>{title}</motion.h4>
        {toggle && children}
        <div className='faq-line'></div>
      </motion.div>
    </>
  );
};
