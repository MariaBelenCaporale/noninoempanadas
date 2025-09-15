import './styles.css';
import { PhoneCall, MapPin } from 'lucide-react';
import ButtonTer from '../../components/ButtonTer/ButtonTer';

const Card = ({ sucursal, ubicaciones = [], telefono, local }) => {
    const handleOpenMaps = (ubicacion) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ubicacion)}`;
        window.open(url, '_blank');
    };

    return (
        <div className='card'>
            <div className='cardImg'>
                <img className='fotoVega' src={local} alt='Local Nonino' />
            </div>

            <div className='informacionCard'>
                <div className='textosCard'>
                    <p className='tituloCardLugar'>{sucursal}</p>

                    {ubicaciones.map((ubi, index) => (
                        <div key={index} className='iconoText'>
                            <div>
                            <MapPin size={20} color='#CA3001' />
                            </div>
                            <p className='textoCardLugar'>{ubi}</p>
                        </div>
                    ))}

                    <div className='iconoText'>
                        <PhoneCall size={20} color='#CA3001' />
                        <p className='textoCardLugar'>{telefono}</p>
                    </div>
                </div>

                {ubicaciones.map((ubi, index) => (
                    <ButtonTer
                        key={index}
                        titulo={`Ver en Maps`}
                        onClick={() => handleOpenMaps(ubi)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Card;
