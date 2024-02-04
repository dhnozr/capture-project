import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  z-index: 10;
  top: 0;

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0;
      }
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 1.8rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;

    position: relative;
  }
`;

export const Navbar = () => {
  return (
    <StyledNav>
      <h1>
        <Link to={`/`} id='logo'>
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to={`/`}>About Us</Link>
        </li>
        <li>
          <Link to={`work`}>OurWork</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
