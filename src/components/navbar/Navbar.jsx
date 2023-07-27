import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
import './Navbar.Responsive.css';
import MenuIcon from '../../assets/menuicon.png';

function Navbar({ lang }) {
    const language = lang;
    const [clicked, setClicked] = useState(false);
    const isClicked = clicked ? 'active' : '';

    const Links = [
        { name: { esp: 'Inicio', eng: 'Home' }, href: '/' },
        { name: { esp: 'Contacto', eng: 'Contact' }, href: '#contactme' },
        { name: { esp: 'Linkedin', eng: 'Linkedin' }, href: 'https://www.linkedin.com/in/gastongutierrez96' },
        { name: { esp: 'Github', eng: 'Github' }, href: 'https://github.com/Gastti' }, 
        { name: { esp: 'Proyectos', eng: 'View Work' }, href: '/work' },
    ]

    function goTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    function NavbarRender(links) {
        return links.map((link) => {
            console.log(link.href[0])
            return (
                <li key={link.href}>
                    {
                        link.href[0].includes('/')
                            ? <Link to={link.href} onClick={goTop}>{language == 'es-ES' ? link.name.esp : link.name.eng}</Link>
                            : <a href={link.href} target={link.href[0] != "#" ? "_blank" : ""}>{language == 'es-ES' ? link.name.esp : link.name.eng}</a>
                    }
                </li>
            )
        })
    }

    function handleClick() {
        setClicked(!clicked)
    }

    return (
        <div className="navbar">
            <div className='logo-container'>
                <Link to='/' onClick={goTop}>
                    <div className='img'></div>
                    <span>Gastón Gutierrez</span>
                </Link>
            </div>
            <div className='menu-container'>
                <div className={`menu-links ${isClicked}`} onClick={clicked ? handleClick : null}>
                    <ul className={isClicked}>
                        {NavbarRender(Links)}
                    </ul>
                </div>
                <div className='menu-button' onClick={handleClick}>
                    <img src={MenuIcon} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
