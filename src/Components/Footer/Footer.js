import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='routeFooter'>
                    <div>Privacidad</div>
                    <div>Terminos y Condiciones</div>
                    <div>Sobre Nosotros</div>
                    <div>FAQ</div>
                </div>
                <div className='midFooter'>
                    <div className='socialFooter'>
                        <div>Síguenos en nuestras redes sociales</div>
                        <div className='socialImages'>
                            <div className='socialCircle'></div>
                            <div className='socialCircle'></div>
                            <div className='socialCircle'></div>
                        </div>
                    </div>
                    <div className='textFooter'>2021 Hearbound</div>
                </div>
                <div className='contactFooter'>
                    <p>No te pierdas nada. Suscríbete!</p>
                    <form>
                        <input name='email' type='email' placeholder='Email' />
                        <input name='submit' className='suscribeFooter' type='submit' value='Suscríbete'/>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer