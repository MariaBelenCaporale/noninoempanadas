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
                <h2 className='nosotrosTitulo'> Acá va a ir un video de Nonino</h2>
                <p className='nosotrosTexto'>Cuidamos cada paso del proceso de producción de nuestras empanadas.</p>
            </div>
        </div>
    )
}


export default Nosotros;