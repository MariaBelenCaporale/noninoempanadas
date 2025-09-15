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
                <p className='textoSucursales'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut vitae ipsa adipisci nobis! Neque dolore itaque saepe. Asperiores, fugiat ullam? Doloribus molestias, quis inventore ipsam totam enim itaque facere?</p>
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