import "./Projects.css";
import "./Projects.Responsive.css";
import CardProject from "../card-project/CardProject";
import ProjectPlaceholder from "../../assets/projectplaceholder.png";
import TictactoeImage from "../../assets/tictactoe.png";
import BlogImage from "../../assets/blog.png";
import ScoutingImage from "../../assets/scouting.png";

function Projects({ lang }) {
  const proyectos = [
    {
      title: "Tic Tac Toe",
      description: {
        eng: "It is an online multiplayer game where you can create a lobby and invite your friends to play with you.",
        esp: "Es un juego multijugador en linea en el que puedes crear una sala e invitar a tus amigos a jugar contigo.",
      },
      technologies: ["typescript", "node", "react", "socketio"],
      color: "#160c41",
      image: TictactoeImage,

      github_disabled: false,

      github_text: {
        eng: "Client Code",
        esp: "Client Code",
      },
      github_url: "https://github.com/Gastti/tic-tac-toe",

      githubb_text: {
        eng: "Server Code",
        esp: "Server Code",
      },
      githubb_url: "https://github.com/Gastti/tic-tac-toe-server",

      deploy_text: {
        eng: "Go to site",
        esp: "Ir al sitio",
      },
      deploy_url: "https://tic-tac-toe-gastti.vercel.app/#/",
    },
    {
      title: "Blog.",
      description: {
        eng: "Personalized platform for the expression and exchange of ideas.",
        esp: "Plataforma personalizada para la expresión y el intercambio de ideas.",
      },
      technologies: ["typescript", "node", "react", "mongodb"],
      color: "#2a2c31",
      image: BlogImage,

      github_disabled: false,

      github_text: {
        eng: "Client Code",
        esp: "Client Code",
      },
      github_url: "https://github.com/Gastti/blog-client",

      githubb_text: {
        eng: "Server Code",
        esp: "Server Code",
      },
      githubb_url: "https://github.com/Gastti/blog-server",

      deploy_text: {
        eng: "Go to site",
        esp: "Ir al sitio",
      },
      deploy_url: "https://blog-client-two-steel.vercel.app/",
    },
    {
      title: "Scouting",
      description: {
        eng: "It is a landing page that I developed for a sports consultancy seeking to cover each of their needs.",
        esp: "Es una landing page que desarrollé para una consultora deportiva buscando cubrir cada una de sus necesidades.",
      },
      technologies: ["typescript", "nextjs", "tailwind"],
      color: "#2a2c31",
      image: ScoutingImage,

      github_disabled: true,

      github_text: {
        eng: "Client Code",
        esp: "Client Code",
      },
      github_url: "https://github.com/Gastti/tic-tac-toe",

      githubb_text: {
        eng: "Server Code",
        esp: "Server Code",
      },
      githubb_url: "https://github.com/Gastti/tic-tac-toe-server",

      deploy_text: {
        eng: "Go to site",
        esp: "Ir al sitio",
      },
      deploy_url: "https://scouting.com.ar",
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
        githubb_text,
        githubb_url,
        deploy_text,
        deploy_url,
        github_disabled
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
          githubbText={lang === "es-ES" ? githubb_text.esp : githubb_text.eng}
          githubbUrl={githubb_url}
          deployText={lang === "es-ES" ? deploy_text.esp : deploy_text.eng}
          deployUrl={deploy_url}
          github_disabled={github_disabled}
        />
      );
    });
  };

  return (
    <div className="grid-projects-container">{renderGeneral(proyectos)}</div>
  );
}

export default Projects;
