import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
