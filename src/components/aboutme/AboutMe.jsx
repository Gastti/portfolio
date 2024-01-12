import './AboutMe.css';
import './AboutMe.Responsive.css';

function AboutMe({ language }) {
    const content = [{
        esp: {
            introduction: {
                title: '¡Hola mundo!',
                message: 'Mi nombre es Gastón y soy Full Stack Developer.',
            },
            experience: {
                title: 'Mi Experiencia',
                message: 'Full Stack Developer con dos años de experiencia trabajando de manera independiente. Mi enfoque se centra en la creación de sitios web únicos y funcionales que no solo cumplen con las expectativas, sino que también reflejan la visión y personalidad de mis clientes.',
                technologies: ['TYPESCRIPT','JAVASCRIPT', 'NODE.JS', 'REACT.JS', 'HTML', 'CSS', 'MONGODB', 'MYSQL', 'POSTGRESQL', 'GIT', 'JIRA', 'AWS', 'PHOTOSHOP']
            }
        },
        eng: {
            introduction: {
                title: 'Hello world!',
                message: "My name is Gastón and I'm a autodidactic Full Stack Developer."
            },
            experience: {
                title: 'My Experience',
                message: "Full Stack Developer with two years of experience working independently. My focus is on creating unique and functional websites that not only meet expectations, but also reflect the vision and personality of my clients.",
                technologies: ['TYPESCRIPT','JAVASCRIPT', 'NODE.JS', 'REACT.JS', 'HTML', 'CSS', 'MONGODB', 'MYSQL', 'POSTGRESQL','GIT', 'JIRA',  'AWS', 'PHOTOSHOP']
            }
        }
    }]

    const contentOn = language == 'es-ES' ? content[0].esp : content[0].eng;
    const { title: titleExp, message: messageExp, technologies } = contentOn.experience;

    function RenderTags(array) {
        return array.map((item) => {
            return (
                <span className='technologies-tag' key={item}>{item}</span>
            )
        })
    }
    return (
        <div className='grid-career-container'>
            <h2>{titleExp}</h2>
            <p>{messageExp}</p>
            <div className='technologies-list'>
                {RenderTags(technologies)}
            </div>
        </div>
    )
}

export default AboutMe;