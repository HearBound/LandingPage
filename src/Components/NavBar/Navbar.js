import './Navbar.css'
import Logo from '../../images/Hearbound.png';

const Navbar = () => {

    
    return (
        <div className='navBar'>
            <div className='logoNavBar'>
                <img src={Logo}></img>
            </div>
            <div className='routeNavBar'>
                <div className='textNavBar'>
                    <div>Home</div>
                    <div>Sobre Nosotros</div>
                    <div>Contacto</div>
                    <div>FAQ</div>
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