import './styles.css';


const CardEmpanadas = ({ empanada }) => {
    return (
        <div className='contenedorEmpanada'>
            <img className='sabor' src={empanada} />
        </div>
    )
};


export default CardEmpanadas;