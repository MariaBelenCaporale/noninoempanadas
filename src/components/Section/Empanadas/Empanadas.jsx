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
    { imagen: CarneMendocina, nombre: 'Carne Mendocina', descripcion: 'Cebolla, carne, y ajo' },
    { imagen: Verdura, nombre: 'Verdura', descripcion: 'Mix de verduras' },
    { imagen: CuatroQuesos, nombre: 'Cuatro quesos', descripcion: 'Mozzarella, roquefort, provolone y parmesano' },
    { imagen: CiervoAhumado, nombre: 'Ciervo Ahumado', descripcion: 'Ciervo, cebolla' },
    { imagen: CarneMendocina, nombre: 'Carne Salteña', descripcion: 'Carne cortada a cuchillo, papa, huevo' },
    { imagen: Verdura, nombre: 'Humita', descripcion: 'Choclo, cebolla, queso' },
    { imagen: CuatroQuesos, nombre: 'Española', descripcion: 'Chorizo colorado, papa, huevo' },
  ],
  especiales: [
    { imagen: CiervoAhumado, nombre: 'Ciervo Ahumado', descripcion: 'Ciervo, cebolla' },
    { imagen: Verdura, nombre: 'Langostinos', descripcion: 'Langostinos, crema, ajo' },
  ],
  vegetarianas: [
    { imagen: Verdura, nombre: 'Verdura', descripcion: 'Verduritas' },
    { imagen: CuatroQuesos, nombre: 'Cuatro quesos', descripcion: 'Cuatro quesos' },
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut vitae ipsa adipisci nobis! Neque dolore itaque saepe.
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
                    onClick={() => { setTipo('vegetarianas'); setVisibleCount(itemsToShow)}}
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
