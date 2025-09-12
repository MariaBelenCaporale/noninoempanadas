import './styles.css';
import Empanadas from '../../assets/imagenes/empanadas.png';
import Button from '../Button/Button';
import ButtonSec from '../ButtonSec/ButtonSec';



const Hero = () => {
    return (
        <div className='contenedorHero'>
            <div className='contieneTextoHero'>
                <div>
                    <h1 className='tituloHero'>El sabor casero que <span className='tituloHeroItalic'>nunca </span>falla</h1>
                    <p className='textoHero'>Empanadas para compartir, celebrar o simplemente darte un gusto. Probá nuestras empanadas recién horneadas, hechas con la receta de siempre.</p>
                </div>
                <div style={{ display: 'flex', gap: '1em' }}>
                <Button
                    titulo="Pedir Online"
                    onClick={""}
                />
                <ButtonSec 
                    titulo='Contactanos'
                    onClick={""}
                />
                </div>
            </div>

            <div className='contieneImgHero'>
                <img className='imgHero' src={Empanadas} alt='Foto empanadas' />
            </div>
        </div>
    );
};

export default Hero;
