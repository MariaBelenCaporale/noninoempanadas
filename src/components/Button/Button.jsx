import './styles.css';

const Button = ({ titulo, onClick }) => {
    return (
        <button onClick={onClick} className='botonPrincipal'>
           {titulo}
        </button>
    )
}


export default Button;