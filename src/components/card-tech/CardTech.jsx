import './CardTech.css';
import mongodb from '../../assets/techs/mongodb.png';
import mysql from '../../assets/techs/mysql.png';
import node from '../../assets/techs/node.png';
import postgresql from '../../assets/techs/postgresql.png';
import react from '../../assets/techs/react.png';

function CardTech({ name }) {
    const techList = [{
        mongodb: {
            title: 'MongoDB',
            img: mongodb
        },
        mysql: {
            title: 'MySQL',
            img: mysql
        },
        node: {
            title: 'Node.js',
            img: node
        },
        postgresql: {
            title: 'PostgreSQL',
            img: postgresql
        },
        react: {
            title: 'React.js',
            img: react
        }
    }];

    const techOn = techList[0][name];

    return (
        <div className={`cardtech-layout ${name}`}>
            <img src={techOn.img} />
            <span>{techOn.title}</span>
        </div>
    )
}

export default CardTech;