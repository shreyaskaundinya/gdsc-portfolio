import About from '../components/about';
import Contact from '../components/contact';
import Experiences from '../components/experience';
import Hero from '../components/hero';
import Projects from '../components/projects';

export default function Home() {
    return (
        <div className=''>
            <Hero />
            <About />
            <Experiences />
            <Projects />
            <Contact />
        </div>
    );
}
