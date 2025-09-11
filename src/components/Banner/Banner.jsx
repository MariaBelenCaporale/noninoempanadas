import './styles.css';
import PasoUno from '../../assets/imagenes/pasoUno.png';

const Banner = () => {
    return (
        <div className='contieneBanner'>
            <div className='bannerTituloContenedor'>
                <p className='subtituloBanner'>Relajate y pedí</p>
                <h2 className='bannerTitulo'>Lorem ipsum dolor sit amet consectetur arnatur</h2>
            </div>
            <div className='ordenPasos'>
                <div className='pasosImgTextos'>
                    <img className='imgPasos' src={PasoUno} />
                    <p className='tituloPasos'>Titulo item</p>
                    <p className='textosBannerPasos'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className='pasosImgTextos'>
                    <img className='imgPasos' src={PasoUno} />
                    <p className='tituloPasos'>Titulo item</p>
                    <p className='textosBannerPasos'> Cumque natus magnam, quisquam voluptatem aliquam consectetur.</p>
                </div>
                <div className='pasosImgTextos'>
                    <img className='imgPasos' src={PasoUno} />
                    <p className='tituloPasos'>Titulo item</p>
                    <p className='textosBannerPasos'>Sint quas tempora ipsam tenetur beatae nihil dolor distinctio possimus mollitia</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;