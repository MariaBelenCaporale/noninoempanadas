import './styles.css';
import Fabrica from '../../../assets/videos/fabrica.mp4';


const Nosotros = () => {
    return (
        <div className='contenedorNosotros' id='nosotros'>
            <div className='videoContainer'>
                <video 
                    src={Fabrica} 
                    controls 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className='videoFabrica'    
                />
            </div>
            <div className='contieneNosotrosTexto'>
                <p className='subtituloNosotros'>Nosotros</p>
                <h2 className='nosotrosTitulo'>El corazón de nuestras empanadas</h2>
                <p className='nosotrosTexto'>Elaboramos cada empanada con dedicación, respetando la receta de siempre y asegurando calidad en cada paso.</p>
            </div>
        </div>
    )
}


export default Nosotros;