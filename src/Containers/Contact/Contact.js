import './Contact.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';
import Placeholder from '../../images/Placeholder.png';


const Contact = () => {


    let name = '';
    let email = '';
    let message = '';

    const RegisterData = () => {
        console.log(name);
        console.log(email);
        console.log(message);
    }

    const handleSubmit = (event) => {
        console.log("The message was sended")
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
                            <form className="contactFormulario" onSubmit={handleSubmit} action="https://docs.google.com/forms/u/3/d/e/1FAIpQLSc2eL5G6OOvzx84ly_6s5kAONaM2VUa2cOTq3uAmmHDfYKoRg/formResponse" method='POST'> 
                                <input onInput={(e) => name = e.target.value} type='text' className='contactName' placeholder='Escriba su nombre' name="entry.302086356"/>
                                <input onInput={(e) => email = e.target.value} type='email' className='contactEmail' placeholder='Correo Electronico' name="entry.121196533"/>
                                <textarea onInput={(e) => message = e.target.value} className='contactMessage' placeholder='Escriba un mensaje...' name="entry.90354030"/>
                                <button type='submit' onClick={() => RegisterData()}>Enviar Mensaje</button>
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