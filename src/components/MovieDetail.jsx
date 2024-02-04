import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieState } from './MovieState';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';

const Movie = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h1 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 100vh;
    object-fit: contain;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
  }
`;

export const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  console.log(movie);

  useEffect(() => {
    const currentMovie = movies.filter(movie => movie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <Movie variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
          <HeadLine>
            <h1>{movie.title}</h1>
            <img src={movie.mainImg} alt='' />
          </HeadLine>
          <Awards>
            {movie.awards.map(award => (
              <Award key={award.title} title={award.title} description={award.description} />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt='movie' />
          </ImageDisplay>
        </Movie>
      )}
    </>
  );
};

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
