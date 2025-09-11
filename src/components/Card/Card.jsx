import './styles.css';
import LocalVega from '../../assets/imagenes/localVega.png';
import { PhoneCall, MapPin } from 'lucide-react';



const Card = ({ sucursal, ubicacion, telefono }) => {
    return (
        <div className='card'>
            <div className='cardImg'>
                <img className='fotoVega' src={LocalVega} alt='Local Vega San Martín' />
            </div>
            <div className='textosCard'>
                <p className='tituloCardLugar'>{sucursal}</p>
                
                <div className='iconoText'>
                    <MapPin size={20} color='#CA3001' />
                    <p className='textoCardLugar'>{ubicacion}</p>
                </div>
                <div className='iconoText'>
                    <PhoneCall size={20} color='#CA3001' />
                    <p className='textoCardLugar'>{telefono}</p>
                </div>
            </div>
        </div>
    )
};

export default Card;