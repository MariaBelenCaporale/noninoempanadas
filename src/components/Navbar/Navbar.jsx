import { useState } from 'react';
import Button from '../Button/Button';
import Logo from '../../assets/imagenes/logo.png';
import './styles.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <div className='contenedorNav'>
            <div className='contenedorUl'>
                <Link to="/" className='navegacion'>
                    <img className='logoNav' src={Logo} alt='Logo Nonino' />
                </Link>

      
                <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`linea ${menuOpen ? 'rotate1' : ''}`}></div>
                    <div className={`linea ${menuOpen ? 'fade' : ''}`}></div>
                    <div className={`linea ${menuOpen ? 'rotate2' : ''}`}></div>
                </div>

                <div className={`navegacionTotal ${menuOpen ? 'active' : ''}`}>
                    <span className='navegacion' onClick={() => scrollToSection('empanadas')}>Empanadas</span>
                    <span className='navegacion' onClick={() => scrollToSection('sucursales')}>Sucursales</span>
                    <span className='navegacion' onClick={() => scrollToSection('nosotros')}>Nosotros</span>
                    <span className='navegacion' onClick={() => scrollToSection('contacto')}>Contacto</span>
                    <Button
                        titulo="Pedir Online"
                        onClick={() => window.open('https://noninoempanadas.com/pedidos/', '_blank')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
