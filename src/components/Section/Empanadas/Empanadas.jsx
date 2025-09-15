import { useState } from 'react';
import './styles.css';
import CardEmpanadas from '../../CardEmpanadas/CardEmpandas';
import CarneMendocina from '../../../assets/imagenes/empanadaDos.png';
import Verdura from '../../../assets/imagenes/empanadas.png';
import CuatroQuesos from '../../../assets/imagenes/empanadaDos.png';
import CiervoAhumado from '../../../assets/imagenes/empanadaTres.png';
import ButtonSec from '../../../components/ButtonSec/ButtonSec';



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

        { imagen: CiervoAhumado, nombre: 'Queso, cebolla y panceta', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Jamón y queso', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Roquefort, jamón y nuez', descripcion: '...' },

        { imagen: CiervoAhumado, nombre: 'Española', descripcion: 'Cantimpalo, muzzarella y cayena' },

    ],
    especiales: [
        { imagen: Verdura, nombre: 'Atún', descripcion: '...' },
        { imagen: Verdura, nombre: 'Langostinos', descripcion: 'Langostinos, crema, ajo' },
        { imagen: Verdura, nombre: 'Champignones', descripcion: 'Verdeo y salsa blanca' },
        { imagen: CiervoAhumado, nombre: 'Neuquina', descripcion: 'Carne de ciervo, verdeo y morrón' },
        { imagen: CiervoAhumado, nombre: 'Panceta y ciruela', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Cordero', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Mejicana', descripcion: 'Bondiola de cerdo con ají picante' },
        { imagen: CiervoAhumado, nombre: 'Trucha', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Ciervo ahumado', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Queso ahumado', descripcion: 'Panceta y morrones' },
        { imagen: CiervoAhumado, nombre: 'Osobuco', descripcion: '...' },

    ],
    vegetarianas: [
        { imagen: CiervoAhumado, nombre: 'Cuatro quesos', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Salteado de vegetales', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Soja', descripcion: 'Soja texturizada con cebolla, morrón, verdeo, ajo y huevo' },
        { imagen: CiervoAhumado, nombre: 'Verdura', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Humita', descripcion: '...' },
        { imagen: CiervoAhumado, nombre: 'Capresse', descripcion: '...' },
    ],
};

const Empanadas = () => {
    const [tipo, setTipo] = useState('tradicionales');
    const [visibleCount, setVisibleCount] = useState(4);
    const itemsToShow = 4;

    const currentData = empanadasData[tipo];

    const handleToggle = () => {
        if (visibleCount >= currentData.length) {
            setVisibleCount(itemsToShow);
        } else {
            setVisibleCount(prev => prev + itemsToShow);
        }
    };



    return (
        <div className='empanadasContenedor' id='empanadas'>

            <div className='contenedorEmpanadasTextos'>
                <div className='textoEmpanadasTotal'>
                    <p className='subituloEmpanadas'>Nuestras empanadas</p>
                    <h2 className='tituloEmpanadas'>Nuestra gran variedad</h2>
                    <p className='textoEmpanadas'>
                        Porque sabemos que cada antojo es distinto, te ofrecemos una gran variedad de empanadas: Tradicionales, especiales y vegetarianas. Todas recién horneadas, doradas y listas para disfrutar.
                    </p>
                </div>
            </div>

            <div className='switch'>
                <button
                    className={`tipoSwitch ${tipo === 'tradicionales' ? 'active' : ''}`}
                    onClick={() => { setTipo('tradicionales'); setVisibleCount(itemsToShow); }}
                >
                    Tradicionales
                </button>
                <button
                    className={`tipoSwitch ${tipo === 'especiales' ? 'active' : ''}`}
                    onClick={() => { setTipo('especiales'); setVisibleCount(itemsToShow) }}
                >
                    Especiales
                </button>
                <button
                    className={`tipoSwitch ${tipo === 'vegetarianas' ? 'active' : ''}`}
                    onClick={() => { setTipo('vegetarianas'); setVisibleCount(itemsToShow) }}
                >
                    Vegetarianas
                </button>
            </div>



            <div className='carousel'>

                <div className='cardsContainer'>
                    {currentData.slice(0, visibleCount).map((empanada, index) => (
                        <CardEmpanadas
                            click={() => window.open('https://noninoempanadas.com/pedidos/', '_blank')}
                            key={index}
                            empanada={empanada.imagen}
                            nombre={empanada.nombre}
                            descripcion={empanada.descripcion}
                        />
                    ))}
                </div>

                {currentData.length > itemsToShow && (
                    <ButtonSec
                        className='verMasBtn'
                        titulo={visibleCount >= currentData.length ? 'Mostrar menos' : 'Mostrar más'}
                        onClick={handleToggle}>

                    </ButtonSec>
                )}

            </div>
        </div>
    );
};

export default Empanadas;
