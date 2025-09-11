import './styles.css';

const Button = ({ titulo, onClick }) => {
    return (
        <button onClick={onClick} className='botonPrincipal'>
            <p className='tituloButton'>{titulo}</p>
        </button>
    )
}


export default Button;