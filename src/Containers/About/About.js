import './About.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';
import TeamCard from '../../Components/TeamCard/TeamCard';
import Image from '../../images/desktop.png';
import Carousel from '../../Components/Carousel/Carousel';

const About = () => {
    return (
        <>
            <Navbar />
            
            <div className='about'>
            <div className='colorBlueAbout'></div>
                <div className='colorPurpleAbout'></div>
                <div className='titleAbout'>
                    <div className='decorationAbout'></div>
                    <h2>Nuestra Historia</h2>
                    <div className='decorationAbout'></div>
                </div>
                <div className='textAbout'>
                    <p>Somos un pequeño gran equipo de jóvenes que ama la música.</p>

                    <p>Como amantes de la música, queremos que todos los artistas puedan llevar su talento a cualquier rincón del mundo.</p> 

                    <p>Desde el inicio en 2019 por Jaime, más socios y colaboradores se han unido al proyecto, aportando visión e ideas a la plataforma.</p>

                    <p>Hoy por hoy HearBound es el lugar donde descubrir compartir y disfrutar de musica de todo tipo.</p>

                </div>

                <div className='team'>
                    <div className='titleTeam'>Este es nuestro equipo</div>
                    {/* Show carousel just  in Desktop format */}
                    <div className='cards' id='showCards'>
                        <TeamCard image={Image} name='Jaime Martinez' job='CEO' />
                        <TeamCard image={Image} name='William Sargisson' job='COO'/>
                        <TeamCard image={Image} name='Gregorio Bujor' job='CTO'/>
                        <TeamCard image={Image} name='Angel Rodriguez' job='Subdirector de desarrollo'/>
                        <TeamCard image={Image} name='David Martinez' job='Programador'/>

                    </div>
                    {/* Show carousel just  in Movil format */}
                    <div id='showCarousel'>
                    <Carousel/>
                    </div>
                </div>
                <div className='endingTextAbout'>
                    <p>Provenientes de diferentes sectores del mundo, nos ha acabado uniendo una pasión
                        <br></br>
                        La música.
                    </p> 
                </div>
                <div className='testNowAbout'>
                    <div>¿Imaginas la vida sin musica?</div>
                    <button>Pruébalo gratis</button>
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default About;