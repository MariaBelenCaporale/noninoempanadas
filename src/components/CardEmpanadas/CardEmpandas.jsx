import './styles.css';
import '../Button/Button';
import { ArrowUpRight } from 'lucide-react';


const CardEmpanadas = ({ empanada, nombre, click, descripcion }) => {
    return (
        <div className='contenedorEmpanada'>
            <div className='imgEmpanadas' onClick={click}>
                <img className='sabor' src={empanada} />
            </div>
            
            <div className='datosEmpanada'>
            <div className='infoEmpanada'>
                <h2 className='nombreEmpanada'>
                    {nombre}
                </h2>
                <p className='descripcionEmpanada'>{descripcion}</p>
            </div>
                <div className='flechaCard'>
                    <ArrowUpRight />
                </div>
                </div>
        </div>
    )
};


export default CardEmpanadas;