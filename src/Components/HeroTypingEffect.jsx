import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 50% {
    opacity: 0;
  }
  51%, 100% {
    opacity: 1;
  }
`;

const HeroContainer = styled.div`
  position: relative;
`;

const HeroText = styled.h1`
  font-size: 2rem;
  color: white;
  position: relative;
  display: inline-block; /* Para que el cursor quede al final del texto */
`;

const Cursor = styled.div`
  position: absolute;
  bottom: 0.6rem; /* Ajuste fino para alinear verticalmente con el texto */
  right: -0.2rem;
  width: 0.2rem;
  height: 1.2rem;
  background-color: white;
  animation: ${blink} 0.6s infinite;
`;

const HeroTypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const typingSpeed = 100; // Velocidad de escritura en milisegundos

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [index, text]);

  return (
    <HeroContainer>
      <HeroText>
        {displayText}
        <Cursor />
      </HeroText>
    </HeroContainer>
  );
};

export default HeroTypingEffect;
