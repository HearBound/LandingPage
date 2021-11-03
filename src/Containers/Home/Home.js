import './Home.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';
import Image from '../../images/desktop.png';
import Amazon from '../../images/amazon.png';
import Holded from '../../images/holded.png';
import Res from '../../images/res.png';
import mockup1 from '../../images/mockup1.png'
import mockup2 from '../../images/mockup2.png'
import mockup3 from '../../images/mockup3.png'
import mockup4 from '../../images/mockup4.png'
import mockup5 from '../../images/mockup5.png'
import mockup6 from '../../images/mockup6.png'

const Home = () => {

    let email = '';

    const RegisterData = () => {
        console.log(email);
    }

    return (
        <>
            <Navbar />
            <div className='main'>
                <section className='one'>
                    <div className='titleMain'>HEARBOUND</div>
                    <div className='subtitleMain'> <p>  La puerta que une a artistas y oyentes de todo el mundo. </p> </div>
                    <div className='newsletterMain'>
                        <p> A que esperas? Registrate dejando tu mail aqui </p>
                        <div className='formMain'>
                            <div className='emailMain'>
                                <input onInput={(e) => email = e.target.value} name='email' type='email' placeholder='Escribe aqui tu mail y empieza ahora' />
                            </div>
                            <div className='mainButton' onClick={() => RegisterData()}>Registrárme</div>
                        </div>
                    </div>
                </section>
                <section className='three'>
                    <div className='titleMainSection'>
                        ¿Cómo funciona?
                        <div className='titleLineBlue'></div>
                    </div>
                    <div className='bodyMainSection'>
                        <div className='whiteSection'>
                            <div className='sectionImage'>
                                <img src={mockup4}></img>
                            </div>
                            <div className='whiteSectionText'>
                                <div className='whiteTitle'>
                                    Te lo ponemos facil
                                </div>
                                <div className='whiteParragraph'>
                                    <p>Usar HearBound es sencillo, solo tienes que subir tu canción y elegir a tu público ideal.
                                        <br></br>
                                        <br></br>
                                        Rock, instrumental, rap, flamenco... sea lo que sea, aquí encontraras a tu público. </p>
                                </div>
                            </div>
                        </div>
                        <div className='graySection'>
                            <div className='graySectionText'>
                                <div className='grayTitle'>
                                    “El TikTok para musicos”
                                </div>
                                <div className='grayParragraph'>
                                    <p> Nuestra plataforma aprovecha el contenido estilo “TikTok” para que los oyentes descubran música de una forma más rápida y cómoda.
                                        <br></br>
                                        <br></br>
                                        Piensa en un “TikTok” donde entras a descubrir videoclips de nuevos artistas de tus géneros y estilos favoritos. </p>
                                </div>
                            </div>
                            <div className='sectionImage'>
                                <img src={Image}></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='four'>
                    <div className='titleMainSection'>
                        ¿Por qué usar HearBound? 
                        <div className='titleLinePurple'></div>
                    </div>
                    <div className='bodyMainSection'>
                        <div className='whiteSection'>
                            <div className='sectionImage'>
                                <img src={mockup3}></img>
                            </div>
                            <div className='whiteSectionText'>
                                <div className='whiteTitle'>
                                    Tu música donde quieras 
                                </div>
                                <div className='whiteParragraph'>
                                    <p>Una vez te descubran, podrán escucharte en las plataformas que tu elijas y así seguir creciendo como artista.
                                        <br></br>
                                        <br></br>
                                        También seguir tu perfil y redes sociales para no perderse nada... </p>
                                </div>
                            </div>
                        </div>
                        <div className='graySection'>
                            <div className='graySectionText'>
                                <div className='grayTitle'>
                                    HearBound es GRATIS!!
                                </div>
                                <div className='grayParragraph'>
                                    <p> HearBound será Gratuito para todos los artistas, pero ofrecerá herramientas de pago, con las que podrás exprimir al 100% tu música. 
                                        <br></br>
                                        <br></br>
                                        Uses o no estas herramientas puedes enseñarle tu música a miles de personas que entran en nuestra plataforma para descubrirte.  </p>
                                </div>
                            </div>
                            <div className='sectionImage'>
                                <img src={mockup6}></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='five'>
                    <div className='titleMainSection'>
                        ¿Qué nos diferencia? 
                        <div className='titleLineGreen'></div>
                    </div>
                    <div className='bodyMainSection'>
                        <div className='whiteSection'>
                            <div className='sectionImage'>
                                <img src={mockup2}></img>
                            </div>
                            <div className='whiteSectionText'>
                                <div className='whiteTitle'>
                                No son solo reproducciones, sino nuevos oyentes 
                                </div>
                                <div className='whiteParragraph'>
                                    
                                    <p> Nuestro algoritmo lleva tu música a gente totalmente nueva, para nosotros las reproducciones no son lo importante. </p>
                                </div>
                            </div>
                        </div>
                        <div className='graySection'>
                            <div className='graySectionText'>
                                <div className='grayTitle'>
                                Deja que te descubran
                                </div>
                                <div className='grayParragraph'>
                                HearBound no es una plataforma de streaming, aquí no buscas canciones, aquí las descubres. 
                                        <br></br>
                                        <br></br>
                                        Los oyentes buscan descubrir música, esto permite a artistas crecer en un ecosistema creado por y para ellos 
                                </div>
                            </div>
                            <div className='sectionImage'>
                                <img src={mockup5}></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='six'>
                    <div className='testNow'>
                        <p>¿Te gustaría ser de los primeros en usarla?</p>
                        <button>Pruébalo Ya</button>
                    </div>
                    <div className='partners'>
                        <div className='partnersText'><p>Queremos dar también las gracias a nuestros partners y colaboradores, como espacioRES, que nos ayudan día a día a llevar este proyecto adelante.  </p></div>
                        <div className='partnersImages'>
                            <img src={Res} />
                            <img src={Amazon} />
                            <div className='holded' >
                                <img src={Holded} />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </div>
        </>
    );
}

export default Home