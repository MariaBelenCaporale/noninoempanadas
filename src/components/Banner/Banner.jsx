import './styles.css';
import PasoUno from '../../assets/imagenes/pasoUno.png';
import PasoDos from '../../assets/imagenes/pasoDos.png';
import PasoTres from '../../assets/imagenes/pasoTres.png';

const Banner = () => {
    return (
        <div className='contieneBanner'>
            <div className='bannerTituloContenedor'>
                <p className='subtituloBanner'>Relajate y pedí</p>
                <h2 className='bannerTitulo'>Hacé tu pedido Online</h2>
            </div>
            <div className='ordenPasos'>
                <div className='pasosImgTextos'>
                    <img className='imgPasos' src={PasoUno} />
                    <div className='textosOrdenBanner'>
                        <p className='tituloPasos'>Fácil de pedir</p>
                        <p className='textosBannerPasos'>Lleva solo unos minutos, desde la comodidad de tu hogar</p>
                    </div>
                </div>
                <div className='pasosImgTextos'>
                    <img className='imgPasos' src={PasoDos} />
                    <div className='textosOrdenBanner'>
                        <p className='tituloPasos'>Delivery rápido</p>
                        <p className='textosBannerPasos'>Nuestros repartidores van a llegar a la hora pactada</p>
                    </div>
                </div>
                <div className='pasosImgTextos'>
                    <img className='imgPasos' src={PasoTres} />
                    <div className='textosOrdenBanner'>
                        <p className='tituloPasos'>La mejor calidad</p>
                        <p className='textosBannerPasos'>Vas a disfrutar de las mejores empandas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;