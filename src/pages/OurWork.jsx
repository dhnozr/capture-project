import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import { motion, useAnimation, useInView } from 'framer-motion';

import {
  fade,
  photoAnim,
  pageAnimation,
  lineAnim,
  slider,
  sliderContainer,
  ourWorkAnim,
  delayedFade,
  sliderOurWork,
  titleAnimation,
  faqScroll,
} from '../components/animation';

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  @media (max-width: 1300px) {
    padding: 2rem;
    min-height: 100lvh;
  }

  h2 {
    padding: 1rem 0;
  }

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Movie = styled(motion.div)``;

const Hide = styled.div`
  overflow: hidden;
`;

const FrameOne = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
`;

const FrameTwo = styled(FrameOne)`
  background: #ff8efb;
`;

const FrameThree = styled(FrameOne)`
  background: #8ed2ff;
`;

const FrameFour = styled(FrameOne)`
  background: #8effa0;
`;

export const OurWork = () => {
  const calculateMargin = () => {
    const viewportWidth = window.innerWidth;

    // Set different margin values based on the viewport width
    if (viewportWidth < 600) {
      return '-10px';
    } else if (viewportWidth < 1024) {
      return '-150px';
    } else {
      return '-200px';
    }
  };

  /* const margin1 = calculateMargin();
  const margin2 = calculateMargin();
  const margin3 = calculateMargin(); */
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const movie1Control = useAnimation();
  const movie2Control = useAnimation();
  const movie3Control = useAnimation();

  useEffect(() => {
    if (isInView1) {
      movie1Control.start('show');
    } else {
      movie1Control.start('hidden');
    }

    if (isInView2) {
      movie2Control.start('show');
    } else {
      movie2Control.start('hidden');
    }

    if (isInView3) {
      movie3Control.start('show');
    } else {
      movie3Control.start('hidden');
    }
  }, [isInView1, isInView2, isInView3]);
  return (
    <Work style={{ backgroundColor: 'white' }} variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <motion.div variants={sliderContainer}>
        <FrameOne variants={slider}></FrameOne>
        <FrameTwo variants={slider}></FrameTwo>
        <FrameThree variants={slider}></FrameThree>
        <FrameFour variants={slider}></FrameFour>
      </motion.div>

      <Movie ref={ref1} variants={faqScroll} initial='hidden' animate={movie1Control}>
        <motion.h2 variants={delayedFade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to={`the-athlete`}>
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt='athlete' />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={ref2} variants={faqScroll} initial='hidden' animate={movie2Control}>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to={`the-racer`}>
          <Hide>
            <img src={theracer} alt='theracer' />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={ref3} variants={faqScroll} initial='hidden' animate={movie3Control}>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <Link to={`good-times`}>
          <Hide>
            <img src={goodtimes} alt='goodtimes' />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};
