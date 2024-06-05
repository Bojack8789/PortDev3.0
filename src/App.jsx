import React from 'react';
import Navbar from './Components/Navbar';
import VideoBackground from './Components/VideoBackground';
import HeroTypingEffect from './Components/HeroTypingEffect';
import ScrollRevealSection from './Components/ScrollRevealSection';

import CardTransparent from './Components/CardTransparent';
import Skills from './Components/ComponentSection/Skills';

import AboutMe from './Components/ComponentSection/AboutMe';

import './App.css';

function App() {
  return (
    <>
      <div className='Body'>
        <div className="VideoBackgroundContainer">
          <VideoBackground />
        </div>
        <div className='Header'>
        <Navbar />
        </div>
        <ScrollRevealSection>
          <HeroTypingEffect text="Hi! I am Human." />
        </ScrollRevealSection>
        <ScrollRevealSection>
        <AboutMe imageSrc={'/public/AstronautaAvatar.png'} />
        </ScrollRevealSection>
      
        <ScrollRevealSection> 
        <Skills/>
        </ScrollRevealSection>
        <ScrollRevealSection>
        <CardTransparent>
          <h2>Sección 4</h2>
          <p>Contenido de la tercera sección...</p>
          </CardTransparent>
        </ScrollRevealSection>
        <ScrollRevealSection>
          <h2>Sección 5</h2>
          <p>Contenido de la quinta sección...</p>
        </ScrollRevealSection>

        <footer className='Footer'>

        </footer>
      </div>
    </>
  );
}

export default App;