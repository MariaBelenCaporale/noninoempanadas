import './styles.css';

const ButtonTer = ({ titulo, onClick, active }) => {
    return (
        <button 
            onClick={onClick} 
            className={`botonTer ${active ? 'active' : ''}`}
        >
           {titulo}
        </button>
    )
}

export default ButtonTer;
