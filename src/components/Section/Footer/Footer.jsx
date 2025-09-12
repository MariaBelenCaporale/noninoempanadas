import './styles.css';
import Logo from '../../../assets/imagenes/logo.png';
import { useNavigate, useLocation, Link } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='footer'>
            <div className='contieneFooter'>
                <div>
                    <img className='logoFooter' src={Logo} alt='logo nonino' />
                </div>

                <div className='navegacionOkFooter'>
                    <div className='navigacionFooter'>
                        <h2 className='tituloFooter'>Navegación</h2>
                        <div className='navegacionTotalFooter'>
                            <span className='navegacion' onClick={() => scrollToSection('empanadas')}>Empanadas</span>
                            <span className='navegacion' onClick={() => scrollToSection('sucursales')}>Sucursales</span>
                            <span className='navegacion' onClick={() => scrollToSection('nosotros')}>Nosotros</span>
                            <span className='navegacion' onClick={() => scrollToSection('contacto')}>Contacto</span>
                        </div>
                    </div>
                    <div className='navigacionFooter'>
                        <h2 className='tituloFooter'>Redes</h2>
                        <div className='navegacionTotalFooter'>
                            <span className='navegacion'>Insta</span>
                            <span className='navegacion'>Face?</span>
                        </div>
                    </div>
                    <div className='navigacionFooter'>
                        <h2 className='tituloFooter'>¡Visitanos!</h2>
                        <div className='navegacionTotalFooter'>
                            <span className='navegacion'>Lugar 1</span>
                            <span className='navegacion'>Lugar 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;