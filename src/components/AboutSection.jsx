import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// styled components
import { About, Description, Hide, Image } from './styles';
import { titleAnimation, fade, photoAnim } from './animation.js';
import { Wawe } from './Wawe.jsx';

export const AboutSection = () => {
  return (
    <About>
      <Description className='description'>
        <motion.div className='title'>
          <Hide className='hide'>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>

          <Hide className='hide'>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>

          <Hide className='hide'>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image className='image'>
        <motion.img variants={photoAnim} initial='hidden' animate='show' src={home1} alt='guy with a camera' />
      </Image>
      <Wawe />
    </About>
  );
};
