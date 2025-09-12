import './styles.css';
import Empanadas from '../../assets/imagenes/empanadas.png';
import Button from '../Button/Button';



const Hero = () => {
    return (
        <div className='contenedorHero'>
            <div className='contieneTextoHero'>
                <div>
                    <h1 className='tituloHero'>Lorem ipsum latert <span className='tituloHeroItalic'>Lorem & lorems</span></h1>
                    <p className='textoHero'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorem quos possimus eligendi culpa sunt voluptate perspiciatis provident! Ratione non rerum dicta. </p>
                </div>
                <Button
                    titulo="Pedir Online"
                    onClick={""}
                />
            </div>

            <div className='contieneImgHero'>
                <img className='imgHero' src={Empanadas} alt='Foto empanadas' />
            </div>
        </div>
    );
};

export default Hero;
