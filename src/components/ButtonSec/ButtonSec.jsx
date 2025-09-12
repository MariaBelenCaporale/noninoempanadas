import './styles.css';


const ButtonSec = ({ titulo, onClick }) => {
    return (
        <button onClick={onClick} className='botonSec'>
           {titulo}
        </button>
    )
}


export default ButtonSec;