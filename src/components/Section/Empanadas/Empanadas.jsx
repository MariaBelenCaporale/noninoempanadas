import { useState } from 'react';
import './styles.css';
import CardEmpanadas from '../../CardEmpanadas/CardEmpandas';
import CarneMendocina from '../../../assets/imagenes/empanadaDos.png';
import Pollo from '../../../assets/imagenes/empanadas.png';
import CarneSalteña from '../../../assets/imagenes/empanadaDos.png';
import Verdura from '../../../assets/imagenes/empanadas.png';
import Champi from '../../../assets/imagenes/empanadaDos.png';
import CarneTucumana from '../../../assets/imagenes/empanadaTres.png';
import CarnePampeana from '../../../assets/imagenes/empanadaTres.png';
import Árabe from '../../../assets/imagenes/empanadaTres.png';
import HamburguesayCheddar from '../../../assets/imagenes/empanadaTres.png';
import ChorizzoalaPomarola from '../../../assets/imagenes/empanadaTres.png';
import Mondongo from '../../../assets/imagenes/empanadaTres.png';
import Aceituna from '../../../assets/imagenes/empanadaTres.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Polloalverdeo from '../../../assets/imagenes/empanadaTres.png';
import Capresse from '../../../assets/imagenes/empanadaDos.png';
import Queso from '../../../assets/imagenes/empanadaTres.png';
import cebollaypanceta from '../../../assets/imagenes/empanadaDos.png';
import Jamónyqueso from '../../../assets/imagenes/empanadas.png';
import Roquefort from '../../../assets/imagenes/empanadaTres.png';
import jamónynuez from '../../../assets/imagenes/empanadaDos.png';
import Humita from '../../../assets/imagenes/empanadas.png';
import Española from '../../../assets/imagenes/empanadaTres.png';
import CuatroQuesos from '../../../assets/imagenes/empanadaDos.png';
import SalteadodeVegetales from '../../../assets/imagenes/empanadas.png';
import Calabazayqueso from '../../../assets/imagenes/empanadaTres.png';
import Soja from '../../../assets/imagenes/empanadaDos.png';
import Atun from '../../../assets/imagenes/empanadas.png';
import Langostinos from '../../../assets/imagenes/empanadaTres.png';
import Neuquina from '../../../assets/imagenes/empanadaDos.png';
import PancetayCiruela from '../../../assets/imagenes/empanadas.png';
import Cordero from '../../../assets/imagenes/empanadaTres.png';
import Mejicana from '../../../assets/imagenes/empanadaDos.png';
import Trucha from '../../../assets/imagenes/empanadas.png';
import CiervoAhumado from '../../../assets/imagenes/empanadaTres.png';
import QuesoAhumado from '../../../assets/imagenes/empanadaDos.png';
import Osobuco from '../../../assets/imagenes/empanadas.png';


const empanadasData = {
    tradicionales: [CarneMendocina, CarneSalteña, CarneTucumana, CarnePampeana, Árabe, HamburguesayCheddar, ChorizzoalaPomarola, Mondongo, Pollo, Polloalverdeo, Capresse, Queso, cebollaypanceta, Jamónyqueso, Roquefort, jamónynuez, Verdura, Humita, Española, CuatroQuesos, SalteadodeVegetales, Calabazayqueso, Soja],
    especiales: [Atun, Langostinos, Neuquina, PancetayCiruela, Cordero, Mejicana, Trucha, CiervoAhumado, QuesoAhumado, Osobuco],
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
        <div className='empanadasContenedor' id='empanadas'>

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
