import './styles.css';
// import Empanadas from '../../assets/imagenes/empanadas.png';
import Empanadas from '../../assets/imagenes/plato.png';
import CardFoto from '../../assets/imagenes/card.png';
import Flecha from '../../assets/imagenes/flecha.png';
import Reloj from '../../assets/imagenes/reloj.png';
import Button from '../Button/Button';
import ButtonSec from '../ButtonSec/ButtonSec';



const Hero = () => {
      const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };
    return (
        <div className='contenedorHero' id='hero'>
            <div className='contieneTextoHero'>
                <div>
                    <h1 className='tituloHero'>El sabor casero que <span className='tituloHeroItalic'>nunca </span>falla</h1>
                    <p className='textoHero'>Empanadas para compartir, celebrar o simplemente darte un gusto. Probá nuestras empanadas recién horneadas, hechas con la receta de siempre.</p>
                </div>
                <div style={{ display: 'flex', gap: '1em' }}>
                    <Button
                        titulo="Pedir Online"
                        onClick={() => window.open('https://noninoempanadas.com/pedidos/', '_blank')}
                    />
                    <ButtonSec
                        titulo='Conocenos'
                        onClick={() => scrollToSection('nosotros')}
                    />
                </div>
            </div>
            <div className="imgFlota">
                <img className="imgFlecha" src={Flecha} alt="Flecha" />
                <img className="imgCard" src={CardFoto} alt="Flecha" />
                <img className="imgReloj" src={Reloj} alt="Flecha" />
            </div>
            <div className='contieneImgHero'>
                <img className='imgHero' src={Empanadas} alt='Foto empanadas' />
            </div>
        </div>
    );
};

export default Hero;
