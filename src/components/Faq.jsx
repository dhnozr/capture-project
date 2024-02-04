import React, { useEffect, useRef } from 'react';
// import styled components
import styled from 'styled-components';
import { About } from './styles';
import { Toggle } from './Toggle';
import { LayoutGroup } from 'framer-motion';
import { useAnimation, useInView } from 'framer-motion';
import { faqScroll } from './animation';

const FaqContainer = styled(About)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
export const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [isInView]);
  return (
    <FaqContainer ref={ref} className='faq' variants={faqScroll} initial='hidden' animate={controls}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title='How Do I Start?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nemo natus et minima. Nobis atque minus
              temporibus, blanditiis voluptas sapiente.
            </p>
          </div>
        </Toggle>

        {/*  */}
        <Toggle title='Daily Schedule'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nemo natus et minima. Nobis atque minus
              temporibus, blanditiis voluptas sapiente.
            </p>
          </div>
        </Toggle>

        {/*  */}
        <Toggle title='Different Payment Methods'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nemo natus et minima. Nobis atque minus
              temporibus, blanditiis voluptas sapiente.
            </p>
          </div>
        </Toggle>

        {/*  */}
        <Toggle title='What Products Do You Offer'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nemo natus et minima. Nobis atque minus
              temporibus, blanditiis voluptas sapiente.
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
    </FaqContainer>
  );
};
