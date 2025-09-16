import './styles.css';
import PasoUno from '../../assets/imagenes/pasoUno.png';
import PasoDos from '../../assets/imagenes/pasoDos.png';
import PasoTres from '../../assets/imagenes/pasoTres.png';

const Banner = () => {
    return (
        <div className='contieneBanner'>
            <div className='bannerTituloContenedor'>
                <p className='subtituloBanner'>Nosotros cocinamos, vos disfrutás</p>
                <h2 className='bannerTitulo'>Hacé tu pedido online</h2>
            </div>
            <div className='ordenPasos'>
                <div className='pasosImgTextos'>
                    <img className='imgPasos' src={PasoUno} />
                    <div className='textosOrdenBanner'>
                        <p className='tituloPasosBanner'>Pedí en segundos</p>
                        <p className='textosBannerPasos'>Elegí tus empanadas favoritas y encargalas sin complicaciones.</p>
                    </div>
                </div>
                <div className='pasosImgTextos'>
                    <img className='imgPasos' src={PasoDos} />
                    <div className='textosOrdenBanner'>
                        <p className='tituloPasosBanner'>Llegamos cuando decimos</p>
                        <p className='textosBannerPasos'>Recibí tu pedido a tiempo, calentito y listo para disfrutar.</p>
                    </div>
                </div>
                <div className='pasosImgTextos'>
                    <img className='imgPasos' src={PasoTres} />
                    <div className='textosOrdenBanner'>
                        <p className='tituloPasosBanner'>Empanadas que se disfrutan</p>
                        <p className='textosBannerPasos'>Recetas caseras, ingredientes frescos y el sabor de siempre.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;