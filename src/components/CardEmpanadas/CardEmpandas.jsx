import './styles.css';
import '../Button/Button';


const CardEmpanadas = ({ empanada, nombre, click }) => {
    return (
        <div className='contenedorEmpanada'>
            <div className='imgEmpanadas' onClick={click}>
                <img className='sabor' src={empanada} />
            </div>
            <div className='infoEmpanada'>
                <h2 className='nombreEmpanada'>
                    {nombre}
                </h2>
            </div>
        </div>
    )
};


export default CardEmpanadas;