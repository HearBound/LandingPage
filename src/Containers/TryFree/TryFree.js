import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';
import './TryFree.css';
import { useHistory } from 'react-router';
import React, {useState} from 'react';
import axios from 'axios';

const TryFree = () => {
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
    
    return (
        <>
            <Navbar />
            <div className='mainTryFree'>
                <div className='coverTryFree'>
                    <div className='titleTryFree position1TryFree'>¿Cómo me registro?</div>
                    <div className='coverDescriptionTryFree'> 
                        <div className='coverDescriptionTextTryFree'>
                            Para registrarte basta con dejar tu mail, nosotros te avisaremos
                            cuando HearBound esté listo. Además, serás recompensado con
                            ventajas en la plataforma. <br/>
                            Aparte de tener la oportunidad de ser una de las primeras personas en
                            probar y subir canciones.
                        </div>
                        <form  className='coverRegisterMainTryFree' method="POST" action={GOOGLE_FORM_ACTION_URL} target='_blank'>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} name={GOOGLE_FORM_EMAIL_ID} className='coverRegisterInputTryFree' placeholder='Escribe aquí tu mail y empieza ahora' />
                            <input type="submit" value="Registrarme" onClick={handleSubmit} className='coverRegisterButtonTryFree'/>
                        </form>
                    </div>

                    <div className='titleTryFree position2TryFree'>¿Cuándo estará listo?</div>
                    <div className='coverDescriptionTryFree'>
                        <div className='coverDescriptionTextTryFree'>
                        El proyecto aún está en desarrollo, y, aunque no tenemos una fecha
                        exacta, será cuestión de tiempo que HearBound esté disponible para
                        los músicos y oyentes de todo el mundo. Siempre puedes aportar tu
                        granito de arena compartiendo HearBound con más gente para que
                        todos juntos hagamos esto posible.
                        </div>
                    </div>

                    <div className='title2TryFree'>Dudas? Algunas preguntas? Sea lo que sea aquí<br/> estamos :)</div>
                    <div className='coverDescriptionTryFree'>
                        <form className='coverRegisterContactTryFree'>
                            <input onClick={() => history.push('/contact')} type="submit" value="Contacto" className='coverRegisterButtonContactTryFree'/>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TryFree