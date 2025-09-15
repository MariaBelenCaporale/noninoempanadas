import Card from '../../Card/Card';
import Molino from '../../../assets/imagenes/localVega.png'
import Centro from '../../../assets/imagenes/localCentro.png'
import './styles.css';


const Surcursales = () => {
    return (
        <div className='contieneCardSucursalesTexto' id='sucursales'>
            <div className='contenedorSucursalesTextos'>
                <p className='subituloSuc'>Nuestras sucursales</p>
                <h2 className='tituloSucursales'>Visitá nuestras sucursales</h2>
                <p className='textoSucursales'>Estamos más cerca de lo que pensás. Vení a cualquiera de nuestras sucursales y llevate el sabor casero de siempre, recién hecho para vos.</p>
            </div>

            <div className='contenedorSuc'>
                <div className='sucursalesFotos'>
                    <Card
                        sucursal={'El Molino'}
                        local={Molino}
                        telefono={'(2972)410-400'}
                        ubicaciones={[
                            "Nonino Empanadas, Sigrand, San Martín de los Andes, Neuquén"
                        ]}
                        
                    />
                    <Card
                        sucursal={'Centro'}
                        local={Centro}
                        telefono={'(2972)410-400'}
                        ubicaciones={[
                            "Gral. Villegas 745, San Martín de los Andes"
                        ]}
                        
                    />
                </div>

            </div>
        </div>
    )
};


export default Surcursales;