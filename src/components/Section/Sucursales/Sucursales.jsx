import Card from '../../Card/Card';
import Molino from '../../../assets/imagenes/localVega.png'
import Centro from '../../../assets/imagenes/localCentro.png'
import './styles.css';


const Surcursales = () => {
    return (
        <div className='contieneCardSucursalesTexto'>
            <div className='contenedorSucursalesTextos'>
                <h2 className='tituloSucursales'>Visitá nuestras sucursales</h2>
                <p className='textoSucursales'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut vitae ipsa adipisci nobis! Neque dolore itaque saepe. Asperiores, fugiat ullam? Doloribus molestias, quis inventore ipsam totam enim itaque facere?</p>
            </div>

            <div className='contieneCardSucursales'>
            <Card 
                local={Molino}
                sucursal='Sucursal El Molino'
                ubicacion='Ruta 40'
                telefono='(2972) 410400'
                horarios='Horarios'
                dias='Lunes a Domingos'
                hora='11:30 a 15:00 y de 19:00 a 23:00'
            />
            <Card 
                local={Centro}
                sucursal='Sucursal Centro'
                ubicacion='Gral. Villegas 745'
                telefono='(2972) 425072'
            />
            </div>
        </div>
    )
};


export default Surcursales;