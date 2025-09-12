import { useState } from 'react';
import CardEmpanadas from '../../CardEmpanadas/CardEmpandas';
import CarneMendocina from '../../../assets/imagenes/empanadaDos.png';
import Pollo from '../../../assets/imagenes/empanadas.png';
import CarneSalteña from '../../../assets/imagenes/empanadaDos.png';
import Verdura from '../../../assets/imagenes/empanadas.png';
import Champi from '../../../assets/imagenes/empanadaDos.png';
import Aceituna from '../../../assets/imagenes/empanadaTres.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './styles.css';


const empanadasData = {
    tradicionales: [CarneMendocina, CarneSalteña, CarneTucumana, CarnePampeana, Árabe, HamburguesayCheddar, ChorizzoalaPomarola, Mondongo, Pollo, Polloalverdeo, Capresse, Queso, cebollaypanceta, Jamónyqueso, Roquefort, jamónynuez, Verdura, Humita, Español, CuatroQuesos, SalteadodeVegetales, Calabazayqueso, Soja],
    especiales: [Atún, Langostinos, Neuquena, PancetayCiruela, Cordero, Mejica, Trucha, CiervoAhumado, QuesoAhumado, Osobuco],
    vegetarianas: [Verdura, Champi, Aceituna, Verdura],
};

const Empanadas = () => {
    const [tipo, setTipo] = useState('tradicionales');
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 4;

    const handlePrev = () => {
        setStartIndex(prev => Math.max(prev - itemsToShow, 0));
    };

    const handleNext = () => {
        setStartIndex(prev => Math.min(prev + itemsToShow, empanadasData[tipo].length - itemsToShow));
    };

    return (
        <div className='empanadasContenedor'>

            <div className='contenedorEmpanadasTextos'>
                <div className='textoEmpanadasTotal'>
                    <p className='subituloEmpanadas'>Nuestras empanadas</p>
                    <h2 className='tituloEmpanadas'>Nuestra gran variedad</h2>
                    <p className='textoEmpanadas'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut vitae ipsa adipisci nobis! Neque dolore itaque saepe.
                    </p>
                </div>
            </div>

            <div className='switch'>
                <button
                    className={`tipoSwitch ${tipo === 'tradicionales' ? 'active' : ''}`}
                    onClick={() => { setTipo('tradicionales'); setStartIndex(0) }}
                >
                    Tradicionales
                </button>
                <button
                    className={`tipoSwitch ${tipo === 'especiales' ? 'active' : ''}`}
                    onClick={() => { setTipo('especiales'); setStartIndex(0) }}
                >
                    Especiales
                </button>
                <button
                    className={`tipoSwitch ${tipo === 'vegetarianas' ? 'active' : ''}`}
                    onClick={() => { setTipo('vegetarianas'); setStartIndex(0) }}
                >
                    Vegetarianas
                </button>
            </div>



            <div className='carousel'>
                <button className='flechaBtnCarousel' onClick={handlePrev} disabled={startIndex === 0}><ChevronLeft size={'24px'} /></button>
                <div className='cardsContainer'>
                    {empanadasData[tipo].slice(startIndex, startIndex + itemsToShow).map((img, index) => (
                        <CardEmpanadas key={index} empanada={img} />
                    ))}
                </div>
                <button className='flechaBtnCarousel' onClick={handleNext} disabled={startIndex + itemsToShow >= empanadasData[tipo].length}><ChevronRight size={'24px'}/></button>
            </div>
        </div>
    );
};

export default Empanadas;
