import { useState, useEffect, useRef } from 'react';
import './styles.css';
import CardEmpanadas from '../../CardEmpanadas/CardEmpandas';


import CarneMendocina from '../../../assets/imagenes/empanadaDos.png';
import Verdura from '../../../assets/imagenes/empanadas.png';
import CuatroQuesos from '../../../assets/imagenes/empanadaDos.png';
import CiervoAhumado from '../../../assets/imagenes/empanadaTres.png';


const empanadasData = {
    tradicionales: [
        { imagen: CarneMendocina, nombre: 'Carne Mendocina', descripcion: 'Carne molida, cebolla, aceituna y huevo' },
        { imagen: Verdura, nombre: 'Carne Salteña', descripcion: 'Carne cortada a cuchillo, papa y verdeo' },
        { imagen: CuatroQuesos, nombre: 'Carne Tucumana', descripcion: 'Carne cortada a cuchillo, picante' },
        { imagen: CiervoAhumado, nombre: 'Carne Pampeana', descripcion: 'Carne cortada a cuchillo, macerada en vino' },
        { imagen: CarneMendocina, nombre: 'Árabe', descripcion: '...' },
        { imagen: Verdura, nombre: 'Hamburguesa y cheddar', descripcion: '...' },
        { imagen: CuatroQuesos, nombre: 'Chorizo a la pomarola', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Mondongo', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Pollo', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Pollo al verdeo', descripcion: '...' },
    ],
    especiales: [
        { imagen: Verdura, nombre: 'Atún', descripcion: '...' },
        { imagen: Verdura, nombre: 'Langostinos', descripcion: 'Langostinos, crema, ajo' },
        { imagen: Verdura, nombre: 'Champignones', descripcion: 'Verdeo y salsa blanca' },
        { imagen: CiervoAhumado, nombre: 'Neuquina', descripcion: 'Carne de ciervo, verdeo y morrón' },
        { imagen: CiervoAhumado, nombre: 'Cordero', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Mejicana', descripcion: 'Bondiola de cerdo con ají picante' },
    ],
    vegetarianas: [
        { imagen: CiervoAhumado, nombre: 'Cuatro quesos', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Salteado de vegetales', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Soja', descripcion: 'Soja texturizada con cebolla, morrón, verdeo, ajo y huevo' },
        { imagen: CiervoAhumado, nombre: 'Humita', descripcion: '...' },
    ],
};

const Empanadas = () => {
    const [activeTab, setActiveTab] = useState('tradicionales');


    const tradRef = useRef(null);
    const espRef = useRef(null);
    const vegRef = useRef(null);


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.dataset.tipo); 
        }
      });
    },
    {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    }
  );

  const sections = document.querySelectorAll('.categoria-section');
  sections.forEach((sec) => observer.observe(sec));

  return () => sections.forEach((sec) => observer.unobserve(sec));
}, []);



    const scrollTo = (ref, key) => {
        setActiveTab(key);
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="empanadasContenedor" id="empanadas">
            <div className="contenedorEmpanadasTextos">
                <div className="textoEmpanadasTotal">
                    <p className="subituloEmpanadas">Nuestras empanadas</p>
                    <h2 className="tituloEmpanadas">Nuestra gran variedad</h2>
                    <p className="textoEmpanadas">
                        Porque sabemos que cada antojo es distinto, te ofrecemos una gran variedad de empanadas: Tradicionales, especiales y vegetarianas.
                    </p>
                </div>
            </div>

            {/* Switch sticky */}
            <div className="switch">
                <button
                    className={`tipoSwitch ${activeTab === 'tradicionales' ? 'active' : ''}`}
                    onClick={() => scrollTo(tradRef, 'tradicionales')}
                >
                    Tradicionales
                </button>
                <button
                    className={`tipoSwitch ${activeTab === 'especiales' ? 'active' : ''}`}
                    onClick={() => scrollTo(espRef, 'especiales')}
                >
                    Especiales
                </button>
                <button
                    className={`tipoSwitch ${activeTab === 'vegetarianas' ? 'active' : ''}`}
                    onClick={() => scrollTo(vegRef, 'vegetarianas')}
                >
                    Vegetarianas
                </button>
            </div>


            <div className="carousel">
                <div ref={tradRef} data-tipo="tradicionales" className="categoria-section">
                    <div className="cardsContainer">
                        {empanadasData.tradicionales.map((emp, i) => (
                            <CardEmpanadas
                                key={`trad-${i}`}
                                click={() => window.open('https://noninoempanadas.com/pedidos/', '_blank')}
                                empanada={emp.imagen}
                                nombre={emp.nombre}
                                descripcion={emp.descripcion}
                            />
                        ))}
                    </div>
                </div>

                <div ref={espRef} data-tipo="especiales" className="categoria-section">
                    <div className="cardsContainer">
                        {empanadasData.especiales.map((emp, i) => (
                            <CardEmpanadas
                                key={`esp-${i}`}
                                click={() => window.open('https://noninoempanadas.com/pedidos/', '_blank')}
                                empanada={emp.imagen}
                                nombre={emp.nombre}
                                descripcion={emp.descripcion}
                            />
                        ))}
                    </div>
                </div>

                <div ref={vegRef} data-tipo="vegetarianas" className="categoria-section">
                    <div className="cardsContainer">
                        {empanadasData.vegetarianas.map((emp, i) => (
                            <CardEmpanadas
                                key={`veg-${i}`}
                                click={() => window.open('https://noninoempanadas.com/pedidos/', '_blank')}
                                empanada={emp.imagen}
                                nombre={emp.nombre}
                                descripcion={emp.descripcion}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Empanadas;
