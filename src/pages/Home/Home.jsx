import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import Scroll from '../../components/Scroll/Scroll';
import Empanadas from '../../components/Section/Empanadas/Empanadas';
import Nosotros from '../../components/Section/Nosotros/Nosotros';
import Surcursales from '../../components/Section/Sucursales/Sucursales';
import './styles.css';


const Home = () => {
    return (
        <div className='homePage'>
            <Hero />
            <Banner />
            <Scroll />
            <Empanadas />
            <Surcursales />
            <Nosotros />
        </div>
    )
};


export default Home;