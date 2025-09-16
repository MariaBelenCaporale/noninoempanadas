import './styles.css';
import Logo from '../../../assets/imagenes/logo.png';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';


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
                <div className='contieneLogoFooter' onClick={() => scrollToSection('nav')}>
                    <img className='logoFooter' src={Logo} alt='logo nonino' />
                </div>

                <div className='navegacionOkFooter'>
                    <div className='navigacionFooter'>
                        <h2 className='tituloFooter'>Navegación</h2>
                        <div className='navegacionTotalFooter'>
                            <span className='navegacion' onClick={() => scrollToSection('empanadas')}>Empanadas</span>
                            <span className='navegacion' onClick={() => scrollToSection('sucursales')}>Sucursales</span>
                            <span className='navegacion' onClick={() => scrollToSection('nosotros')}>Nosotros</span>

                        </div>
                    </div>
                    <div className='navigacionFooter'>
                        <h2 className='tituloFooter'>¡Seguinos!</h2>
                        <div className='navegacionTotalFooter'>
                            <span className='navegacion'
                                onClick={() => window.open('https://www.instagram.com/nonino.empanadas/', '_blank')}
                            >
                                <Instagram />Instagran</span>
                            <span
                                className='navegacion'
                                onClick={() => window.open('https://www.facebook.com/noninoempanadas/?locale=es_LA', '_blank')}>
                                <Facebook />
                                Facebook
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Footer;