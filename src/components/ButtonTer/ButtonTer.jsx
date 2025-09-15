import './styles.css';

const ButtonTer = ({ titulo, onClick }) => {
    return (
        <button onClick={onClick} className='botonTer'>
           {titulo}
        </button>
    )
}


export default ButtonTer;