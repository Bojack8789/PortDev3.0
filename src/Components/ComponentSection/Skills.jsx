import React from 'react';
import './Skills.css'; // Asegúrate de tener un archivo CSS para definir el borde rojo
import CardTransparent from '../CardTransparent';


const Skills = () => {
  return (
    <div className="skills-container">
      
      <div className="skill left">
        <div className="skill-title">
        </div>
        <div className="skill-content-left">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="icon">
              <img className="img"src={`../../../public/iconSkill/icono_${index + 1}.svg`} alt={`Icono ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="skill right">
        <div className="skill-title">
          
        </div>
        <div className="skill-content-right">
        
        </div>
      </div>
    </div>

  );
}

export default Skills;
