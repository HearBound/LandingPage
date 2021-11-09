import './Contact.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';
import Placeholder from '../../images/Placeholder.png';
import React, {useState} from 'react';
import axios from 'axios';


const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/3/d/e/1FAIpQLSc2eL5G6OOvzx84ly_6s5kAONaM2VUa2cOTq3uAmmHDfYKoRg/formResponse';
    const GOOGLE_FORM_EMAIL_ID = 'entry.121196533';
    const GOOGLE_FORM_NAME_ID = 'entry.302086356';
    const GOOGLE_FORM_MESSAGE_ID = 'entry.90354030';

    const sendMessage = () => {
        const formData = new FormData()
        formData.append(GOOGLE_FORM_EMAIL_ID, email)
        formData.append(GOOGLE_FORM_NAME_ID, name)
        formData.append(GOOGLE_FORM_MESSAGE_ID, message)
        axios.post(GOOGLE_FORM_ACTION_URL, formData)
         .then(() => {
           setEmail('')
           setMessage('')
           setName('')
        }).catch(() => {
            setEmail('')
            setMessage('')
            setName('')
            console.log(email)
        })
      }

    const handleSubmit = (e) => {
        console.log("The message was sended")
        e.preventDefault()
        sendMessage()
      }

    return (
        <>
            <Navbar />
            <div className='contactPage'>
                <div className='contactForm'> 
                    <div className='contactFormBox'>
                        <div className='contactImage'>
                            <h1>Contáctanos</h1>
                            <img src={Placeholder} alt="placeholder" />
                        </div>
                        <div className='contactInput'>
                            <form className="contactFormulario" onSubmit={handleSubmit} action={GOOGLE_FORM_ACTION_URL} method='POST'> 
                                <input value={name}  onInput={(e) => setName(e.target.value)} type='text' className='contactName' placeholder='Escriba su nombre' name={GOOGLE_FORM_NAME_ID}/>
                                <input value={email}  onInput={(e) => setEmail(e.target.value)} type='email' className='contactEmail' placeholder='Correo Electronico' name={GOOGLE_FORM_EMAIL_ID}/>
                                <textarea value={message}  onInput={(e) => setMessage(e.target.value)} className='contactMessage' placeholder='Escriba un mensaje...' name={GOOGLE_FORM_MESSAGE_ID}/>
                                <button type='submit' onClick={handleSubmit}>Enviar Mensaje</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Contact