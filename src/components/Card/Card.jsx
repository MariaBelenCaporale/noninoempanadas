import './styles.css';
import { PhoneCall, MapPin, Clock } from 'lucide-react';



const Card = ({ sucursal, ubicacion, telefono, local, horarios, dias, hora, horaDos }) => {
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

                
                    <div className='textosCard'>
                    <p className='tituloCardLugar'>{horarios}</p>
                    <div className='diasYhora'>
                        <p className='textoCardLugar'>{dias}</p>
                        <div className='iconoText'>
                            <Clock size={20} color='#CA3001' />
                            <p className='textoCardLugar'>{hora}</p>
                            <p className='textoCardLugar'>{horaDos}</p>
                        </div>
                    </div>
                    </div>
                
            </div>
        </div>
    )
};

export default Card;