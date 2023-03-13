import { useState, useEffect } from 'react'
import './Projects.css';
import Navbar from '../components/navbar/Navbar';
import Section from '../components/section/Section';
import Projects from "../components/projects/Projects";
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Background from '../assets/gradientbg.png';

function ProjectsPage() {

    const [language, setLanguage] = useState('');
    useEffect(() => {
        setLanguage(window.navigator.language)
    }, [])

    const content = [{
        esp: {
            introduction: {
                title: 'Mis Mejores Proyectos',
                message: 'He desarrollado muchos proyectos a lo largo de mi pequeña carrera como desarrollador, estos son algunos de los que concidero mi mejor trabajo. ',
            }
        },
        eng: {
            introduction: {
                title: 'My Best Projects',
                message: "I've developed many projects throughout this last year as a developer, these are some of the ones that I consider to be my best work. "
            }
        }
    }]

    const contentOn = language == 'es-ES' ? content[0].esp : content[0].eng;
    const { title: titleIntro, message: messageIntro } = contentOn.introduction;
    return (
        <div>
            <Navbar lang={language} />
            <div className="background-container">
                <div className="dinamic-background">
                    <img src={Background} />
                </div>
            </div>
            <Section id='introduction'>
                <div className='introduction-content'>
                    <div className='introduction-message'>
                        <h1 className='introduction-title'>{titleIntro}</h1>
                        <h3 className='introduction-subtitle'>{messageIntro}</h3>
                    </div>
                </div>
            </Section>
            <Section id='projects'>
                <Projects />
            </Section>
            <Section id='contact'>
                <Contact lang={language} />
            </Section>
            <Section id='footer'>
                <Footer lang={language} />
            </Section>
        </div>
    )
}

export default ProjectsPage
