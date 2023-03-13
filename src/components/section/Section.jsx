import './Section.css'
import './Section.Responsive.css'

function Section({ id, children }) {
    return (
        <div id={id} className="section-container">
            <div className='section-content'>
                {children}
            </div>
        </div>
    )
}

export default Section;