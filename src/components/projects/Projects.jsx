import "./Projects.css";
import "./Projects.Responsive.css";
import CardProject from "../card-project/CardProject";
import ProjectPlaceholder from "../../assets/projectplaceholder.png";
import TictactoeImage from "../../assets/tictactoe.png";

function Projects({ lang }) {
  const proyectos = [
    {
      title: "Tic Tac Toe",
      description: {
        eng: "It is an online multiplayer game where you can create a room and invite your friends to play with you.",
        esp: "Es un juego multijugador online en el que puedes crear una sala e invitar a tus amigos a jugar contigo.",
      },
      technologies: ["typescript", "node", "react", "socketio"],
      color: "#1f115f",
      image: TictactoeImage,
      github_text: {
        eng: "Go to repository",
        esp: "Ir a Github",
      },
      github_url: "https://github.com/Gastti/tic-tac-toe",
      deploy_text: {
        eng: "Go to site",
        esp: "Ir al sitio",
      },
      deploy_url: "https://tic-tac-toe-gastti.vercel.app/#/",
    },
    {
      title: "Segundo Projecto",
      description: {
        eng: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        esp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      },
      technologies: ["javascript", "node", "react", "mysql"],
      color: "#2a2c31",
      image: ProjectPlaceholder,
      github_text: {
        eng: "Go to repository",
        esp: "Ir a Github",
      },
      github_url: "https://github.com/Gastti",
      deploy_text: {
        eng: "Go to site",
        esp: "Ir al sitio",
      },
      deploy_url: "#",
    },
  ];

  const renderGeneral = (array) => {
    return array.map((x) => {
      const {
        title,
        technologies,
        color,
        type = "",
        image,
        description,
        github_text,
        github_url,
        deploy_text,
        deploy_url,
      } = x;
      return (
        <CardProject
          key={title}
          href="#"
          image={image}
          title={title}
          description={lang === "es-ES" ? description.esp : description.eng}
          technologies={technologies}
          color={color}
          type={type || ""}
          githubText={lang === "es-ES" ? github_text.esp : github_text.eng}
          githubUrl={github_url}
          deployText={lang === "es-ES" ? deploy_text.esp : deploy_text.eng}
          deployUrl={deploy_url}
        />
      );
    });
  };

  return (
    <div className="grid-projects-container">{renderGeneral(proyectos)}</div>
  );
}

export default Projects;
