import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BurguerButton from './BurguerButton.jsx';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavContainer scrolled={scrolled}>
      <h2>FRANCO FERRARO DEV</h2>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a onClick={handleClick} href="#h">Home</a>
        <a onClick={handleClick} href="#h">Shop</a>
        <a onClick={handleClick} href="#h">About</a>
        <a onClick={handleClick} href="#h">Contact</a>
        <a onClick={handleClick} href="#h">Blog</a>
      </div>
      <BurguerButtonContainer>
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </BurguerButtonContainer>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 10vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 2% 6% 2% 2%;
  background-color: ${props => (props.scrolled ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0)' )};//este es un areglo pero de hecho deberia ir otro color ahora solo se ve transparente 
  display: flex;
  align-items: center;
  justify-content: space-around; 
  transition: background-color 0.3s ease;

  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }

  .links {
    background-color: transparent;
    position: absolute;
    top: -550%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    z-index: 10;

    a {
      color: white;
      margin-right: 1rem;
      font-size: 2rem;
      display: block;
      position: relative;
    } 
    a::before {
      content: '';
      position: absolute;
      bottom: 0%;
      left: 0px;
      width: 100%;
      height: 1px;
      background: white;
      display: block;
      transform-origin: right top;
      transform: scale(0, 1);
      transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
    }
    
    a:hover::before {
      transform-origin: left top;
      transform: scale(1, 1);
    }

    @media(min-width: 768px) {
      position: initial;
      margin: 0;

      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }

      display: block;
    }
  }

  .links.active {
    width: 100%;
    height: 100vh;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
    background-color: gray;

    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .burguer {
    @media(min-width: 768px) {
      display: none;
      position: absolute;
      z-index: 100;
    }
  }
`;

const BurguerButtonContainer = styled.div`
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default Navbar;
