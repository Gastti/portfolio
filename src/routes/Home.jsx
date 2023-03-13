import { useState, useEffect } from 'react'
import './Home.css';
import './Home.Responsive.css';
import Navbar from '../components/navbar/Navbar';
import Section from '../components/section/Section';
import Button from '../components/button/Button';
import Background from '../assets/gradientbg.png';
import Projects from "../components/projects/Projects";
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import QuickContact from '../components/quickcontact/QuickContact';
import AboutMe from '../components/aboutme/AboutMe';
import Me from '../assets/me.png';

function Home() {

    const [language, setLanguage] = useState('');
    useEffect(() => {
        setLanguage(window.navigator.language)
    }, [])

    const info = [{
        esp: {
            title: '¡Hola Mundo!',
            subtitle: 'Mi nombre es Gastón Gutierrez, Full Stack Developer inclinado hacia el backend y apasionado en crear soluciones a través la programación.',
            button: 'Ver CV'
        },
        eng: {
            title: "Hello World! I'm Gastón.",
            subtitle: "I'm Gastón, Full Stack Developer passionate about creating solutions through programming.",
            button: 'See Resume'
        }
    }];

    const activeInfo = language == 'es-ES' ? info[0].esp : info[0].eng

    return (
        <div>
            <Navbar lang={language} />
            <QuickContact />
            <div className="background-container">
                <div className="dinamic-background">
                    <img src={Background} />
                </div>
            </div>
            <Section id='presentation'>
                {/* <div className='me-photo'>
                    <img src={Me} />
                </div> */}
                <div className='me-description'>
                    <h1>{activeInfo.title}</h1>
                    <h3>{activeInfo.subtitle}</h3>
                    <Button type='dark' size='large' href='#projects'>{activeInfo.button}</Button>
                </div>
            </Section>
            <Section id='aboutme'>
                <AboutMe language={language} />
            </Section>
            <Section id='projects'>
                <Projects />
            </Section>
            <Section id='contact'>
                <Contact lang={language} />
            </Section>
            <Section id='footer'>
                <Footer />
            </Section>
        </div>
    )
}

export default Home
