import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import Empanadas from '../../components/Section/Empanadas/Empanadas';
import Nosotros from '../../components/Section/Nosotros/Nosotros';
import Surcursales from '../../components/Section/Sucursales/Sucursales';
import './styles.css';


const Home = () => {
    return (
        <div className='homePage'>
            <Hero />
            <Banner />
            <Empanadas />
            <Surcursales />
            <Nosotros />
        </div>
    )
};


export default Home;