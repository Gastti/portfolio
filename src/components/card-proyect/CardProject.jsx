import CardTech from '../card-tech/CardTech';
import './CardProject.css'
import './CardProject.Responsive.css'

function CardProject({ title, image, href, color, type, technologies = [] }) {
    function TechsRender(array) {
        return array.map((item) => {
            return (
                <CardTech name={item} key={item} />
            )
        })
    }

    return (
        <div className={`cardproject-container ${type}`} style={{ backgroundColor: color || '#ccc' }}>
            <div className='technologies-container'>
                {TechsRender(technologies)}
            </div>
            <img src={image} />
            <div style={{
                background: `linear-gradient(0deg, ${color || '#ccc'} 5%, rgba(255,255,255,0) 40%)`,
                width: '100%',
                height: '100%',
                zIndex: '2',
                position: 'absolute'
            }}></div>
            <a className='cardproject-url' href={href} target='_blank'>
                <div className='cardproject-url-content'>
                    <h4>{title}</h4>
                </div>
            </a>
        </div>
    )
}

export default CardProject;