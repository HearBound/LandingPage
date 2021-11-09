import './Footer.css'
import {ReactComponent as Youtube} from '../../images/Youtube.svg'
import {ReactComponent as Instagram} from '../../images/instagram.svg'
import React, {useState} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const Footer = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/3/d/e/1FAIpQLSc6FBkLO0CcCEqLz8Pd-GLWZJatN7F7Tv_Z4CwDFEnBZEte6Q/formResponse';
    const GOOGLE_FORM_EMAIL_ID = 'entry.359607118';

  const sendMessage = () => {
    const formData = new FormData()
    formData.append(GOOGLE_FORM_EMAIL_ID, email)
    axios.post(GOOGLE_FORM_ACTION_URL, formData)
     .then(() => {
       setEmail('')
    }).catch(() => {
        setEmail('')
        console.log(email)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //other stuff
    sendMessage()

}

    let handleClick = () => {
        let path = 'https://www.instagram.com/hearbound/';
        window.location.href = path;
    }

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
                            <Instagram onClick={handleClick} className='instagram'/>
                            <Youtube/>
                            
                        </div>
                    </div>
                </div>
                <div className='contactFooter'>
                    <p>No te pierdas nada. Suscríbete!</p>
                    <form  method="POST" action={GOOGLE_FORM_ACTION_URL} target='_blank'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} name={GOOGLE_FORM_EMAIL_ID} type='email' className='inputFooter' placeholder='Email' />
                        <input name='submit' onClick={handleSubmit} className='suscribeFooter' type='submit' value='Suscríbete' />
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