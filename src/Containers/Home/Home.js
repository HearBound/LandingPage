import './Home.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/NavBar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='main'></div>
            <Footer />
        </>
    );
}

export default Home