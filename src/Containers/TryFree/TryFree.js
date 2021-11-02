import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';
import './TryFree.css';

const TryFree = () => {
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
                        <form className='coverRegisterMainTryFree'>
                            <input type="text" name="name" className='coverRegisterInputTryFree' placeholder='Escribe aquí tu mail y empieza ahora' />
                            <input type="submit" value="Registrarme" className='coverRegisterButtonTryFree'/>
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
                            <input type="submit" value="Contacto" className='coverRegisterButtonContactTryFree'/>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TryFree