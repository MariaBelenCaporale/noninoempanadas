import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import Empanadas from '../../components/Section/Empanadas/Empanadas';
import Surcursales from '../../components/Section/Sucursales/Sucursales';
import './styles.css';


const Home = () => {
    return (
        <div>
            <Hero />
            <Banner />
            <Empanadas />
            <Surcursales />
        </div>
    )
};


export default Home;