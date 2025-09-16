import './styles.css';
import { CircleChevronUp } from 'lucide-react';

const Scroll = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='flechaUp' onClick={() => scrollToSection('nav')}>
            <CircleChevronUp />
        </div>
    )
}


export default Scroll;