import { useState, useEffect } from 'react';
import './Error.css'
import Section from '../components/section/Section';
import NotFound from '../components/notfound/NotFound';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function Error() {

    const [language, setLanguage] = useState('');
    useEffect(() => {
        setLanguage(window.navigator.language)
    }, [])

    return (
        <div>
            <Navbar lang={language} />
            <Section id='notfound'>
                <NotFound lang={language} />
            </Section>
            <Section id='footer'>
                <Footer />
            </Section>
        </div>
    )
}

export default Error
