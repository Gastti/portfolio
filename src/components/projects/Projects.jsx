import './Projects.css';
import './Projects.Responsive.css';
import CardProject from '../card-proyect/CardProject';
import ProjectPlaceholder from '../../assets/projectplaceholder.png'

function Projects() {

    const proyectos = [
        { title: 'Primer Projecto', technologies: ['node', 'react', 'mongodb'], color: '#20c7e9' },
        { title: 'Segundo Projecto', technologies: ['node', 'react', 'mysql'], color: '#20c7f2' },
        { title: 'Tercer Projecto', technologies: ['node', 'react', 'mysql'], color: '#20c7f9', type: 'small' },
        { title: 'Cuarto Projecto', technologies: ['node', 'react', 'mysql'], color: '#207ce9', type: 'small' },
    ]

    const renderGeneral = (array) => {
        return array.map((x) => {
            const { title, technologies, color, type = '' } = x;
            return <CardProject
                href='#'
                image={ProjectPlaceholder}
                title={title}
                technologies={technologies}
                color={color}
                type={type || ''}
            />
        })
    }

    return (
        <div className="grid-projects-container">
            {renderGeneral(proyectos)}
        </div>
    );
}

export default Projects;