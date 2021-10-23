import './Navbar.css'
import Logo from '../../images/Hearbound.png';
import { useHistory } from 'react-router';
import React from 'react';

const Navbar = () => {

    const history = useHistory();

    let hamburgerNavBar = React.createRef();
    let overlay = React.createRef();
    let open = false;

    let handleClick = () => {
        const hamburger = hamburgerNavBar.current;
        const menu = overlay.current;

        if (!open) {
            hamburger.classList.add("open");
            menu.classList.add("menu");
        } else {
            hamburger.classList.remove("open");
            menu.classList.remove("menu");
        }
        open = !open;
    }

    return (
        <>
            <div id="overlay" ref={overlay}>
                <div className='overlayLinks'>
                    <div onClick={() => history.push('/')}>
                        <div className='overlaySelector'></div>
                        <h1 className='overlayTitle'>Home</h1>
                    </div>

                    <div onClick={() => history.push('/about')}>
                        <div className='overlaySelector'></div>
                        <h1 className='overlayTitle'>Sobre Nosotros</h1>
                    </div>
                    <div onClick={() => history.push('/contact')}>
                        <div className='overlaySelector'></div>
                        <h1 className='overlayTitle'>Contacto</h1>
                    </div>
                </div>
                <button className='overlayButton'>Pruebalo Gratis</button>
            </div>
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
                <div id="hamburger" ref={hamburgerNavBar} onClick={handleClick}>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default Navbar