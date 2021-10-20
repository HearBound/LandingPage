import './Navbar.css'
import Logo from '../../images/Hearbound.png';
import { useHistory } from 'react-router';

const Navbar = () => {

    const history = useHistory();

    return (
        <div className='navBar'>
            <div className='logoNavBar' onClick={() => history.push('/')}>
                <img src={Logo}></img>
            </div>
            <div className='routeNavBar'>
                <div className='textNavBar'>
                    <div className="homeNavBar" onClick={() => history.push('/')}>Home</div>
                    <div className="aboutNavBar" onClick={() => history.push('/about')}>Sobre Nosotros</div>
                    <div className="contactNavBar" onClick={() => history.push('/contact')}>Contacto</div>
                </div>
                <div className='buttonNavBar'>
                    <div>¿Eres músico?</div>
                    <button>Pruébalo Gratis</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar