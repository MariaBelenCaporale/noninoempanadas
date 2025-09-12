import './styles.css';
import { PhoneCall, MapPin, Clock } from 'lucide-react';



const Card = ({ sucursal, ubicacion, telefono, local }) => {
    return (
        <div className='card'>
            <div className='cardImg'>
                <img className='fotoVega' src={local} alt='Local Nonino' />
            </div>

            <div className='informacionCard'>
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
        </div>
    )
};

export default Card;