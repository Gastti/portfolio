import CardTech from "../card-tech/CardTech";
import "./CardProject.css";
import "./CardProject.Responsive.css";
import GithubIcon from "../../assets/github.png";
import DeployIcon from "../../assets/website.png";

function CardProject({
  title,
  image,
  color,
  type,
  technologies = [],
  description,
  githubText,
  githubUrl,
  deployText,
  deployUrl
}) {
  function TechsRender(array) {
    return array.map((item) => {
      return <CardTech name={item} key={item} />;
    });
  }

  return (
    <div
      className={`cardproject-container ${type}`}
      style={{ backgroundColor: color || "#ccc" }}
    >
      <div className="technologies-container">{TechsRender(technologies)}</div>
      <img src={image} />
      <div
        style={{
          background: `linear-gradient(0deg, ${
            color || "#ccc"
          } 5%, rgba(255,255,255,0) 40%)`,
          width: "100%",
          height: "100%",
          zIndex: "2",
          position: "absolute",
        }}
      ></div>
      <div className="cardproject-content">
        <div className="cardproject-url-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="cardproject-urls">
            <a href={githubUrl} target="_blank"> 
              <img src={GithubIcon} />
              <span>{githubText}</span>
            </a>
            <a href={deployUrl} target="_blank"> 
              <img src={DeployIcon} />
              <span>{deployText}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;