import './Navbar.css'
import Logo from '../../images/Hearbound.png';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {

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
                    <NavLink to='/home' activeClassName='active'>
                        <div className='overlaySelector'></div>
                        <h1 className='overlayTitle'>Home</h1>
                    </NavLink>

                    <NavLink to='/about' activeClassName='active'>
                        <div className='overlaySelector'></div>
                        <h1 className='overlayTitle'>Sobre Nosotros</h1>
                    </NavLink>
                    <NavLink to='/contact' activeClassName='active'>
                        <div className='overlaySelector'></div>
                        <h1 className='overlayTitle'>Contacto</h1>
                        </NavLink>
                    <NavLink to='/new' activeClassName='active'>
                        <button className='overlayButton'>Pruebalo Gratis</button>
                    </NavLink>
                    
                </div>
                
            </div>
            <div className='navBar'>
            <NavLink to='/' activeClassName='active'>
                <div className='logoNavBar'>
                    <img src={Logo}></img>
                </div>
                </NavLink>
                <div className='routeNavBar'>
                    <div className='textNavBar'>
                    <NavLink to='/home' activeClassName='active'>
                        <div className="homeNavBar">Home</div>
                    </NavLink>
                    <NavLink to='/about' activeClassName='active'>
                        <div className="aboutNavBar" >Sobre Nosotros</div>
                    </NavLink>
                    <NavLink to='/contact' activeClassName='active'>
                        <div className="contactNavBar">Contacto</div>
                    </NavLink>
                    </div>
                    <NavLink to='/new' activeClassName='active'>
                        <div className='buttonNavBar'>
                            <div>¿Eres músico?</div>
                            <button >Pruébalo Gratis</button>
                        </div>
                    </NavLink>
                </div>
                <div id="hamburger" ref={hamburgerNavBar} onClick={handleClick}>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default Navbar