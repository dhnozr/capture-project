import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { Faq } from '../components/Faq';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';

export const AboutUs = () => {
  return (
    // section motion div can animate its childrens like stagger vs
    <motion.div style={{ overflow: 'hidden' }} variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <AboutSection />
      <ServicesSection />
      <Faq />
    </motion.div>
  );
};
