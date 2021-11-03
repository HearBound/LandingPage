import './Contact.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';
import Image from '../../images/desktop.png';

const Contact = () => {

    let name = '';
    let email = '';
    let message = '';

    const RegisterData = () => {
        console.log(name);
        console.log(email);
        console.log(message);
    }
    return (
        <>
            <Navbar />
            <div className='contactPage'>
                <div className='contactForm'> 
                    <div className='contactFormBox'>
                        <div className='contactImage'>
                            <h1>Contáctanos</h1>
                            <img src={Image} alt="placeholder" />
                        </div>
                        <div className='contactInput'> 
                                <input onInput={(e) => name = e.target.value} type='text' className='contactName' placeholder='Escriba su nombre' />
                                <input onInput={(e) => email = e.target.value} type='email' className='contactEmail' placeholder='Correo Electronico'/>
                                <textarea onInput={(e) => message = e.target.value} className='contactMessage' placeholder='Escriba un mensaje...' />
                                <button onClick={() => RegisterData()}>Enviar Mensaje</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Contact