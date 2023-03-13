import './Footer.css';
import './Footer.Responsive.css';
import Me from '../../assets/me.png';

function Footer() {
    const links = [
        { name: 'Linkedin', href: 'https://www.linkedin.com/in/gastongutierrez96/', target: '_blank' },
        { name: 'Github', href: 'https://github.com/Gastti', target: '_blank' },
        { name: 'Twitter', href: 'https://twitter.com/gasttidev', target: '_blank' },
        { name: 'About', href: '/about', target: '_self' },
    ]

    function LinksRender(links) {
        return links.map((link) => {
            return (
                <a href={link.href} target={link.target} key={link.name}>{link.name}</a>
            )
        })
    }

    return (
        <div className='footer-container'>
            <div className='myprofile'>
                <div className='profile-photo'><img src={Me} /></div>
                <div>
                    <h5 className='profile-name'>Gastón Gutierrez</h5>
                    <h6 className='profile-title'>Full Stack Developer</h6>
                </div>
            </div>
            <div className='interest-links'>
                {LinksRender(links)}
            </div>
        </div>
    )
}

export default Footer