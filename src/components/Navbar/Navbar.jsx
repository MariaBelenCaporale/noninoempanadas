import Button from '../Button/Button';
import Logo from '../../assets/imagenes/logo.png';
import './styles.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className='contenedorNav'>
            <div className='contenedorUl'>
                <Link to="/" className='navegacion'>
                    <img className='logoNav' src={Logo} alt='Logo Nonino' />
                </Link>
                <div className='navegacionTotal'>
                <Link to="/" className='navegacion'>Sucursales</Link>
                <Link to="/" className='navegacion'>Empanadas</Link>
                <Link to="/" className='navegacion'>Nosotros</Link>
                <Link to="/" className='navegacion'>Contacto</Link>
                </div>
            <Button 
                titulo= "Pedir Online"
                onClick={() => window.open('https://noninoempanadas.com/pedidos/', '_blank')}
            />
            </div>
        </div>
    )
}


export default Navbar;