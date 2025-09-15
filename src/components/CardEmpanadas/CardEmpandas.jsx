import './styles.css';
import '../Button/Button';
import Button from '../Button/Button';

const CardEmpanadas = ({ empanada, nombre, descripcion, click }) => {
    return (
        <div className='contenedorEmpanada' onClick={click}>
            <div className='imgEmpanadas'>
                <img className='sabor' src={empanada} />
            </div>
            <div className='infoEmpanada'>
                <div className='textosOrdenCard'>
                    <h2 className='nombreEmpanada'>
                        {nombre}
                    </h2>
                    <p className='descripcionEmpanada'>{descripcion}</p>


                </div>
                <Button 
                    titulo={'Pedir Online'} 
                    onClick={() => ('')}    
                />
            </div>
        </div>
    )
};


export default CardEmpanadas;