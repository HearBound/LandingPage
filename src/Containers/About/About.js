import './About.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';

const About = () => {
    return (
        <>
            <Navbar />
            <div className='about'>
                <div className='titleAbout'>
                    <div className='decorationAbout'></div>
                    <h2>Nuestra Historia</h2>
                    <div className='decorationAbout'></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;