import { useState } from 'react';
import Button from '../Button/Button';
import Logo from '../../assets/imagenes/logo.png';
import './styles.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); 
        }
    };

    return (
        <nav className="contenedorNav">
            <div className="contenedorUl">
                <Link to="/" className="navegacion">
                    <img className="logoNav" src={Logo} alt="Logo Nonino" />
                </Link>

               
                <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                </div>

     
                <div className={`navegacionTotal ${menuOpen ? 'active' : ''}`}>
                    <span className="navegacion" onClick={() => scrollToSection('empanadas')}>Empanadas</span>
                    <span className="navegacion" onClick={() => scrollToSection('sucursales')}>Sucursales</span>
                    <span className="navegacion" onClick={() => scrollToSection('nosotros')}>Nosotros</span>
                    <span className="navegacion" onClick={() => scrollToSection('contacto')}>Contacto</span>

               
                    <div className="btnMobile">
                        <Button
                            titulo="Pedir Online"
                            onClick={() => window.open('https://noninoempanadas.com/pedidos/', '_blank')}
                        />
                    </div>
                </div>

   
                <div className="btnDesktop">
                    <Button
                        titulo="Pedir Online"
                        onClick={() => window.open('https://noninoempanadas.com/pedidos/', '_blank')}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
