import { useState, useEffect, useRef } from 'react';
import './styles.css';
import CardEmpanadas from '../../CardEmpanadas/CardEmpandas';


import QuesoAhumado from '../../../assets/imagenes/empanadas/quesoAhumado.jpg';
import Jamonyqueso from '../../../assets/imagenes/empanadas/jamonyqueso.jpg';
import Humita from '../../../assets/imagenes/empanadas/humita.jpg';
import PolloVerdeo from '../../../assets/imagenes/empanadas/polloVerdeo.jpg';
import CarneMendocina from '../../../assets/imagenes/empanadas/mendocina.jpg';
import Verdura from '../../../assets/imagenes/empanadas/verdura.jpg';
import Ciervo from '../../../assets/imagenes/empanadas/ciervo.jpg';
import QusoAhumado from '../../../assets/imagenes/empanadas/quesoAhumado.jpg';
import Primera from '../../../assets/imagenes/empanadas/primera.jpg';
import Segunda from '../../../assets/imagenes/empanadas/segunda.jpg';
import Panceta from '../../../assets/imagenes/empanadas/pancetayciruela.jpg';
import ButtonTer from '../../ButtonTer/ButtonTer';



const empanadasData = {
    tradicionales: [
        { imagen: CarneMendocina, nombre: 'Carne Mendocina', descripcion: 'Carne molida, cebolla, aceituna y huevo' },
        { imagen: Primera, nombre: 'Carne Salteña', descripcion: 'Carne cortada a cuchillo, papa y verdeo' },
        { imagen: Segunda, nombre: 'Carne Tucumana', descripcion: 'Carne cortada a cuchillo, picante' },
        { imagen: Primera, nombre: 'Carne Pampeana', descripcion: 'Carne cortada a cuchillo, macerada en vino' },
        { imagen: Segunda, nombre: 'Árabe', descripcion: '' },
        { imagen: Primera, nombre: 'Hamburguesa y cheddar', descripcion: '' },
        { imagen: Segunda, nombre: 'Chorizo a la pomarola', descripcion: '' },
        { imagen: Primera, nombre: 'Mondongo', descripcion: '' },
        { imagen: PolloVerdeo, nombre: 'Pollo', descripcion: '' },
        { imagen: PolloVerdeo, nombre: 'Pollo al verdeo', descripcion: '' },
        { imagen: Primera, nombre: 'Queso, cebolla y panceta', descripcion: '' },
        { imagen: Jamonyqueso, nombre: 'Jamón y queso', descripcion: 'Jamón, queso y orégano' },
        { imagen: Segunda, nombre: 'Roquefort, jamón y nuez', descripcion: '' },
        { imagen: Primera, nombre: 'Española', descripcion: 'Cantimpalo, muzzarella y cayena' },
    ],
    especiales: [
        { imagen: Primera, nombre: 'Atún', descripcion: '' },
        { imagen: Segunda, nombre: 'Langostinos', descripcion: '' },
        { imagen: Segunda, nombre: 'Neuquina', descripcion: 'Carne de ciervo, verdeo y morrón' },
        { imagen: Panceta, nombre: 'Panceta y ciruela', descripcion: '' },
        { imagen: Primera, nombre: 'Cordero', descripcion: '' },
        { imagen: Segunda, nombre: 'Mejicana', descripcion: 'Bondiola de cerdo con ají picante' },
        { imagen: Primera, nombre: 'Trucha', descripcion: '' },
        { imagen: Ciervo, nombre: 'Ciervo Ahumado', descripcion: '' },
        { imagen: QuesoAhumado, nombre: 'Queso Ahumado', descripcion: 'Panceta y morrones' },
        { imagen: Ciervo, nombre: 'Osobuco', descripcion: '' },
    ],
    vegetarianas: [
        { imagen: Primera, nombre: 'Capresse', descripcion: '' },
        { imagen: Verdura, nombre: 'Verdura', descripcion: '' },
        { imagen: Humita, nombre: 'Humita', descripcion: 'Choclo y queso' },
        { imagen: QuesoAhumado, nombre: 'Cuatro quesos', descripcion: '' },
        { imagen: Segunda, nombre: 'Salteado de vegetales', descripcion: '' },
        { imagen: Primera, nombre: 'Champignones', descripcion: 'Verdeo y salsa blanca' },
        { imagen: Segunda, nombre: 'Soja', descripcion: 'Soja texturizada con cebolla, morrón, verdeo, ajo y huevo' },
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


            <div className="switch">
                <ButtonTer
                    active={activeTab === 'tradicionales'}
                    titulo="Tradicionales"
                    className={`tipoSwitch ${activeTab === 'tradicionales' ? 'active' : ''}`}
                    onClick={() => scrollTo(tradRef, 'tradicionales')}
                />
                <ButtonTer
                    active={activeTab === 'especiales'}
                    titulo="Especiales"
                    className={`tipoSwitch ${activeTab === 'especiales' ? 'active' : ''}`}
                    onClick={() => scrollTo(espRef, 'especiales')}
                />
                <ButtonTer
                    active={activeTab === 'vegetarianas'}
                    titulo="Vegetarianas"
                    className={`tipoSwitch ${activeTab === 'vegetarianas' ? 'active' : ''}`}
                    onClick={() => scrollTo(vegRef, 'vegetarianas')}
                />
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

                <div className="categoriaTitulo"></div>
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

                <div className="categoriaTitulo"></div>
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
