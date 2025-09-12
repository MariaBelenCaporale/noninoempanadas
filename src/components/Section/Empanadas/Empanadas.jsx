import { useState } from 'react';
import CardEmpanadas from '../../CardEmpanadas/CardEmpandas';
import Carne from '../../../assets/imagenes/empanadaDos.png';
import Pollo from '../../../assets/imagenes/empanadas.png';
import JamonQueso from '../../../assets/imagenes/empanadaDos.png';
import Verdura from '../../../assets/imagenes/empanadas.png';
import Champi from '../../../assets/imagenes/empanadaDos.png';
import Aceituna from '../../../assets/imagenes/empanadaTres.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './styles.css';


const empanadasData = {
    tradicionales: [Carne, Pollo, JamonQueso, Carne, Pollo, JamonQueso, Carne, Pollo],
    especiales: [Champi, Aceituna, JamonQueso, Pollo],
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
                <div className='textoEmpanadas'>
                    <p className='subituloSuc'>Nuestras empanadas</p>
                    <h2 className='tituloSucursales'>Nuestra gran variedad</h2>
                    <p className='textoSucursales'>
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
