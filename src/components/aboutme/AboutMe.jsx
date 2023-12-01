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
                message: 'Comencé como artista 3D creando assets para videojuegos creados por fans y me he esforzado en aprender las habilidades necesarias para convertirme en desarrollador web. Actualmente me encuentro trabajando en proyectos personales mientras busco un puesto de trabajo para ser Full Stack Developer a tiempo completo.',
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
                message: "I started out as a 3D artist for fan game assets, and have worked to learn the skills to become a full stack developer. I have practical experience with node.js, crud, and am fleshing out my backend skillset. Once I have mastered this, I will work to acquire a full time developer job.",
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