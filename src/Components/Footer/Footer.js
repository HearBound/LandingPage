import './Footer.css'
import {ReactComponent as Youtube} from '../../images/Youtube.svg'
import {ReactComponent as Instagram} from '../../images/instagram.svg'
import { useHistory } from 'react-router';

const Footer = () => {
    const history = useHistory();
    return (
        <footer>

            <div className='footer'>
                <div className='routeFooter'>
                    <div onClick={() => history.push('/#')}>Privacidad</div>
                    <div onClick={() => history.push('/#')}>Terminos y Condiciones</div>
                    <div  onClick={() => history.push('/about')}>Sobre Nosotros</div>
                </div>
                <div className='midFooter'>
                    <div className='socialFooter'>
                        <div className='socialText'>Síguenos en nuestras redes sociales</div>
                        <div className='socialImages'>
                            <Youtube/>
                            <Instagram/>
                            <Youtube/>
                            
                        </div>
                    </div>
                </div>
                <div className='contactFooter'>
                    <p>No te pierdas nada. Suscríbete!</p>
                    <form  method="POST" action="https://docs.google.com/forms/u/3/d/e/1FAIpQLSc6FBkLO0CcCEqLz8Pd-GLWZJatN7F7Tv_Z4CwDFEnBZEte6Q/formResponse">
                        <input name="entry.359607118" type='email' className='inputFooter' placeholder='Email' />
                        <input name='submit' className='suscribeFooter' type='submit' value='Suscríbete' />
                    </form>
                </div>
            </div>
            <div>
                <div className='textFooter'>2021 HearBound</div>
            </div>
        </footer>

    );
}

export default Footer