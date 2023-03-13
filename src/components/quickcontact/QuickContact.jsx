import './QuickContact.css';
import LinkedinLogo from '../../assets/linkedin.png'
import GithubLogo from '../../assets/github.png'

function QuickContact() {
    return (
        <div className='quickcontact'>
            <a href='https://www.linkedin.com/in/gastongutierrez96/' target='_blank'><img src={LinkedinLogo} /></a>
            <a href='https://github.com/Gastti' target='_blank'><img src={GithubLogo} /></a>
        </div>
    );
}

export default QuickContact;