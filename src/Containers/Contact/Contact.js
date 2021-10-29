import './Contact.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';
import Image from '../../images/desktop.png';

const Contact = () => {
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
                                <input type='text' className='contactName' placeholder='Escriba su nombre' />
                                <input type='email' className='contactEmail' placeholder='Correo Electronico'/>
                                <textarea className='contactMessage' placeholder='Escriba un mensaje...' />
                                <button >Enviar Mensaje</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Contact