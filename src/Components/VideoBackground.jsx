// VideoBackground.jsx
import React, { useEffect, useRef } from 'react';

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      const rotateX = ((clientY / innerHeight) - 0.5) * 20; // Ajusta el factor para más o menos inclinación
      const rotateY = ((clientX / innerWidth) - 0.5) * 20;  // Ajusta el factor para más o menos inclinación

      if (videoRef.current) {
        videoRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Cambia este valor para ajustar la velocidad de reproducción
    }
  }, []);

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      zIndex: -1,
      perspective: '800px', // Añadir perspectiva para el efecto 3D
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    }}>
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        style={{ 
          width: '150%',  
          height: '150%',
          objectFit: 'cover',
          objectPosition: '70% center',
          transform: 'rotateX(0) rotateY(0)', // Inicialmente sin rotación
          transition: 'transform 0.1s ease-out' // Suavizar la transición
        }}
      >
        <source src="/public/1118680-map-horizon-astronomy-3840x2160_WmyW4dLG.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default VideoBackground;
