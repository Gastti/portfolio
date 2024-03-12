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
  githubbText,
  githubbUrl,
  deployText,
  deployUrl,
  github_disabled
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
        className="cardproject-gradient"
        style={{
          background: `linear-gradient(0deg, ${color || "#ccc"
            } 5%, rgba(255,255,255,0) 40%)`,
        }}
      ></div>
      <div className="cardproject-content">
        <div className="cardproject-url-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="cardproject-urls">
            {!github_disabled && (<>
              <a href={githubUrl} target="_blank">
                <img src={GithubIcon} />
                <span>{githubText}</span>
              </a>
              <a href={githubbUrl} target="_blank">
                <img src={GithubIcon} />
                <span>{githubbText}</span>
              </a>
            </>)}
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
