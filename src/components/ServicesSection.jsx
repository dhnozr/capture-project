import React, { useEffect, useRef } from 'react';
// import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
// styled components
import styled from 'styled-components';
import { About, Description, Hide, Image } from './styles';

import { fade } from './animation';
import { useAnimation, useInView } from 'framer-motion';

const Services = styled(About)`
  overflow-y: hidden;
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 17rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    console.log(ref.current);
    if (isInView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [isInView]);

  return (
    <Services className='services' ref={ref} variants={fade} initial='hidden' animate={controls}>
      <Description className='description'>
        <h2>
          High <span>quality</span> services
        </h2>
        {/* all cards */}
        <Cards className='cards'>
          {/* card it self */}
          <Card className='card'>
            <div className='icon'>
              <img src={clock} alt='clock icon' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          {/* card it self */}
          <Card className='card'>
            <div className='icon'>
              <img src={teamwork} alt='teamwork icon' />
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          {/* card it self */}
          <Card className='card'>
            <div className='icon'>
              <img src={diaphragm} alt='diaphragm icon' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          {/* card it self */}
          <Card className='card'>
            <div className='icon'>
              <img src={money} alt='money icon' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image className='image'>
        <img src={home2} alt='camera' />
      </Image>
    </Services>
  );
};
