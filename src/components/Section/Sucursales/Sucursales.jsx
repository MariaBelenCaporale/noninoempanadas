import Card from '../../Card/Card';
import Molino from '../../../assets/imagenes/localVega.png'
import Centro from '../../../assets/imagenes/localCentro.png'
import './styles.css';


const Surcursales = () => {
    return (
        <div className='contieneCardSucursalesTexto'>
                <div className='contenedorSucursalesTextos'>
                    <p className='subituloSuc'>Nuestras sucursales</p>
                    <h2 className='tituloSucursales'>Visitá nuestras sucursales</h2>
                    <p className='textoSucursales'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut vitae ipsa adipisci nobis! Neque dolore itaque saepe. Asperiores, fugiat ullam? Doloribus molestias, quis inventore ipsam totam enim itaque facere?</p>
                </div>
            <div className='contenedorSuc'>

                
                <div>
                    <Card 
                   local={Molino}
                        tituloSucursales='sucursal'
                        telefono={'tiititi'}
                        hora={'tototo'}
                        ubicacion={'ssjsjsj'}
                        dias={'jsjssj'}
                        horaDos={'jsjsjsj'}
                    />
                </div>

            </div>
        </div>
    )
};


export default Surcursales;