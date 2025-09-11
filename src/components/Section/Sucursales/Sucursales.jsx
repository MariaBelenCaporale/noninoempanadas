import Card from '../../Card/Card';
import './styles.css';


const Surcursales = () => {
    return (
        <div className='contieneCardSucursales'>
            <Card 
                sucursal='Sucursal El Molino'
                ubicacion='Ruta 40'
                telefono='(2972) 410400'
            />
            <Card 
                sucursal='Sucursal Centro'
                ubicacion='Gral. Villegas 745'
                telefono='(2972) 425072'
            />
        </div>
    )
};


export default Surcursales;