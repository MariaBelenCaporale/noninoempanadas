import { useState, useEffect } from 'react';
import './styles.css';
import Empanadas from '../../assets/imagenes/empanadas.png';
import EmpanadaDos from '../../assets/imagenes/empanadaDos.png';
import EmpanadaTres from '../../assets/imagenes/empanadaTres.png';

const images = [Empanadas, EmpanadaDos, EmpanadaTres]; 

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="heroComponente">
      <h2 className="tituloHero">¡Vas a volver!</h2>
      <div className="carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Empanada ${index}`}
            className={index === current ? 'active' : 'inactive'}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
