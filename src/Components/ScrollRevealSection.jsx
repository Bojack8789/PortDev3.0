import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  opacity: 0;
  transition: opacity 0.5s ease;

  &.visible {
    opacity: 1;
  }
`;

const ScrollRevealSection = ({ children }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollY + windowHeight >= sectionTop + sectionHeight / 2) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para verificar la visibilidad al cargar la página

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section className='Section' ref={sectionRef}>
      {children}
    </Section>
  );
};

export default ScrollRevealSection;
